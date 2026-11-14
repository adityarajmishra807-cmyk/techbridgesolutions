import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SHARE_IMAGE, getSeo } from "@/seo";

const setMeta = (attribute: "name" | "property", key: string, content: string | null) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (content === null) { element?.remove(); return; }
  if (!element) { element = document.createElement("meta"); element.setAttribute(attribute, key); document.head.appendChild(element); }
  element.setAttribute("content", content);
};

const setCanonical = (href: string | null) => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (href === null) { element?.remove(); return; }
  if (!element) { element = document.createElement("link"); element.setAttribute("rel", "canonical"); document.head.appendChild(element); }
  element.setAttribute("href", href);
};

/** Keeps document metadata in sync after client-side route changes. */
const RouteMeta = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const seo = getSeo(pathname);
    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setMeta("name", "robots", seo.noindex ? "noindex, follow" : null);
    setCanonical(seo.canonical);
    const visible = !seo.noindex;
    setMeta("property", "og:type", visible ? "website" : null);
    setMeta("property", "og:site_name", visible ? "TechBridge Solutions" : null);
    setMeta("property", "og:locale", visible ? "en_IN" : null);
    setMeta("property", "og:url", visible ? seo.canonical : null);
    setMeta("property", "og:title", visible ? seo.title : null);
    setMeta("property", "og:description", visible ? seo.description : null);
    setMeta("property", "og:image", visible ? SHARE_IMAGE : null);
    setMeta("name", "twitter:card", visible ? "summary_large_image" : null);
    setMeta("name", "twitter:title", visible ? seo.title : null);
    setMeta("name", "twitter:description", visible ? seo.description : null);
    setMeta("name", "twitter:image", visible ? SHARE_IMAGE : null);
  }, [pathname]);
  return null;
};

export default RouteMeta;