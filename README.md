# Site novo Webb Florida Realty

Next.js 15 (App Router), 3 idiomas (/en, /pt, /es), páginas estáticas.

- Textos: `lib/content.ts`, `lib/guides.ts`, `lib/legal.ts`, `lib/ui.ts`
- Dados da empresa (pendentes): `lib/site.ts`
- Marca provisória: `app/globals.css` (tokens no topo)
- Rodar: `npm install && npm run dev`
- Prévia estática: `STATIC_EXPORT=1 npx next build` gera `out/`
- Deploy: Vercel (conta do Ramon). DNS só muda no lançamento.

Sem seção de Reformas (decisão do Ramon, 26/10/2026).
