# to run *.ps1 command to create *.ts files
#powershell -ExecutionPolicy Bypass -File merge-docx.ps1
#-----------------------------------------------------------

$source = "archive\prologues-raw-text"
$dest   = "src\content\prologues"

if (-not (Test-Path $source)) {
    Write-Error "Source folder not found: $source"
    exit 1
}

if (-not (Test-Path $dest)) {
    New-Item -ItemType Directory -Path $dest -Force | Out-Null
}

Get-ChildItem $source -Filter *.txt | ForEach-Object {

    $base = $_.BaseName

    $slug = $base.ToLower() `
        -replace ",", "" `
        -replace "'", "" `
        -replace "\?", "" `
        -replace "\s+", "-" `
        -replace "-+", "-"

    $varName = ($slug -replace "-", "_") + "_prologue"

    $text = Get-Content $_.FullName -Raw

    # Preserve the original prologue rhythm:
    # each non-empty line in the raw text becomes its own rendered line/paragraph.
    $paragraphs = $text -split "`r?`n" |
        Where-Object { $_.Trim().Length -gt 0 } |
        ForEach-Object {
            $p = $_.Trim() `
                -replace "`r`n", "`n" `
                -replace "`r", "`n" `
                -replace '`', '\`' `
                -replace '\$\{', '\${'

            "    ``$p``"
        }

    $content = @"
export const $varName = {
  slug: "$slug",
  title: "$base",
  previewStart: 0,
  previewLength: 3,
  previewCharacters: 780,
  paragraphs: [
$($paragraphs -join ",`n")
  ],
};
"@

    Set-Content `
        -Path "$dest\$slug.ts" `
        -Value $content `
        -Encoding UTF8
}
