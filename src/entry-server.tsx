/* eslint-disable react-refresh/only-export-components -- server-only build entry */
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppProviders, AppRoutes } from "./App";

export { ROUTES, SITE_URL, renderHeadTags } from "./seo";

/** Renders a route to HTML for build-time prerendering. */
export function render(url: string): string {
  return renderToString(
    <AppProviders>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>,
  );
}