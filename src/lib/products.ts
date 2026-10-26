export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  highlights: string[];
  idealFor: string[];
  usageSteps: string[];
  packaging: string[];
  specs: ProductSpec[];
  documents: string[];
  note: string;
}

export const products: Product[] = [
  {
    slug: 'natural-beldi-soap',
    title: 'Natural Beldi Soap',
    summary: 'Pure olive formula, preferred by hammams and formulators.',
    image: '/image/product-natural-beldi.webp',
    imageAlt: 'Natural Beldi Soap 250 g jar with olives — Moroccan Organica',
    paragraphs: [
      'Natural Beldi soap is the reference grade of Moroccan black soap: a soft olive paste made from olive oil and macerated black olives, saponified with a natural alkali. There is no added fragrance — only the mild olive scent from the traditional cook.',
      'Hammams, spas and cosmetic formulators choose this grade when they need predictable texture, low foam and the authentic hammam ritual. The paste spreads easily on warm, damp skin and rinses clean without the squeaky feel of syndet bars.',
      'We source Natural Beldi from partner cooperatives in Morocco and check every batch in our Marrakesh warehouse before packing. Texture, colour and moisture are compared to our reference standard; if a lot does not match, it is not shipped.',
      'Whether you buy 5 kg for a single hammam or a full pallet for export, you receive the same documentation: batch number, Certificate of Analysis (COA), Safety Data Sheet (SDS) and product specification with INCI list.',
    ],
    highlights: [
      '100% traditional olive Beldi paste — no synthetic surfactants',
      'Low foam; soft gel texture suited to hammam and spa protocols',
      'Stable batch-to-batch performance for formulators and refill tubs',
      'COA, SDS and export paperwork prepared in Marrakesh before shipping',
    ],
    idealFor: [
      'Public hammams and hotel spas running daily Beldi treatments',
      'Formulators building body washes, scrubs or hammam kits',
      'Retailers offering an authentic “original” black soap SKU',
      'Distributors who need one clear flagship grade for the range',
    ],
    usageSteps: [
      'Apply a thin layer to warm, damp skin in the steam room or shower.',
      'Leave on for 5–10 minutes so the paste softens the outer layer of skin.',
      'Rinse with warm water, then exfoliate with a kessa glove using firm strokes.',
      'Finish with argan oil or your spa body lotion if desired.',
    ],
    packaging: [
      'Bulk food-grade tubs from 5 kg to 25 kg for professional use',
      'Retail jars from 200 g to 1 kg with your label on private label orders',
      'Sample pots (typically 250–500 g) for texture and scent approval',
      'Palletised export cartons with batch labels and packing lists',
    ],
    specs: [
      { label: 'Base', value: 'Olive oil and olive paste (Beldi)' },
      { label: 'Fragrance', value: 'None added — natural olive note' },
      { label: 'Texture', value: 'Soft paste / gel, not a hard bar' },
      { label: 'Typical pH', value: 'Reported on COA per batch' },
      { label: 'Minimum order', value: 'From 5 kg bulk; samples on request' },
    ],
    documents: [
      'Certificate of Analysis (COA) per batch',
      'Safety Data Sheet (SDS)',
      'Product specification sheet with INCI',
      'Certificate of Origin (export orders)',
    ],
    note: 'Natural Beldi is our most requested grade for hammams. Tell us your monthly volume and tub size and we will quote FOB Marrakesh or delivered terms.',
  },
  {
    slug: 'eucalyptus-black-soap',
    title: 'Eucalyptus Black Soap',
    summary: 'Fresh scent, very popular for steam rooms and spas.',
    image: '/image/product-eucalyptus.webp',
    imageAlt: 'Eucalyptus Black Soap 250 g jar with fresh eucalyptus — Moroccan Organica',
    paragraphs: [
      'Eucalyptus black soap starts from the same traditional Beldi olive paste, finished with eucalyptus for a clean, invigorating scent in steam rooms and spa cabins.',
      'The eucalyptus note helps guests associate the treatment with freshness and deep breathing — which is why many wellness centres list this variant beside the natural grade on treatment menus.',
      'Despite the added scent, the product remains a soft Beldi paste, not a milled bar. It behaves like natural black soap in application: spread on warm skin, dwell time, rinse, then kessa exfoliation.',
      'Every lot is sampled in Marrakesh for texture and scent intensity before packing. We can adjust fragrance level slightly on private label runs when you provide a target profile.',
    ],
    highlights: [
      'Traditional Beldi base with eucalyptus — popular in steam protocols',
      'Fresh scent that reads clearly in humid hammam environments',
      'Same gel texture and low foam as natural black soap',
      'Bulk tubs and retail jars; private label with your artwork',
    ],
    idealFor: [
      'Spas and hammams that want a scented “signature” Beldi treatment',
      'Hotels with steam rooms and wellness menus',
      'Retail ranges pairing eucalyptus with kessa gloves and argan oil',
      'Private label brands targeting sports recovery or “detox” positioning',
    ],
    usageSteps: [
      'Use in warm, humid conditions so the eucalyptus note opens with the steam.',
      'Apply evenly to body; avoid eye area.',
      'Leave 5–10 minutes, rinse, then exfoliate with a kessa glove.',
      'Pair with cold rinse or mint towel for a spa finish.',
    ],
    packaging: [
      '5–25 kg professional tubs for treatment rooms',
      '200 g–1 kg retail jars',
      'Sample sizes for scent approval before bulk',
      'Export cartons with batch coding and SDS/COA inside the dossier',
    ],
    specs: [
      { label: 'Base', value: 'Beldi olive paste' },
      { label: 'Character', value: 'Eucalyptus-finished' },
      { label: 'Texture', value: 'Soft paste, low foam' },
      { label: 'Scent level', value: 'Balanced for hammam use; custom on PL' },
      { label: 'Minimum order', value: 'From 5 kg bulk; PL from 50–100 units' },
    ],
    documents: [
      'COA including pH and moisture',
      'SDS for transport and retail compliance',
      'INCI specification sheet',
      'Origin and packing list for export',
    ],
    note: 'If you run both natural and eucalyptus treatments, we can ship mixed pallets with separate batch paperwork for each SKU.',
  },
  {
    slug: 'argan-oil-black-soap',
    title: 'Argan Oil Black Soap',
    summary: 'Enriched with Moroccan argan oil for premium skincare lines.',
    image: '/image/product-argan-oil.webp',
    imageAlt: 'Argan Oil Black Soap 250 g jar with argan nuts — Moroccan Organica',
    paragraphs: [
      'Argan oil black soap combines authentic Beldi olive paste with Moroccan argan oil — the pairing most international buyers expect when they launch a “luxury hammam” or argan skincare line.',
      'Argan adds a familiar premium story for retail shelves: traditional soap, well-known Moroccan oil, and the hammam ritual in one jar. The paste stays spreadable and rinses like standard Beldi soap.',
      'We use food-grade argan suited to cosmetic use and keep enrichment levels consistent batch to batch so your label claims and INCI list stay stable.',
      'This SKU is one of our strongest private label requests: jar sizes from 200 g to 500 g, bilingual labels, and full export dossiers for EU, UK, Gulf and North American buyers.',
    ],
    highlights: [
      'Beldi base enriched with Moroccan argan oil',
      'Premium positioning for retail and gift sets',
      'Consistent enrichment for repeatable INCI and label copy',
      'Retail-ready jars and bulk for refill stations',
    ],
    idealFor: [
      'Skincare brands with an argan or “Moroccan beauty” story',
      'Spa retail counters upselling post-treatment',
      'E-commerce hammam kits (soap + glove + argan oil)',
      'Duty-free and hotel amenity programmes',
    ],
    usageSteps: [
      'Apply to damp skin; argan note is most noticeable on warm skin.',
      'Leave 5–10 minutes before rinsing.',
      'Exfoliate with a kessa glove, then apply pure argan oil if upselling.',
      'Suitable for body; patch-test on sensitive facial skin if marketed for face.',
    ],
    packaging: [
      '200 g, 300 g and 500 g jars (common retail sizes)',
      'Bulk 5–25 kg for spa back-bar refill',
      'Private label: your jar, cap and label design',
      'Gift boxes and inner trays on request for PL runs',
    ],
    specs: [
      { label: 'Base', value: 'Beldi olive paste + argan oil' },
      { label: 'Positioning', value: 'Premium / argan-enriched' },
      { label: 'Texture', value: 'Soft paste' },
      { label: 'INCI', value: 'Provided on specification sheet' },
      { label: 'Minimum order', value: 'Bulk from 5 kg; PL from 50–100 units' },
    ],
    documents: [
      'COA per batch',
      'SDS',
      'INCI and product spec',
      'Organic or argan source statements when applicable',
    ],
    note: 'Send us your target jar and label language — we will confirm fill weight, shelf-life guidance and compliance text for your market.',
  },
  {
    slug: 'rose-orange-blossom-black-soap',
    title: 'Rose and Orange Blossom Black Soap',
    summary: 'Floral notes for retail and gift ranges.',
    image: '/image/product-rose-orange.webp',
    imageAlt: 'Rose and Orange Blossom Black Soap 250 g jar — Moroccan Organica',
    paragraphs: [
      'Rose and orange blossom black soap keeps the traditional olive Beldi base and adds floral notes suited to retail shelves, boutique gift sets and seasonal promotions.',
      'Floral Beldi variants help brands differentiate from the “plain” black soap jar while staying inside the authentic hammam category — important for storytelling and photography.',
      'Scent is balanced so the product still reads as black soap in use, not as a perfumed shower gel. Texture and ritual remain the same: dwell time, rinse, kessa.',
      'We pack for wholesale distributors and for private label clients who need rose or orange blossom as hero notes on the front label.',
    ],
    highlights: [
      'Floral finish on authentic Beldi paste',
      'Strong gift and retail appeal',
      'Photogenic jars for e-commerce and boutique display',
      'Private label artwork and bilingual labels supported',
    ],
    idealFor: [
      'Gift shops and department store beauty halls',
      'Brands launching a “Moroccan ritual” collection',
      'Wedding favour and hamper suppliers',
      'Retailers who already sell rose or orange blossom lines',
    ],
    usageSteps: [
      'Apply to warm, damp skin; floral note develops with heat and humidity.',
      'Leave 5–10 minutes, rinse thoroughly.',
      'Follow with kessa exfoliation.',
      'Recommend storing jar away from direct sun to preserve scent.',
    ],
    packaging: [
      '200 g–1 kg retail jars',
      'Bulk tubs for spa back-bar',
      'Gift cartons and ribbon packs on PL projects',
      'Mixed-SKU export pallets with per-batch COA',
    ],
    specs: [
      { label: 'Base', value: 'Beldi olive paste' },
      { label: 'Character', value: 'Rose and orange blossom notes' },
      { label: 'Texture', value: 'Soft paste' },
      { label: 'Retail focus', value: 'Gift and boutique channels' },
      { label: 'Minimum order', value: 'Bulk from 5 kg; PL from 50–100 units' },
    ],
    documents: [
      'COA',
      'SDS',
      'INCI specification',
      'Export origin and packing list',
    ],
    note: 'Prefer rose only or orange blossom only for a PL run? We can quote a single-note variant on the same Beldi base.',
  },
  {
    slug: 'rhassoul-black-soap',
    title: 'Black Soap with Rhassoul Clay',
    summary: 'For purifying and detox treatments.',
    image: '/image/product-rhassoul.webp',
    imageAlt: 'Black Soap with Rhassoul Clay 250 g jar — Moroccan Organica',
    paragraphs: [
      'Black soap with rhassoul clay blends traditional Beldi olive paste with Moroccan rhassoul — the clay hammams use for purifying body masks and detox-style treatments.',
      'Spas market this variant for “deep cleanse” or “detox” menus while staying rooted in Moroccan tradition. The clay adds body to the paste and a familiar earthy note in the steam room.',
      'Application follows standard Beldi steps; some therapists apply a thin rhassoul mask after exfoliation — we can recommend pairing products on request.',
      'As with all grades, batches are checked in Marrakesh and ship with COA, SDS and batch traceability back to the cooperative.',
    ],
    highlights: [
      'Beldi paste with Moroccan rhassoul clay',
      'Suited to purifying and detox treatment menus',
      'Authentic pairing for hammam purify rituals',
      'Bulk and retail formats with full export docs',
    ],
    idealFor: [
      'Hammams promoting clay + soap combination rituals',
      'Wellness brands with “detox” or “mineral” positioning',
      'Spa protocols that alternate soap dwell and clay mask',
      'Retailers educating customers on traditional Moroccan clay care',
    ],
    usageSteps: [
      'Apply black soap-rhassoul paste to warm, damp skin.',
      'Leave 5–10 minutes; clay component helps grip on skin.',
      'Rinse, exfoliate with kessa, then optional rhassoul mask if offered.',
      'Hydrate with argan oil or light body milk after treatment.',
    ],
    packaging: [
      'Professional 5–25 kg tubs',
      'Retail jars 200 g–1 kg',
      'Samples for spa menu trials',
      'Export packaging with moisture-safe seals',
    ],
    specs: [
      { label: 'Base', value: 'Beldi olive paste + rhassoul clay' },
      { label: 'Character', value: 'Purifying / clay-enriched' },
      { label: 'Texture', value: 'Soft paste with clay body' },
      { label: 'Use', value: 'Hammam detox and purify menus' },
      { label: 'Minimum order', value: 'From 5 kg bulk' },
    ],
    documents: [
      'COA per batch',
      'SDS',
      'INCI and spec sheet',
      'Certificate of Origin for export',
    ],
    note: 'Ask for our rhassoul clay as a separate SKU if you run two-step purify treatments with standalone clay masks.',
  },
  {
    slug: 'custom-formulations',
    title: 'Custom Formulations',
    summary: 'Your own blend of oils, extracts or fragrance for private label.',
    image: '/image/product-custom-formulations.webp',
    imageAlt: 'Custom formulation black soap jars for private label — Moroccan Organica',
    paragraphs: [
      'Custom formulations let you launch Moroccan black soap under your brand without building a factory. We start from authentic Beldi paste and adjust enrichment — argan, essential oils, herbal extracts or fragrance — within the limits of stable, exportable recipes.',
      'You provide logo, label text and jar preference; we fill, seal, label and prepare the export dossier. Minimum runs are typically 50–100 units depending on jar size and print method.',
      'Our Marrakesh team handles sample rounds first: you approve texture, scent and label mock-ups before production. Large reorders repeat the approved formula with new batch COAs.',
      'Custom work is ideal when you already sell kessa gloves, argan oil or hammam kits and need a soap SKU that matches your brand colours and compliance market.',
    ],
    highlights: [
      'Your brand on authentic Beldi soap',
      'Flexible enrichments: argan, eucalyptus, floral, herbal',
      'Label and jar options with export paperwork included',
      'Sample approval before production runs',
    ],
    idealFor: [
      'Startups launching a first hammam or natural skincare line',
      'Salons and spas branding back-bar and retail',
      'Existing cosmetics brands adding a Moroccan hero product',
      'Amazon, Shopify and boutique retailers needing own-label jars',
    ],
    usageSteps: [
      'Send brief: market, jar size, scent profile and label languages.',
      'We ship lab samples (usually 250–500 g) for approval.',
      'Confirm artwork, INCI and compliance text for your country.',
      'Production, QC, packing and export documentation before dispatch.',
    ],
    packaging: [
      'Jar sizes from 200 g to 1 kg (plastic or glass options quoted)',
      'Custom labels — matte, gloss or foil on approved runs',
      'Secondary cartons and inserts for gift positioning',
      'Bulk Beldi + separate branding line for high-volume spas',
    ],
    specs: [
      { label: 'Base', value: 'Authentic Beldi olive paste' },
      { label: 'Customization', value: 'Oils, extracts, fragrance levels' },
      { label: 'MOQ', value: 'Typically 50–100 units (jar dependent)' },
      { label: 'Lead time', value: 'Quoted after sample approval' },
      { label: 'Documents', value: 'COA, SDS, spec, origin per batch' },
    ],
    documents: [
      'COA for production batch',
      'SDS',
      'INCI list aligned to your label',
      'Certificate of Origin and packing list for export',
    ],
    note: 'Share your target retail price band and we will suggest jar size, fill weight and formula tier that fits your margin.',
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
