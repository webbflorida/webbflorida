import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./site";

export async function getLang(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}
