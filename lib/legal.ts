import { SITE } from "./site";

// Textos legais em inglês (versão oficial). Rascunho aprovado pelo Ramon antes de publicar.
const co = SITE.legalName, addr = SITE.address;

export const PRIVACY: { h?: string; p?: string; list?: string[] }[] = [
  { p: `${co} ("Webb Florida Realty," "we," "us") operates webbflorida.com. This policy explains what information we collect, how we use it, and the choices you have.` },
  { h: "Information we collect", list: [
    "Information you give us: name, email, phone number, country, property preferences, and messages you send through our forms, WhatsApp, or email.",
    "Information collected automatically: IP address, browser and device type, pages visited, and referring website, through cookies and analytics tools such as Google Analytics.",
    "Saved searches and favorite properties, if you create an account.",
  ] },
  { h: "How we use it", list: [
    "To answer your questions and provide real estate services you request.",
    "To send property alerts and market updates you sign up for. You can unsubscribe at any time.",
    "To improve our website and measure our marketing.",
    "To meet legal, licensing, and recordkeeping obligations.",
  ] },
  { h: "How we share it", p: "We do not sell your personal information. We share it only with service providers that help us run the website and our business (hosting, email, CRM, analytics), with professionals involved in your transaction when you ask us to (lenders, title companies, attorneys, inspectors), and when the law requires it." },
  { h: "Property listings", p: "Listing information comes from the multiple listing service (MLS) and is deemed reliable but not guaranteed. Our use of that data follows MLS rules." },
  { h: "Cookies", p: "You can block or delete cookies in your browser settings. Some site features may not work without them." },
  { h: "Your choices", p: "You can ask us to access, correct, or delete your personal information, or to stop sending you marketing messages, by contacting us below." },
  { h: "Children", p: "Our website is not directed to children under 13, and we do not knowingly collect their information." },
  { h: "Security", p: "We use reasonable safeguards to protect your information, but no website is completely secure." },
  { h: "Changes", p: "We may update this policy. The date at the top shows the latest version." },
  { h: "Contact", p: `${co}, ${addr}, ${SITE.email}, ${SITE.phone}.` },
];

export const TERMS: { h?: string; p?: string }[] = [
  { p: "By using webbflorida.com you agree to these terms. If you do not agree, please do not use the website." },
  { h: "Who we are", p: `Webb Florida Realty is a real estate brokerage licensed in the State of Florida, license ${SITE.license}, located at ${addr}. ${co} owns and operates this website.` },
  { h: "Information on this website", p: "Property information, prices, photos, and availability come from the MLS and other sources believed to be reliable but are not guaranteed and may change without notice. Buyers should verify all information, including square footage, school zones, taxes, and HOA fees, before making a decision. Nothing on this website is legal, tax, or financial advice." },
  { h: "No agency relationship", p: "Using this website or contacting us does not by itself create a brokerage relationship. Any representation will be agreed in writing." },
  { h: "Equal housing opportunity", p: "We are committed to the Fair Housing Act and do not discriminate on the basis of race, color, religion, sex, disability, familial status, national origin, or any other protected class." },
  { h: "Acceptable use", p: "You agree not to copy, scrape, or redistribute listing data, interfere with the website, or use it for any unlawful purpose. MLS data is provided for consumers' personal, non-commercial use only." },
  { h: "Intellectual property", p: "Text, logos, photos, and design on this website belong to Webb Florida Realty or its licensors and may not be used without permission." },
  { h: "Third-party links", p: "We are not responsible for the content or practices of websites we link to." },
  { h: "Limitation of liability", p: "The website is provided \"as is.\" To the extent allowed by law, Webb Florida Realty is not liable for losses arising from the use of this website or reliance on its content." },
  { h: "Governing law", p: "These terms are governed by the laws of the State of Florida." },
  { h: "Contact", p: `${co}, ${addr}, ${SITE.email}, ${SITE.phone}.` },
];
