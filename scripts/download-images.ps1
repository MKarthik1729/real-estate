$images = @(
  @{ url = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa'; name = 'luxury-house.jpg' },
  @{ url = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'; name = 'modern-villa.jpg' },
  @{ url = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'; name = 'interior-luxury.jpg' },
  @{ url = 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c'; name = 'aerial-real-estate.jpg' },
  @{ url = 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae'; name = 'plots-land.jpg' },
  @{ url = 'https://images.unsplash.com/photo-1599423300746-b62533397364'; name = 'premium-apartment.jpg' }
)
$imagesDir = Join-Path -Path $PSScriptRoot -ChildPath '..\public\images'
if (-not (Test-Path $imagesDir)) {
  New-Item -ItemType Directory -Path $imagesDir | Out-Null
}

$images | ForEach-Object {
  $dest = Join-Path -Path $imagesDir -ChildPath $_.name
  if (-not (Test-Path $dest)) {
    try {
      Invoke-WebRequest -Uri $_.url -OutFile $dest
    } catch {
      Write-Warning "Failed to download $($_.url): $_"
    }
  }
}
