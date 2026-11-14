// Route-specific SEO metadata shared by prerendering and client navigation.
export const SITE_URL = "https://techbridgesolutions.co.in";
export const SITE_NAME = "TechBridge Solutions";
export const SHARE_IMAGE = `${SITE_URL}/techbridge-share.jpg`;
export const LOGO_URL = `${SITE_URL}/favicon.svg`;
export interface RouteSeo { title: string; description: string; }
const SUFFIX = `| ${SITE_NAME}`;
export const ROUTE_SEO: Record<string, RouteSeo> = {
  "/": { title: "School Laboratory Setup | TechBridge Solutions", description: "School laboratory setup and equipment solutions for physics, chemistry, biology, maths and computer labs. Explore TechBridge school infrastructure." },
  "/labs/physics": { title: `Physics Lab Setup for Schools ${SUFFIX}`, description: "Physics laboratory setup for schools with optical benches, meters, electrical equipment, demonstration tables and storage. Explore TechBridge solutions." },
  "/labs/chemistry": { title: `Chemistry Lab Setup for Schools ${SUFFIX}`, description: "Chemistry laboratory setup for schools with glassware, reagent storage, fume hoods and safety equipment. Explore TechBridge solutions." },
  "/labs/maths": { title: `Maths Lab Setup for Schools ${SUFFIX}`, description: "Mathematics laboratory setup for schools with 3D models, geometry kits, algebra tools and teaching aids. Explore TechBridge solutions." },
  "/labs/biology": { title: `Biology Lab Setup for Schools ${SUFFIX}`, description: "Biology laboratory setup for schools with microscopes, specimen jars, dissection kits and anatomical models. Explore TechBridge solutions." },
  "/labs/computer": { title: `Computer Lab Setup for Schools ${SUFFIX}`, description: "Computer laboratory setup for schools with networking, UPS systems, ergonomic furniture and licensed software. Explore TechBridge solutions." },
  "/labs/composite": { title: `Composite Science Lab Setup for Schools ${SUFFIX}`, description: "Integrated science laboratory solutions for school learning across physics, chemistry and biology. Explore TechBridge composite lab infrastructure." },
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
  }
  return lines.map(line => `    ${line}`).join("\n");
}