import fs from "node:fs/promises";
import path from "node:path";

const ORIGIN = "https://loquacious-quokka-163a2a.netlify.app";
const START_URL = `${ORIGIN}/`;
const OUT_DIR = path.resolve(process.cwd(), "public");

function normalizeUrl(raw) {
  if (!raw) return null;
  const trimmed = raw.trim().replace(/^['"]|['"]$/g, "");
  if (!trimmed || trimmed === "#" || trimmed.startsWith("javascript:") || trimmed.startsWith("mailto:")) return null;
  return trimmed;
}

function shouldMirror(u) {
  return u.origin === ORIGIN && u.pathname.startsWith("/clubhousekidsri/");
}

function findAttrUrls(html) {
  const urls = [];
  const re = /\b(?:src|href)=["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html))) {
    const v = normalizeUrl(m[1]);
    if (v) urls.push(v);
  }
  return urls;
}

function findCssUrls(cssText) {
  const urls = [];
  const re = /url\(([^)]+)\)/gi;
  let m;
  while ((m = re.exec(cssText))) {
    const v = normalizeUrl(m[1]);
    if (v) urls.push(v);
  }
  return urls;
}

async function ensureDirForFile(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function downloadTo(u) {
  const outPath = path.join(OUT_DIR, u.pathname.replace(/^\//, ""));
  await ensureDirForFile(outPath);

  const res = await fetch(u.href);
  if (!res.ok) throw new Error(`Failed ${res.status} ${u.href}`);

  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(outPath, buf);

  const contentType = res.headers.get("content-type") ?? "";
  return { outPath, contentType, buf };
}

async function main() {
  console.log(`Fetching HTML: ${START_URL}`);
  const htmlRes = await fetch(START_URL);
  if (!htmlRes.ok) throw new Error(`Failed ${htmlRes.status} ${START_URL}`);
  const html = await htmlRes.text();

  const baseHrefMatch = html.match(/<base[^>]+href=["']([^"']+)["']/i);
  const baseHref = baseHrefMatch ? baseHrefMatch[1] : "/clubhousekidsri/";
  const baseUrl = new URL(baseHref, ORIGIN);
  console.log(`Base href: ${baseHref} -> ${baseUrl.href}`);

  const queue = [];
  const seen = new Set();

  const enqueue = (raw, relativeTo) => {
    const cleaned = normalizeUrl(raw);
    if (!cleaned) return;
    let u;
    try {
      u = new URL(cleaned, relativeTo);
    } catch {
      return;
    }
    if (!shouldMirror(u)) return;
    const key = u.href;
    if (seen.has(key)) return;
    seen.add(key);
    queue.push(u);
  };

  // First-pass: HTML attributes + any inline CSS url(...) occurrences
  for (const raw of findAttrUrls(html)) enqueue(raw, baseUrl);
  for (const raw of findCssUrls(html)) enqueue(raw, baseUrl);

  console.log(`Initial asset queue: ${queue.length}`);

  let i = 0;
  while (i < queue.length) {
    const u = queue[i++];
    const rel = u.pathname.replace("/clubhousekidsri/", "");
    process.stdout.write(`[${i}/${queue.length}] ${rel}\n`);

    let downloaded;
    try {
      downloaded = await downloadTo(u);
    } catch (e) {
      console.warn(`WARN: ${String(e)}`);
      continue;
    }

    const isCss =
      u.pathname.endsWith(".css") ||
      (downloaded.contentType.includes("text/css") && !u.pathname.endsWith(".js"));
    if (isCss) {
      const cssText = downloaded.buf.toString("utf8");
      for (const raw of findCssUrls(cssText)) enqueue(raw, u);
    }
  }

  console.log(`Mirrored ${seen.size} assets into ${OUT_DIR}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


