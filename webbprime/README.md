# Site Webb Prime Real Estate (Dubai)

Mesmo código-base do site Webb Florida (pasta raiz deste repositório), adaptado para Dubai.
Next.js 15, 3 idiomas (/en, /pt, /es).

- Textos: `lib/content.ts` (home, investir, golden visa, história, contato), `lib/projects.ts` (projetos), `lib/legal.ts`
- Dados da empresa (ORN, BRN, endereço pendentes): `lib/site.ts`
- Fotos: `lib/media.ts`
- Prévia estática: `STATIC_EXPORT=1 npx next build` gera `out/`
- Vercel: novo projeto importando este mesmo repositório, com **Root Directory = `webbprime`**. Domínio: webbprimerealestate.com.
- Robots bloqueia buscadores até `SITE_LIVE=1`.
