# Rudi Macht Alles

Website für **Rudi Macht Alles** — Garten- und Landschaftsbau.

## Über das Projekt

Klassische Firmen-Website mit fünf Seiten:

- `index.html` — Homepage
- `leistungen.html` — Leistungen / Services
- `galerie.html` — Galerie
- `ueber-uns.html` — Über uns
- `kontakt.html` — Kontakt

## Tech-Stack

- Pure HTML, CSS, JavaScript
- Inhalte werden über `content.json` gepflegt
- Keine Frameworks, keine Build-Tools

## Ordner-Struktur

```
rudi-macht-alles-v2/
├── index.html
├── leistungen.html
├── galerie.html
├── ueber-uns.html
├── kontakt.html
├── content.json       (alle Texte zentral)
├── css/               (Styles)
├── js/                (Scripts)
├── images/            (Bilder)
└── brandkit/          (Logo & Brand-Assets)
```

## Lokale Vorschau

Einfach `index.html` im Browser öffnen, oder einen kleinen Webserver starten:

```bash
cd rudi-macht-alles-v2
python3 -m http.server 8000
```

Dann im Browser: http://localhost:8000

---

Privates Projekt. Alle Rechte vorbehalten.
