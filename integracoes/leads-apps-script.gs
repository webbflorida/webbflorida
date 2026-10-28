/**
 * Leads Webb: recebe o formulário do site, salva na planilha e envia e-mail.
 * Como instalar (o Ramon faz, logado na conta Google da Webb):
 * 1. Abrir a planilha "Leads Webb" → Extensões → Apps Script.
 * 2. Colar este código e salvar.
 * 3. Implantar → Nova implantação → Tipo: App da Web.
 *    Executar como: Eu. Quem pode acessar: Qualquer pessoa. → Implantar e autorizar.
 * 4. Copiar o URL do app (termina em /exec) e cadastrar na Vercel como
 *    NEXT_PUBLIC_LEAD_URL (Settings → Environment Variables), depois Redeploy.
 */
const NOTIFY = "info@webbflorida.com"; // quem recebe o aviso de novo lead

function doPost(e) {
  const p = e.parameter || {};
  if (p.website) return ContentService.createTextOutput("ok"); // robô (campo escondido preenchido)
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Data", "Nome", "E-mail", "Telefone", "Interesse", "Mensagem", "Idioma", "Página"]);
  }
  const row = [new Date(), p.name, p.email, p.phone, p.goal, p.message, p.lang, p.page];
  sheet.appendRow(row);
  MailApp.sendEmail({
    to: NOTIFY,
    replyTo: p.email || NOTIFY,
    subject: "Novo contato pelo site: " + (p.name || "") + " · " + (p.goal || ""),
    body:
      "Nome: " + (p.name || "") + "\nE-mail: " + (p.email || "") + "\nTelefone: " + (p.phone || "") +
      "\nInteresse: " + (p.goal || "") + "\nIdioma: " + (p.lang || "") + "\nPágina: " + (p.page || "") +
      "\n\nMensagem:\n" + (p.message || ""),
  });
  return ContentService.createTextOutput("ok");
}
