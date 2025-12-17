import { readFile } from "node:fs/promises";
import path from "node:path";

// Netlify serves this site as a single-page app and returns the same HTML for many routes
// (e.g. /blog-home, /blog-post, /elements, etc.). This catch-all route mirrors that behavior.
export default async function CatchAllPage() {
  const htmlPath = path.join(process.cwd(), "app", "clubhousekidsri", "body.html");
  const html = await readFile(htmlPath, "utf8");

  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}


