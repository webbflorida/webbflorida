import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { SITE, waLink } from "@/lib/site";
import { UI } from "@/lib/ui";
import { CONTACT } from "@/lib/content";
import ContactForm from "@/components/ContactForm";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/contact/", `${CONTACT.title[lang]} | Webb Florida Realty`, CONTACT.lead[lang]);
}

export default async function Contact({ params }: P) {
  const lang = await getLang(params);
  const f = CONTACT.fields;
  return (
    <Shell lang={lang} path="/contact/">
      <PageHero lang={lang} title={CONTACT.title[lang]} lead={CONTACT.lead[lang]} />
      <section className="sec">
        <div className="wrap grid g2">
          <ContactForm
            lang={lang}
            goals={f.goals[lang]}
            note={CONTACT.formNote[lang]}
            t={{
              name: f.name[lang], email: f.email[lang], phone: f.phone[lang], goal: f.goal[lang], message: f.message[lang], send: f.send[lang],
              thanks: { en: "Thank you. We received your message and will get back to you shortly.", pt: "Obrigado. Recebemos a sua mensagem e retornaremos em breve.", es: "Gracias. Recibimos su mensaje y le responderemos en breve." }[lang],
              error: { en: "It was not possible to send. Please write to info@webbflorida.com.", pt: "Não foi possível enviar. Escreva para info@webbflorida.com.", es: "No fue posible enviar. Escriba a info@webbflorida.com." }[lang],
            }}
          />
          <div>
            <p><strong>Webb Florida Realty</strong><br />{!SITE.address.includes("[") && <>{SITE.address}<br /></>}<a href={`tel:${SITE.phoneE164}`}>{SITE.phone}</a><br /><a href={waLink(UI[lang].cta.waMsg)} target="_blank" rel="noopener">WhatsApp</a><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            <p className="muted">English · Português · Español</p>
          </div>
        </div>
      </section>
    </Shell>
  );
}
