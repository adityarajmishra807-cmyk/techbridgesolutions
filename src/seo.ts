// Route-specific SEO metadata shared by prerendering and client navigation.
export const SITE_URL = "https://techbridgesolutions.co.in";
export const SITE_NAME = "TechBridge Solutions";
export const SHARE_IMAGE = `${SITE_URL}/techbridge-share.jpg`;
export const LOGO_URL = `${SITE_URL}/favicon.svg`;
export interface RouteSeo { title: string; description: string; }
const SUFFIX = `| ${SITE_NAME}`;
export const ROUTE_SEO: Record<string, RouteSeo> = {
  "/": { title: "School Lab Equipment Supplier & Setup | TechBridge Solutions", description: "School laboratory equipment supplier and setup support for physics, chemistry, maths, biology, computer and composite labs. Based in Gorakhpur; serving schools across Uttar Pradesh, Bihar, Delhi and Uttarakhand." },
  "/labs/physics": { title: `Physics Lab Equipment for Schools ${SUFFIX}`, description: "Physics laboratory equipment and setup support for schools, including optics, mechanics, electrical measurement apparatus, demonstration equipment and storage for practical work." },
  "/labs/chemistry": { title: `Chemistry Lab Equipment & Setup for Schools ${SUFFIX}`, description: "Chemistry laboratory equipment and setup support for schools, including glassware, balances, heating apparatus, stands, reagent storage and safety essentials for practical work." },
  "/labs/maths": { title: `Maths Lab Equipment for Schools ${SUFFIX}`, description: "Mathematics laboratory equipment for schools, including geometry models, manipulatives, algebra kits, mensuration tools, trigonometry models and logic activities." },
  "/labs/biology": { title: `Biology Lab Equipment for Schools ${SUFFIX}`, description: "Biology laboratory equipment for schools, including microscopes, prepared slides, specimen jars, glassware, anatomical models, charts and safety essentials." },
  "/labs/computer": { title: `School Computer Lab Setup & Equipment ${SUFFIX}`, description: "School computer lab setup and equipment, including workstations, networking, LAN, UPS and power backup, peripherals, software and computer furniture." },
  "/labs/composite": { title: `Composite Science Lab Equipment & Setup ${SUFFIX}`, description: "Composite science laboratory equipment and setup for schools, combining physics, chemistry and biology apparatus, glassware, models, storage and safety essentials." },
  "/guides/school-laboratory-setup-checklist": { title: `School Laboratory Setup Checklist ${SUFFIX}`, description: "School laboratory setup checklist covering room planning, science lab equipment lists, physics, chemistry, biology, maths and computer labs, CBSE requirements, safety, BOQ and procurement." },
  "/guides/school-computer-lab-setup": { title: `School Computer Lab Setup ${SUFFIX}`, description: "School computer lab requirements and setup guide covering CBSE 2025 provisions, workstations, hardware specifications, LAN, UPS, furniture, software, cyber safety, BOQ and procurement." },
  "/guides/science-lab-equipment-planning": { title: `Science Lab Equipment Planning for Schools ${SUFFIX}`, description: "School science lab equipment list and planning guide for physics, chemistry, biology and composite labs, with CBSE SOP references, quantities, infrastructure, safety and BOQ guidance." },
};
export const ROUTES = Object.keys(ROUTE_SEO);
export const NOT_FOUND_SEO: RouteSeo = { title: `Page not found ${SUFFIX}`, description: "The page you requested could not be found." };
export const normalizePath = (pathname: string): string => { const path = pathname.split(/[?#]/)[0] || "/"; return path.length > 1 ? path.replace(/\/+$/, "") : "/"; };
export const isKnownRoute = (pathname: string): boolean => Object.prototype.hasOwnProperty.call(ROUTE_SEO, normalizePath(pathname));
export const canonicalFor = (pathname: string): string => { const path = normalizePath(pathname); return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`; };
export const getSeo = (pathname: string): RouteSeo & { noindex: boolean; canonical: string | null } => isKnownRoute(pathname) ? { ...ROUTE_SEO[normalizePath(pathname)], noindex: false, canonical: canonicalFor(pathname) } : { ...NOT_FOUND_SEO, noindex: true, canonical: null };
const escapeHtml = (value: string) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const jsonLd = (data: unknown) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
export const renderHeadTags = (pathname: string): string => {
  const seo = getSeo(pathname);
  const lines = [`<title>${escapeHtml(seo.title)}</title>`, `<meta name="description" content="${escapeHtml(seo.description)}" />`];
  if (seo.noindex) lines.push('<meta name="robots" content="noindex, follow" />');
  else if (seo.canonical) {
    lines.push(`<link rel="canonical" href="${seo.canonical}" />`, '<meta property="og:type" content="website" />', `<meta property="og:site_name" content="${SITE_NAME}" />`, '<meta property="og:locale" content="en_IN" />', `<meta property="og:url" content="${seo.canonical}" />`, `<meta property="og:title" content="${escapeHtml(seo.title)}" />`, `<meta property="og:description" content="${escapeHtml(seo.description)}" />`, `<meta property="og:image" content="${SHARE_IMAGE}" />`, '<meta name="twitter:card" content="summary_large_image" />', `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`, `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`, `<meta name="twitter:image" content="${SHARE_IMAGE}" />`);
    if (normalizePath(pathname) === "/") lines.push(jsonLd({ "@context": "https://schema.org", "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/`, logo: LOGO_URL, email: "techbridgesolutions2k25@gmail.com", telephone: "+918800883727" }), jsonLd({ "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: `${SITE_URL}/` }));
    if (normalizePath(pathname) === "/guides/school-laboratory-setup-checklist") lines.push(jsonLd({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "School Laboratory Setup Checklist: Plan Space, Equipment and Safety",
      description: "A practical school lab setup checklist covering room planning, subject-wise equipment, CBSE requirements, safety, procurement and commissioning.",
      image: SHARE_IMAGE,
      datePublished: "2026-11-15",
      dateModified: "2026-11-15",
      author: { "@type": "Organization", name: SITE_NAME },
      publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: LOGO_URL } },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/guides/school-laboratory-setup-checklist` }
    }));
    if (normalizePath(pathname) === "/guides/school-computer-lab-setup") lines.push(jsonLd({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "School Computer Lab Setup: Equipment, Layout and CBSE Requirements",
      description: "A practical guide to school computer lab setup covering CBSE digital infrastructure, workstations, hardware, networking, UPS, furniture, software, cyber safety and procurement.",
      image: SHARE_IMAGE,
      datePublished: "2026-11-15",
      dateModified: "2026-11-15",
      author: { "@type": "Organization", name: SITE_NAME },
      publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: LOGO_URL } },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/guides/school-computer-lab-setup` }
    }));
    if (normalizePath(pathname) === "/guides/science-lab-equipment-planning") lines.push(jsonLd({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Science Lab Equipment for Schools: Physics, Chemistry, Biology and Composite Labs",
      description: "A practical school science laboratory equipment planning guide covering Physics, Chemistry, Biology and Composite Science apparatus, quantities, infrastructure, safety and procurement.",
      image: SHARE_IMAGE,
      datePublished: "2026-11-15",
      dateModified: "2026-11-15",
      author: { "@type": "Organization", name: SITE_NAME },
      publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: LOGO_URL } },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/guides/science-lab-equipment-planning` }
    }));
  }
  return lines.map(line => `    ${line}`).join("\n");
}