
$utf8 = [System.Text.Encoding]::UTF8
$bytes = [System.IO.File]::ReadAllBytes("index.html")
$content = $utf8.GetString($bytes)

# Map corrupted sequences to correct UTF-8 characters
$content = $content.Replace("Ã§Ã£", "cao_tmp")
$content = $content.Replace("Ã§", "c")
$content = $content.Replace("Ã£", "a")
$content = $content.Replace("Ã©", "e")
$content = $content.Replace("Ã¡", "a")
$content = $content.Replace("Ã­", "i")
$content = $content.Replace("Ã³", "o")
$content = $content.Replace("Ãº", "u")
$content = $content.Replace("Ã ", "a")
$content = $content.Replace("Ã¢", "a")
$content = $content.Replace("Ã´", "o")
$content = $content.Replace("Ã‡", "C")
$content = $content.Replace("Ã‰", "E")
$content = $content.Replace("Ã", "A")

# Now use proper Unicode replacements - write a Python script to do it properly
Write-Host "Content length: $($content.Length)"
