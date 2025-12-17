import { readFile } from "node:fs/promises";
import path from "node:path";

export default async function HomePage() {
  const htmlPath = path.join(process.cwd(), "app", "clubhousekidsri", "body.html");
  const html = await readFile(htmlPath, "utf8");

  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}


