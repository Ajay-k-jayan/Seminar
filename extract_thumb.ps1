Add-Type -AssemblyName System.Drawing

$nobgPath = "c:\Users\Support\Desktop\Seminar\shopkeeper-nobg.png"
$thumbOnlyPath = "c:\Users\Support\Desktop\Seminar\shopkeeper-thumb-only.png"

$bmp = [System.Drawing.Bitmap]::FromFile($nobgPath)

$cropX = 435
$cropY = 150
$cropW = 55
$cropH = 95

$thumbBmp = New-Object System.Drawing.Bitmap($cropW, $cropH, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($thumbBmp)
$srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$destRect = New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)
$g.DrawImage($bmp, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

$bmp.Dispose()
$thumbBmp.Save($thumbOnlyPath, [System.Drawing.Imaging.ImageFormat]::Png)
$thumbBmp.Dispose()

Write-Output "Perfect thumb extracted!"

