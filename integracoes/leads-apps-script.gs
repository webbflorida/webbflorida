/**
 * CRM Webb: planilha "Leads Webb" + automações.
 *
 * O que faz sozinho:
 *  - Recebe o formulário do site e grava o lead na aba "Leads" (com origem e link de WhatsApp).
 *  - Responde o cliente na hora, por e-mail, no idioma dele (PT/EN/ES).
 *  - Avisa a Webb por e-mail a cada lead novo.
 *  - Todo dia às 8h (horário da Flórida) manda um resumo: leads novos, leads parados e follow-ups do dia.
 *  - Registra a data sempre que o Status de um lead muda.
 *  - Aba "Painel" com leads por mês, status, origem, interesse e idioma.
 *
 * Como instalar (logado na conta Google dona da planilha):
 *  1. Abrir a planilha "Leads Webb" → Extensões → Apps Script.
 *  2. Apagar o que estiver lá, colar este código e salvar (ícone de disquete).
 *  3. No menu de funções lá em cima escolher "setup" → Executar → autorizar (Avançado → Acessar).
 *  4. Implantar → Nova implantação → engrenagem → App da Web.
 *     Executar como: Eu. Quem pode acessar: Qualquer pessoa. → Implantar.
 *  5. Copiar o URL do app (termina em /exec) e mandar para o Claude ligar no site.
 */

const NOTIFY = "info@webbflorida.com"; // quem recebe avisos e o resumo diário
const REPLY_TO = "info@webbflorida.com"; // para onde vai a resposta do cliente
const WHATSAPP = "14076010733";
const TZ = "America/New_York";
const DIAS_PARADO = 2; // lead "Novo" há mais de X dias entra no alerta

const STATUS = ["Novo", "Em contato", "Visita", "Proposta", "Fechado", "Perdido"];
const HEAD = ["Data", "Nome", "E-mail", "Telefone", "Interesse", "Mensagem", "Idioma", "Origem", "Página",
  "Status", "Próximo contato", "Notas", "Atualizado em", "WhatsApp"];
const C = {}; HEAD.forEach((h, i) => (C[h] = i + 1)); // número da coluna por nome

// ---------- Formulário do site ----------

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.website) return ok_(); // robô (campo escondido preenchido)
  if (!p.name && !p.email && !p.phone) return ok_();

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sh = leads_();
    const row = [new Date(), p.name || "", p.email || "", p.phone || "", p.goal || "", p.message || "",
      (p.lang || "pt").toUpperCase(), origem_(p.source), p.page || "", "Novo", "", "", new Date(), ""];
    sh.appendRow(row);
    const r = sh.getLastRow();
    const wa = waLink_(p.phone, p.name, p.lang);
    if (wa) sh.getRange(r, C["WhatsApp"]).setFormula('=HYPERLINK("' + wa + '","Abrir WhatsApp")');
  } finally {
    lock.releaseLock();
  }

  avisoInterno_(p);
  if (p.email) respostaCliente_(p);
  return ok_();
}

function doGet() {
  return ContentService.createTextOutput("CRM Webb ativo.");
}

// ---------- E-mails ----------

const TXT = {
  pt: {
    subject: "Recebemos sua mensagem · Webb Florida Realty",
    hello: (n) => "Olá" + (n ? ", " + n : "") + ".",
    body: "Recebemos sua mensagem e um de nossos corretores retornará em até um dia útil.",
    wa: "Se preferir, fale conosco agora pelo WhatsApp:",
    waMsg: "Olá, enviei uma mensagem pelo site da Webb Florida Realty.",
  },
  en: {
    subject: "We received your message · Webb Florida Realty",
    hello: (n) => "Hello" + (n ? " " + n : "") + ",",
    body: "We have received your message and one of our agents will reply within one business day.",
    wa: "If you prefer, reach us now on WhatsApp:",
    waMsg: "Hello, I sent a message through the Webb Florida Realty website.",
  },
  es: {
    subject: "Recibimos su mensaje · Webb Florida Realty",
    hello: (n) => "Hola" + (n ? ", " + n : "") + ".",
    body: "Recibimos su mensaje y uno de nuestros agentes le responderá en un plazo de un día hábil.",
    wa: "Si lo prefiere, escríbanos ahora por WhatsApp:",
    waMsg: "Hola, envié un mensaje a través del sitio de Webb Florida Realty.",
  },
};

function respostaCliente_(p) {
  const t = TXT[(p.lang || "pt").toLowerCase()] || TXT.pt;
  const first = String(p.name || "").trim().split(/\s+/)[0] || "";
  const wa = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(t.waMsg);
  const sign = "Webb Florida Realty\nOrlando · Miami\n+1 (407) 601-0733 · info@webbflorida.com · webbflorida.com";
  const plain = t.hello(first) + "\n\n" + t.body + "\n\n" + t.wa + " " + wa + "\n\n" + sign;
  const html =
    '<div style="font-family:Georgia,serif;color:#0E2238;font-size:15px;line-height:1.6;max-width:520px">' +
    "<p>" + esc_(t.hello(first)) + "</p><p>" + esc_(t.body) + "</p>" +
    "<p>" + esc_(t.wa) + ' <a href="' + wa + '" style="color:#A8834E">+1 (407) 601-0733</a></p>' +
    '<p style="margin-top:28px;border-top:1px solid #CDB28A;padding-top:14px;font-size:13px;letter-spacing:.04em">' +
    "<strong>WEBB FLORIDA REALTY</strong><br>Orlando · Miami<br>" +
    '<a href="https://webbflorida.com" style="color:#A8834E">webbflorida.com</a> · info@webbflorida.com</p></div>';
  MailApp.sendEmail({ to: p.email, replyTo: REPLY_TO, name: "Webb Florida Realty", subject: t.subject, body: plain, htmlBody: html });
}

function avisoInterno_(p) {
  const wa = waLink_(p.phone, p.name, p.lang);
  MailApp.sendEmail({
    to: NOTIFY,
    replyTo: p.email || NOTIFY,
    name: "Site Webb",
    subject: "Novo lead: " + (p.name || "sem nome") + " · " + (p.goal || "") + " · " + origem_(p.source),
    body:
      "Nome: " + (p.name || "") + "\nE-mail: " + (p.email || "") + "\nTelefone: " + (p.phone || "") +
      "\nInteresse: " + (p.goal || "") + "\nIdioma: " + (p.lang || "") + "\nOrigem: " + origem_(p.source) +
      "\nPágina: " + (p.page || "") + "\n\nMensagem:\n" + (p.message || "") +
      (wa ? "\n\nWhatsApp: " + wa : "") +
      "\n\nPlanilha: " + SpreadsheetApp.getActiveSpreadsheet().getUrl() +
      "\n(O cliente já recebeu a resposta automática.)",
  });
}

// ---------- Resumo diário (8h) ----------

function resumoDiario() {
  const sh = leads_();
  const n = sh.getLastRow() - 1;
  if (n < 1) return;
  const rows = sh.getRange(2, 1, n, HEAD.length).getValues();
  const now = new Date();
  const hoje = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const novos = [], parados = [], agenda = [];

  rows.forEach((r) => {
    const data = r[C["Data"] - 1], status = r[C["Status"] - 1], prox = r[C["Próximo contato"] - 1];
    const linha = "• " + r[C["Nome"] - 1] + " · " + r[C["Interesse"] - 1] + " · " + (r[C["Telefone"] - 1] || r[C["E-mail"] - 1]);
    if (data instanceof Date && now - data < 24 * 3600e3) novos.push(linha);
    if (status === "Novo" && data instanceof Date && now - data > DIAS_PARADO * 24 * 3600e3)
      parados.push(linha + " (desde " + fmt_(data) + ")");
    if (prox instanceof Date && prox <= hoje && status !== "Fechado" && status !== "Perdido")
      agenda.push(linha + " (" + status + ", " + fmt_(prox) + ")");
  });

  if (!novos.length && !parados.length && !agenda.length) return; // nada a dizer, não manda e-mail
  const bloco = (titulo, lista) => (lista.length ? titulo + " (" + lista.length + ")\n" + lista.join("\n") + "\n\n" : "");
  MailApp.sendEmail({
    to: NOTIFY,
    name: "CRM Webb",
    subject: "Resumo de leads · " + fmt_(now),
    body:
      bloco("Novos nas últimas 24h", novos) +
      bloco("Sem retorno há mais de " + DIAS_PARADO + " dias (status Novo)", parados) +
      bloco("Follow-ups para hoje", agenda) +
      "Planilha: " + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
  });
}

// Quando o Status muda, grava a data em "Atualizado em".
function onEdit(e) {
  const r = e.range;
  if (r.getSheet().getName() !== "Leads" || r.getRow() < 2) return;
  if (r.getColumn() <= C["Status"] && r.getLastColumn() >= C["Status"])
    r.getSheet().getRange(r.getRow(), C["Atualizado em"], r.getNumRows(), 1).setValue(new Date());
}

// ---------- Instalação (rodar uma vez) ----------

function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.setSpreadsheetTimeZone(TZ);
  const sh = ss.getSheetByName("Leads") || ss.getSheets()[0].setName("Leads");

  sh.getRange(1, 1, 1, HEAD.length).setValues([HEAD])
    .setFontWeight("bold").setBackground("#0E2238").setFontColor("#F3EEE6");
  sh.setFrozenRows(1);
  sh.setFrozenColumns(2);
  const w = [130, 170, 210, 140, 160, 300, 70, 110, 160, 120, 130, 260, 130, 130];
  w.forEach((px, i) => sh.setColumnWidth(i + 1, px));
  sh.getRange("A2:A").setNumberFormat("dd/MM/yyyy HH:mm");
  sh.getRange("K2:K").setNumberFormat("dd/MM/yyyy");
  sh.getRange("M2:M").setNumberFormat("dd/MM/yyyy HH:mm");
  sh.getRange("F2:F").setWrap(true);

  // Lista de status e calendário no "Próximo contato"
  sh.getRange("J2:J").setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(STATUS, true).build());
  sh.getRange("K2:K").setDataValidation(SpreadsheetApp.newDataValidation().requireDate().build());

  // Cores por status
  const cor = { "Novo": "#FCE8B2", "Em contato": "#D9E7F5", "Visita": "#E3DAF0", "Proposta": "#F3E1C7", "Fechado": "#D6EAD8", "Perdido": "#EEEEEE" };
  const rng = sh.getRange("A2:N");
  sh.setConditionalFormatRules(Object.keys(cor).map((s) =>
    SpreadsheetApp.newConditionalFormatRule().whenFormulaSatisfied('=$J2="' + s + '"').setBackground(cor[s]).setRanges([rng]).build()));

  painel_(ss);

  // Resumo diário às 8h (remove agendamentos antigos para não duplicar)
  ScriptApp.getProjectTriggers().forEach((t) => {
    if (t.getHandlerFunction() === "resumoDiario") ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger("resumoDiario").timeBased().everyDays(1).atHour(8).inTimezone(TZ).create();

  SpreadsheetApp.getActive().toast("CRM Webb instalado.");
}

function painel_(ss) {
  const p = ss.getSheetByName("Painel") || ss.insertSheet("Painel");
  p.clear();
  p.setColumnWidths(1, 8, 150);
  const title = (cell, text) => p.getRange(cell).setValue(text).setFontWeight("bold").setFontColor("#A8834E");

  p.getRange("A1").setValue("Painel de leads").setFontSize(16).setFontWeight("bold").setFontColor("#0E2238");
  p.getRange("A2").setValue("Atualiza sozinho a cada novo lead.").setFontColor("#888888");

  title("A4", "Total de leads");
  p.getRange("B4").setFormula("=COUNTA(Leads!B2:B)");
  title("A5", "Últimos 30 dias");
  p.getRange("B5").setFormula("=COUNTIF(Leads!A2:A,\">=\"&(TODAY()-30))");
  title("A6", "Aguardando retorno");
  p.getRange("B6").setFormula("=COUNTIF(Leads!J2:J,\"Novo\")");

  title("A8", "Por mês");
  p.getRange("A9").setFormula("=IFERROR(QUERY(Leads!A2:B,\"select year(A), month(A)+1, count(B) where A is not null group by year(A), month(A)+1 order by year(A) desc, month(A)+1 desc label year(A) 'Ano', month(A)+1 'Mês', count(B) 'Leads'\",0),\"Sem dados\")");

  title("E8", "Por status");
  p.getRange("E9:F9").setValues([["Status", "Leads"]]).setFontWeight("bold");
  STATUS.forEach((s, i) => {
    p.getRange(10 + i, 5).setValue(s);
    p.getRange(10 + i, 6).setFormula("=COUNTIF(Leads!J2:J,E" + (10 + i) + ")");
  });

  const grupo = (cell, col, nome) => {
    title(cell, "Por " + nome.toLowerCase());
    const r = p.getRange(cell);
    p.getRange(r.getRow() + 1, r.getColumn()).setFormula(
      "=IFERROR(QUERY(Leads!" + col + "2:" + col + ",\"select " + col + ", count(" + col + ") where " + col +
      " is not null group by " + col + " order by count(" + col + ") desc label " + col + " '" + nome + "', count(" +
      col + ") 'Leads'\",0),\"Sem dados\")");
  };
  grupo("A24", "H", "Origem");
  grupo("D24", "E", "Interesse");
  grupo("G24", "G", "Idioma");
}

// ---------- Utilidades ----------

function leads_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName("Leads") || ss.getSheets()[0];
}

function origem_(src) {
  const s = String(src || "").toLowerCase();
  if (!s || s === "direto") return "Direto";
  if (/google/.test(s)) return "Google";
  if (/instagram|^ig$/.test(s)) return "Instagram";
  if (/facebook|^fb$|fb\.com/.test(s)) return "Facebook";
  if (/whatsapp|wa\.me/.test(s)) return "WhatsApp";
  if (/youtube/.test(s)) return "YouTube";
  if (/linkedin/.test(s)) return "LinkedIn";
  if (/bing|yahoo|duckduckgo/.test(s)) return "Outros buscadores";
  if (/chatgpt|openai|perplexity|claude|gemini|copilot/.test(s)) return "IA (ChatGPT etc.)";
  return s.replace(/^www\./, "");
}

function waLink_(phone, name, lang) {
  let d = String(phone || "").replace(/\D/g, "");
  if (!d) return "";
  if (d.length === 10) d = "1" + d; // número dos EUA sem o +1
  const first = String(name || "").trim().split(/\s+/)[0] || "";
  const msg = {
    pt: "Olá " + first + ", aqui é da Webb Florida Realty. Recebemos sua mensagem pelo site.",
    en: "Hello " + first + ", this is Webb Florida Realty. We received your message through our website.",
    es: "Hola " + first + ", le escribimos de Webb Florida Realty. Recibimos su mensaje a través del sitio.",
  }[(lang || "pt").toLowerCase()] || "";
  return "https://wa.me/" + d + "?text=" + encodeURIComponent(msg);
}

function fmt_(d) {
  return Utilities.formatDate(d, TZ, "dd/MM/yyyy");
}

function esc_(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function ok_() {
  return ContentService.createTextOutput("ok");
}
