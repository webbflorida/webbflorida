// Imóveis do MLS via Bridge API (RESO Web API).
// As chaves ficam só na Vercel (Settings → Environment Variables), nunca no código:
//   BRIDGE_TOKEN_MIAMI   + BRIDGE_DATASET_MIAMI   (dataset informado pela Bridge)
//   BRIDGE_TOKEN_STELLAR + BRIDGE_DATASET_STELLAR
// Sem chave, a lista volta vazia e a página mostra o aviso "em breve".

export type Listing = {
  id: string;
  mls: "miami" | "stellar";
  price: number;
  beds?: number;
  baths?: number;
  sqft?: number;
  street?: string;
  city?: string;
  photo?: string;
  officeName?: string; // imobiliária responsável (exigência do IDX)
};

// Preço mínimo por MLS (decisão do Ramon, 04/11/2026): Miami US$ 550 mil, Orlando US$ 350 mil.
// Para mudar sem mexer no código: Vercel → MLS_MIN_PRICE_MIAMI / MLS_MIN_PRICE_STELLAR.
const SOURCES = [
  { mls: "miami" as const, token: process.env.BRIDGE_TOKEN_MIAMI, dataset: process.env.BRIDGE_DATASET_MIAMI, min: Number(process.env.MLS_MIN_PRICE_MIAMI || 550000) },
  { mls: "stellar" as const, token: process.env.BRIDGE_TOKEN_STELLAR, dataset: process.env.BRIDGE_DATASET_STELLAR, min: Number(process.env.MLS_MIN_PRICE_STELLAR || 350000) },
];

export const MLS_READY = SOURCES.some((s) => s.token && s.dataset);

export type Search = { mls?: Listing["mls"]; minPrice?: number; maxPrice?: number; beds?: number };

type Raw = Record<string, any>;

function toListing(mls: Listing["mls"], r: Raw): Listing {
  return {
    id: String(r.ListingKey ?? r.ListingId),
    mls,
    price: Number(r.ListPrice) || 0,
    beds: r.BedroomsTotal ?? undefined,
    baths: r.BathroomsTotalInteger ?? undefined,
    sqft: r.LivingArea ?? undefined,
    street: r.UnparsedAddress ?? undefined,
    city: r.City ?? undefined,
    photo: r.Media?.[0]?.MediaURL ?? undefined,
    officeName: r.ListOfficeName ?? undefined,
  };
}

export async function getListings(search: Search = {}, limit = 24): Promise<Listing[]> {
  const out: Listing[] = [];
  for (const s of SOURCES) {
    if (!s.token || !s.dataset) continue;
    if (search.mls && search.mls !== s.mls) continue;
    const f = [
      "StandardStatus eq 'Active'",
      "PropertyType eq 'Residential'",
      // Só imóveis: fora vaga de barco, terreno e similares (não têm quarto).
      "BedroomsTotal ge 1",
      `ListPrice ge ${Math.max(s.min, search.minPrice || 0)}`,
    ];
    if (search.maxPrice) f.push(`ListPrice le ${search.maxPrice}`);
    if (search.beds) f.push(`BedroomsTotal ge ${search.beds}`);
    const q = new URLSearchParams({
      access_token: s.token,
      $top: String(limit),
      $orderby: "ModificationTimestamp desc",
      $filter: f.join(" and "),
    });
    try {
      const res = await fetch(`https://api.bridgedataoutput.com/api/v2/OData/${s.dataset}/Property?${q}`, {
        next: { revalidate: 3600 },
      });
      if (!res.ok) continue;
      const json = await res.json();
      for (const r of json.value ?? []) out.push(toListing(s.mls, r));
    } catch {
      // Falha no MLS não derruba a página.
    }
  }
  return out.sort((a, b) => b.price - a.price);
}
