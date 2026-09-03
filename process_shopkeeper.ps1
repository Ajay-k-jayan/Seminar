Add-Type -AssemblyName System.Drawing

$inputPath = "c:\Users\Support\Desktop\Seminar\shopkeeper.png"
$outputPath = "c:\Users\Support\Desktop\Seminar\shopkeeper-nobg.png"
$thumbPath = "c:\Users\Support\Desktop\Seminar\shopkeeper-thumb.png"
$bodyPath = "c:\Users\Support\Desktop\Seminar\shopkeeper-body.png"

$bmp = [System.Drawing.Bitmap]::FromFile($inputPath)
$w = $bmp.Width
$h = $bmp.Height

Write-Output "Image size: ${w}x${h}"

# Create 32-bit ARGB copy with transparent background
$nobg = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$body = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Thumb bounding box estimate: x from 0.55 to 0.76 of width, y from 0.33 to 0.55 of height
$minX = [int]($w * 0.54)
$maxX = [int]($w * 0.76)
$minY = [int]($h * 0.32)
$maxY = [int]($h * 0.56)

$thumbW = $maxX - $minX
$thumbH = $maxY - $minY
$thumbBmp = New-Object System.Drawing.Bitmap($thumbW, $thumbH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($x = 0; $x -lt $w; $x++) {
    for ($y = 0; $y -lt $h; $y++) {
        $c = $bmp.GetPixel($x, $y)
        # Check if white background
        if ($c.R -gt 240 -and $c.G -gt 240 -and $c.B -gt 240) {
            # Transparent
            $nobg.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
            $body.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0))
        } else {
            $nobg.SetPixel($x, $y, $c)

            # If inside thumb region, also copy to thumbBmp
            if ($x -ge $minX -and $x -lt $maxX -and $y -ge $minY -and $y -lt $maxY) {
                $thumbBmp.SetPixel($x - $minX, $y - $minY, $c)
            }
            $body.SetPixel($x, $y, $c)
        }
    }
}

$bmp.Dispose()
$nobg.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$thumbBmp.Save($thumbPath, [System.Drawing.Imaging.ImageFormat]::Png)
$nobg.Dispose()
$thumbBmp.Dispose()
$body.Dispose()

Write-Output "Successfully saved transparent shopkeeper images!"

