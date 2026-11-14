// Build-time prerender: writes route-specific HTML, a real 404 page and sitemap.xml.
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const { render, ROUTES, SITE_URL, renderHeadTags } = await import(
  pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href,
);
const template = await fs.readFile(path.join(dist, "index.html"), "utf8");
const base = template
  .replace(/\s*<title>[\s\S]*?<\/title>/g, "")
  .replace(/\s*<meta name="description"[^>]*>/g, "")
  .replace(/\s*<link rel="canonical"[^>]*>/g, "")
  .replace(/\s*<meta property="og:[^>]*>/g, "")
  .replace(/\s*<meta name="twitter:[^>]*>/g, "");

const build = (route, metadataRoute = route) => {
  const body = render(route);
  if (!body || body.length < 500) throw new Error(`Prerender of ${route} produced suspiciously little HTML`);
  return base.replace("</head>", `${renderHeadTags(metadataRoute)}\n  </head>`).replace('<div id="root"></div>', `<div id="root">${body}</div>`);
};

for (const route of ROUTES) {
  const output = route === "/" ? path.join(dist, "index.html") : path.join(dist, route, "index.html");
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, build(route));
  console.log(`prerendered ${route} -> ${path.relative(root, output)}`);
}

await fs.writeFile(path.join(dist, "404.html"), build("/__not-found__"));
console.log("prerendered 404.html");

const urls = ROUTES.map(route => route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(url => `  <url><loc>${url}</loc></url>`).join("\n") + "\n</urlset>\n";
await fs.writeFile(path.join(dist, "sitemap.xml"), sitemap);
console.log(`wrote sitemap.xml (${urls.length} URLs)`);