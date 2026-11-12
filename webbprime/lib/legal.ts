import { SITE } from "./site";

// Textos legais em inglês (versão oficial). Rascunho: revisar com o Ramon antes de publicar.
const co = SITE.legalName;

export type Block = { h?: string; p?: string; list?: string[] };

export const PRIVACY: Block[] = [
  { p: `${co} ("Webb Prime," "we," "us") operates webbprimerealestate.com. This policy explains what information we collect, how we use it, and the choices you have.` },
  { h: "Information we collect", list: [
    "Information you give us: name, email, phone number, country, property preferences, and messages you send through our forms, WhatsApp, or email.",
    "Information collected automatically: IP address, browser and device type, pages visited, and referring website, through cookies and analytics tools such as Google Analytics.",
  ] },
  { h: "How we use it", list: [
    "To answer your questions and provide the real estate services you request.",
    "To send project updates you sign up for. You can unsubscribe at any time.",
    "To improve our website and measure our marketing.",
    "To meet legal and regulatory obligations in the United Arab Emirates.",
  ] },
  { h: "How we share it", p: "We do not sell your personal information. We share it only with service providers that help us run the website and our business (hosting, email, CRM, analytics), with developers and professionals involved in your purchase when you ask us to, and when the law requires it." },
  { h: "Your choices", p: `You can ask us to access, correct, or delete your information by writing to ${SITE.email}.` },
  { h: "Contact", p: `${co}, Dubai, United Arab Emirates. ${SITE.email}.` },
];

export const TERMS: Block[] = [
  { p: `These terms govern the use of webbprimerealestate.com, operated by ${co}. By using the website you agree to them.` },
  { h: "Information on this website", p: "Project information, prices, payment plans, and delivery dates are provided by developers and may change without notice. They do not constitute an offer. Availability must be confirmed with us before any decision." },
  { h: "No legal or tax advice", p: "Content on this website is general information. It is not legal, tax, immigration, or financial advice. Visa rules are set by the UAE government and may change." },
  { h: "Regulation", p: `${co} is a real estate brokerage in Dubai, registered with the Real Estate Regulatory Agency (RERA), ORN ${SITE.orn}. Property advertisements carry the corresponding RERA permit number.` },
  { h: "Intellectual property", p: "Texts, logos, and design on this website belong to the Webb Group. Project images belong to their respective developers." },
  { h: "Contact", p: SITE.email },
];
