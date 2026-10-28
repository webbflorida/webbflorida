"use client";
import { useEffect } from "react";

// Guarda de onde o visitante chegou na primeira visita (utm_source ou site de origem).
// O formulário de contato envia isso para a planilha de leads (coluna "Origem").
export default function SourceTracker() {
  useEffect(() => {
    try {
      if (localStorage.getItem("wf_src")) return;
      const utm = new URLSearchParams(location.search).get("utm_source");
      let src = utm || "";
      if (!src && document.referrer) {
        const host = new URL(document.referrer).hostname;
        if (host !== location.hostname) src = host;
      }
      localStorage.setItem("wf_src", src || "direto");
    } catch {}
  }, []);
  return null;
}
