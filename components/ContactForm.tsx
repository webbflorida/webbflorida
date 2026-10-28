"use client";
import { useState } from "react";

// Envia o pedido para a planilha "Leads Webb" (Google Apps Script), que também manda o e-mail.
// O endereço do script fica na Vercel: NEXT_PUBLIC_LEAD_URL. Sem ele, o botão fica desligado.
const LEAD_URL = process.env.NEXT_PUBLIC_LEAD_URL || "";

type T = Record<string, string>;

export default function ContactForm({ lang, t, goals, note }: { lang: string; t: T; goals: string[]; note: string }) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!LEAD_URL) return;
    setState("sending");
    const data = new URLSearchParams();
    new FormData(e.currentTarget).forEach((v, k) => data.append(k, String(v)));
    data.append("lang", lang);
    data.append("page", typeof document !== "undefined" ? document.referrer || location.pathname : "");
    try {
      await fetch(LEAD_URL, { method: "POST", mode: "no-cors", body: data });
      setState("sent");
      (window as any).gtag?.("event", "generate_lead", { method: "contact_form" });
    } catch {
      setState("error");
    }
  }

  if (state === "sent") return <div className="form"><p className="body-lg">{t.thanks}</p></div>;

  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
      <label>{t.name}<input name="name" required autoComplete="name" /></label>
      <label>{t.email}<input name="email" type="email" required autoComplete="email" /></label>
      <label>{t.phone}<input name="phone" type="tel" autoComplete="tel" /></label>
      <label>{t.goal}<select name="goal">{goals.map((g) => <option key={g}>{g}</option>)}</select></label>
      <label>{t.message}<textarea name="message" rows={5} /></label>
      <button className="btn btn-dark" type="submit" disabled={!LEAD_URL || state === "sending"}>{state === "sending" ? "…" : t.send}</button>
      {!LEAD_URL && <p className="muted" style={{ fontSize: 13 }}>{note}</p>}
      {state === "error" && <p className="muted" style={{ fontSize: 13 }}>{t.error}</p>}
    </form>
  );
}
