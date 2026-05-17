# Rudi Macht Alles

Garten- und Landschaftsbau-Website für **Rudi Baralija** (München, seit 2009).

---

## Ordner-Übersicht

```
Rudi_macht_alles/
├── README.md              Diese Datei
├── anleitung.md           Wie du Website-Inhalte änderst (für dich)
│
├── website/               Die fertige Website (5 Seiten + Assets)
│   ├── index.html
│   ├── leistungen.html
│   ├── galerie.html
│   ├── ueber-uns.html
│   ├── kontakt.html
│   ├── content.json       Alle Texte/Telefon/Bewertungen zentral
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── css/               Design
│   ├── js/                Logik
│   └── images/            Bilder
│
├── brandkit/              Marken-Identität
│   ├── brandkit.html      Visuelles Brandbook
│   ├── brandkit.md        Technische Referenz (Farben, Fonts, Regeln)
│   ├── visitenkarte.html  Druckfertig 85×55 mm
│   ├── logo-wordmark.svg  Haupt-Logo
│   ├── logo-mark.svg      Botanischer Zweig allein
│   └── logo-monogram.svg  R-Monogramm für Favicon/Avatar
│
└── kunden-unterlagen/     Briefing-PDFs vom Kunden
    ├── Rudi.pdf
    └── HAUSMEISTER-RUDI.pdf
```

---

## Schnellzugriff

| Aufgabe | Datei |
|---------|-------|
| Texte/Telefon ändern | `anleitung.md` lesen, dann `website/content.json` |
| Website ansehen | `website/index.html` doppelklicken |
| Brandkit ansehen | `brandkit/brandkit.html` doppelklicken |
| Visitenkarte drucken | `brandkit/visitenkarte.html` doppelklicken |

---

## Tech-Stack

- Pure HTML, CSS, JavaScript — keine Frameworks, keine Build-Tools
- Inhalte zentral in `website/content.json`
- Schriften: Fraunces (Serif), Inter (Sans) — werden von Google Fonts geladen

## Lokaler Preview-Server (optional)

Direktes Öffnen via Doppelklick funktioniert. Wer einen lokalen Server möchte:

```bash
cd Rudi_macht_alles/website
python3 -m http.server 8000
# Dann im Browser: http://localhost:8000
```

---

Privates Projekt. Alle Rechte vorbehalten.
