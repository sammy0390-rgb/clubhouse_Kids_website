import { readFile } from "node:fs/promises";
import path from "node:path";

// Netlify serves the same page for 404s, so we match that behavior
export default async function NotFound() {
  const htmlPath = path.join(process.cwd(), "app", "clubhousekidsri", "body.html");
  const html = await readFile(htmlPath, "utf8");

  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}

