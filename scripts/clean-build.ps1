# Clean Next.js build cache completely
Write-Host "Cleaning Next.js build cache..."

if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
    Write-Host "✓ Deleted .next folder"
}

if (Test-Path "node_modules\.cache") {
    Remove-Item -Recurse -Force "node_modules\.cache"
    Write-Host "✓ Deleted node_modules/.cache"
}

# Also clear Next.js telemetry cache if it exists
$telemetryPath = "$env:APPDATA\next"
if (Test-Path $telemetryPath) {
    Remove-Item -Recurse -Force $telemetryPath -ErrorAction SilentlyContinue
}

Write-Host "Cache cleared. Run 'npm run dev' to start fresh."

