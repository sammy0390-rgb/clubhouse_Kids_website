import { readFile } from "node:fs/promises";
import fs from "node:fs";
import path from "node:path";

function exists(p) {
  try {
    fs.accessSync(p, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

function uniq(arr) {
  return Array.from(new Set(arr));
}

function extractAttr(html, attrName) {
  const re = new RegExp(`${attrName}\\s*=\\s*"([^"]+)"`, "gi");
  const out = [];
  let m;
  while ((m = re.exec(html))) out.push(m[1]);
  return out;
}

function extractCssUrls(css) {
  const re = /url\(([^)]+)\)/gi;
  const out = [];
  let m;
  while ((m = re.exec(css))) {
    const raw = m[1].trim().replace(/^['"]|['"]$/g, "");
    out.push(raw);
  }
  return out;
}

function stripQueryHash(u) {
  return u.split("#")[0].split("?")[0];
}

function isExternal(u) {
  return (
    u.startsWith("http://") ||
    u.startsWith("https://") ||
    u.startsWith("//") ||
    u.startsWith("data:")
  );
}

function isIgnorableHtmlRef(u) {
  return u.startsWith("#") || u.startsWith("mailto:") || isExternal(u) || u.startsWith("/");
}

async function main() {
  const repoRoot = process.cwd();
  const bodyPath = path.join(repoRoot, "app", "clubhousekidsri", "body.html");
  const body = await readFile(bodyPath, "utf8");

  // These resources are referenced by upstream CSS but are NOT present on the Netlify deploy either
  // (they 404 upstream). Keeping them missing is closer to a true clone.
  const allowMissingCss = new Set([
    "public/clubhousekidsri/css/bootstrap.css -> ../fonts/glyphicons-halflings-regular.woff2",
    "public/clubhousekidsri/css/style.css -> images/layers.png",
    "public/clubhousekidsri/css/style.css -> images/layers-2x.png",
    "public/clubhousekidsri/css/style.css -> images/marker-icon.png",
    "public/clubhousekidsri/css/owl.carousel.css -> owl.video.play.png",
  ]);

  // HTML refs
  const htmlRefs = uniq([...extractAttr(body, "src"), ...extractAttr(body, "href")])
    .filter(Boolean)
    .filter((u) => !isIgnorableHtmlRef(u));

  const htmlMissing = [];
  for (const u of htmlRefs) {
    const filePath = path.join(repoRoot, "public", "clubhousekidsri", u);
    if (!exists(filePath)) htmlMissing.push(u);
  }

  // CSS refs
  const cssFiles = [
    "public/clubhousekidsri/css/bootstrap.css",
    "public/clubhousekidsri/css/style.css",
    "public/clubhousekidsri/styles/funtime.css",
    "public/clubhousekidsri/css/owl.carousel.css",
    "public/clubhousekidsri/css/prettyPhoto.css",
    "public/clubhousekidsri/layerslider/css/layerslider.css",
    "public/clubhousekidsri/fonts/flaticons/flaticon.css",
    "public/clubhousekidsri/fonts/glyphicons/bootstrap-glyphicons.css",
    "public/clubhousekidsri/fonts/font-awesome/css/font-awesome.min.css",
  ];

  const cssMissing = [];
  for (const relCssPath of cssFiles) {
    const absCssPath = path.join(repoRoot, relCssPath);
    if (!exists(absCssPath)) continue;

    const cssDir = path.dirname(absCssPath);
    const css = await readFile(absCssPath, "utf8");
    const urls = uniq(extractCssUrls(css))
      .filter(Boolean)
      .map(stripQueryHash)
      .filter((u) => u && !isExternal(u));

    for (const u of urls) {
      const resolved = path.resolve(cssDir, u);
      if (!exists(resolved)) {
        const key = `${relCssPath} -> ${u}`;
        if (!allowMissingCss.has(key)) cssMissing.push(key);
      }
    }
  }

  console.log(`HTML refs checked: ${htmlRefs.length}`);
  console.log(`CSS files checked: ${cssFiles.length}`);

  if (htmlMissing.length) {
    console.log("\nMISSING (HTML src/href):");
    for (const m of htmlMissing) console.log(` - ${m}`);
  }

  if (cssMissing.length) {
    console.log("\nMISSING (CSS url()):");
    for (const m of cssMissing) console.log(` - ${m}`);
  }

  if (htmlMissing.length || cssMissing.length) {
    process.exit(1);
  }

  console.log("\nOK: no missing referenced assets (HTML + CSS).");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


