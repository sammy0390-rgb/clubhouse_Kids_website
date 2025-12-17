$ErrorActionPreference = "Stop"

$origin = "https://loquacious-quokka-163a2a.netlify.app"
$paths = @(
  "clubhousekidsri/js/jquery.min.js",
  "clubhousekidsri/js/bootstrap.min.js",
  "clubhousekidsri/js/jquery.isotope.js",
  "clubhousekidsri/js/mc-validate.js",
  "clubhousekidsri/js/plugins.js",
  "clubhousekidsri/js/contact.js",
  "clubhousekidsri/js/prefixfree.js",
  "clubhousekidsri/js/main.js",
  "clubhousekidsri/layerslider/js/greensock.js",
  "clubhousekidsri/layerslider/js/layerslider.transitions.js",
  "clubhousekidsri/layerslider/js/layerslider.kreaturamedia.jquery.js",
  "clubhousekidsri/layerslider/skins/fullwidth/skin.css",
  "clubhousekidsri/layerslider/skins/fullwidth/skin.png",
  "clubhousekidsri/img/mapmarker.png"
)

foreach ($p in $paths) {
  $url = ($origin.TrimEnd("/") + "/" + $p)
  $out = Join-Path (Get-Location) ("public/" + $p)
  $out = $out -replace "/", "\\"
  New-Item -ItemType Directory -Force -Path (Split-Path $out) | Out-Null

  try {
    Invoke-WebRequest -Uri $url -OutFile $out -UseBasicParsing | Out-Null
    Write-Host ("OK " + $p)
  }
  catch {
    Write-Warning ("FAIL " + $p + " -> " + $_.Exception.Message)
  }
}


