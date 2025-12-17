# Kill all Node.js processes to ensure dev server is fully stopped
Write-Host "Stopping all Node.js processes..."

Get-Process | Where-Object { $_.ProcessName -eq "node" } | ForEach-Object {
    Write-Host "Killing process: $($_.Id) - $($_.ProcessName)"
    Stop-Process -Id $_.Id -Force -ErrorAction SilentlyContinue
}

Start-Sleep -Seconds 1
Write-Host "All Node.js processes stopped."

