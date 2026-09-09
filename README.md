# Zzpkit — static product preview

Professionele HTML/CSS/JS preview van **Zzpkit** (ZZP AI Starterkit). Geen build-stap. Nederlands. Prijs op de marketingpagina: **€29**.

## Openen

```bash
cd /workspace/zzpkit
python3 -m http.server 8765
```

Open daarna:

- Marketing: http://127.0.0.1:8765/index.html
- Productkit: http://127.0.0.1:8765/app.html (soft gate; code in `SALES_PACK.md`)

Of open `index.html` / `app.html` rechtstreeks in de browser (copy-to-clipboard werkt het betrouwbaarst via een lokale server).

## Bestanden

| Bestand | Rol |
|---------|-----|
| `index.html` | Marketing landing |
| `app.html` | Productkit (sidebar + promptkaarten) |
| `styles.css` | Gedeelde styles |
| `content.js` | Prompt-data (NL) |
| `app.js` | Navigatie, hash-routes, kopieerknoppen |
| `access.js` | Soft toegangspoort (`WERKLIJN29`) op `app.html` |
| `SALES_PACK.md` | Sales ops: listing, mail, ads, code |
| `favicon.svg` | Icoon |

## Design

- Achtergrond cream `#F7F3EC`, ink `#1C1917`, accent teal `#0F766E`
- Headlines: Fraunces · UI: DM Sans · prompts: IBM Plex Mono
- Geen persoonsnamen in de UI-copy

## Disclaimer

Geen juridisch, fiscaal of boekhoudkundig advies.
