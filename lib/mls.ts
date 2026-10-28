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

const SOURCES = [
  { mls: "miami" as const, token: process.env.BRIDGE_TOKEN_MIAMI, dataset: process.env.BRIDGE_DATASET_MIAMI },
  { mls: "stellar" as const, token: process.env.BRIDGE_TOKEN_STELLAR, dataset: process.env.BRIDGE_DATASET_STELLAR },
];

// Preço mínimo opcional (Vercel: MLS_MIN_PRICE). Sem valor, mostra todas as faixas.
const MIN_PRICE = Number(process.env.MLS_MIN_PRICE || 0);

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

export async function getListings(limit = 12): Promise<Listing[]> {
  const out: Listing[] = [];
  for (const s of SOURCES) {
    if (!s.token || !s.dataset) continue;
    const q = new URLSearchParams({
      access_token: s.token,
      $top: String(limit),
      $orderby: "ModificationTimestamp desc",
      $filter: `StandardStatus eq 'Active' and ListPrice ge ${MIN_PRICE}`,
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
