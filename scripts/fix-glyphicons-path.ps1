$ErrorActionPreference = "Stop"

$srcDir = "public\\clubhousekidsri\\fonts\\glyphicons"
$dstDir = "public\\clubhousekidsri\\fonts"
$files = @(
  "glyphicons-halflings-regular.eot",
  "glyphicons-halflings-regular.woff",
  "glyphicons-halflings-regular.ttf",
  "glyphicons-halflings-regular.svg"
)

foreach ($file in $files) {
  $src = Join-Path $srcDir $file
  $dst = Join-Path $dstDir $file
  if (Test-Path $src) {
    Copy-Item -Force $src $dst
  }
}

Write-Host "Copied glyphicons-halflings-regular.* to public\\clubhousekidsri\\fonts\\"


