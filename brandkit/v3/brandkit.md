# Rudi Macht Alles — Brandkit v3

**Edition Eins · Mai 2026**
*Eine lebendige Anleitung. Für eine Marke, die wächst.*

> Die visuelle Übersicht findet sich in `brandkit.html`. Diese Datei ist die textliche Referenz für Entwicklung und Pflege.

---

## I. Identität

Rudi Macht Alles ist keine Gartenbau-Werbung.
Es ist eine Marke für Menschen, die ihren Garten ernst nehmen — und denen es wichtig ist, dass die Person, die anpackt, auch die Person ist, die ans Telefon geht.

**Vier Prinzipien**

1. **Rudi kommt selbst.** Keine Zeitarbeiter, keine Subunternehmer.
2. **Wir lesen den Garten.** Erst schauen, dann anbieten.
3. **Wir kommen wieder.** Pflege ist kein einmaliger Auftrag.
4. **Sauber raus, sauber rein.** Werkzeuge weg, Abfall mit, Tor zu.

---

## II. Logo

**Wortmarke** — `logo-wordmark.svg`
"Rudi" in Fraunces Italic, eingerahmt von zwei sehr feinen organischen Zweigen in Fern-Grün, darunter "MACHT ALLES" in Inter und eine Clay-Hairline mit dem Tag-Line "GARTEN · PFLEGE · HANDWERK".

**Mark** — `logo-mark.svg`
Ein abstrahierter botanischer Zweig (vier Blattpaare + ein Clay-Knospen-Punkt). Verwendung als Verzierung, kleinster Größenbereich, Favicon-Alternative.

**Monogramm** — `logo-monogram.svg`
Ein „R" in Fraunces Italic Cream auf Forest, unten eine Linie mit Blättern, oben ein Clay-Punkt. Für Social-Profile, Avatare, kompakte Anwendungen.

**Regeln**
- Mindestabstand: Höhe des Buchstabens „R" rundherum frei
- Kleinste Größe Print: 25 mm Breite · Digital: 160 px
- Niemals verzerren, neu einfärben, mit Schatten versehen
- Steht auf Cream, Forest, Fern oder Weiß — niemals direkt auf unruhigem Foto

---

## III. Farbpalette

| Token | Name | HEX | RGB | Rolle |
|-------|------|-----|-----|-------|
| `--forest` | Forest | `#1E3026` | 30 · 48 · 38 | **Primärfarbe** · Hero, Footer, Statements |
| `--fern` | Fern | `#4A7C5D` | 74 · 124 · 93 | Lebendiges Grün · Akzente, Icons, Linien |
| `--clay` | Clay | `#B8623A` | 184 · 98 · 58 | **Warmer Akzent** · CTA-Buttons, Eyebrows |
| `--cream` | Cream | `#F4EFE3` | 244 · 239 · 227 | Primär-Hintergrund |
| `--paper` | Paper | `#FCF9F1` | 252 · 249 · 241 | Cards, Surface 2 |
| `--mist` | Mist | `#E0D9C8` | 224 · 217 · 200 | Hairlines, Borders |
| `--stone` | Stone | `#6B6358` | 107 · 99 · 88 | Sekundär-Text, Captions |
| `--ink` | Ink | `#1A1A18` | 26 · 26 · 24 | Lesetext-Kontrast (selten — fast immer Forest) |

Plus Hilfsfarben:
- `--fern-deep` `#3A6248` — Fern-Hover
- `--clay-deep` `#9C4F2D` — Clay-Hover
- `--forest-deep` `#0F1E14` — Forest-Hover
- `--moss-light` `#A8C29C` — kleine helle Akzente auf Forest

**Regeln**
- **Forest ist dominant.** Headers, Hero-Sektionen, Footer — die Marke ruht auf Forest, nicht auf Cream.
- **Clay ist der einzige Call-to-Action-Farbton.** Niemals Fern für CTAs.
- **Fern ist Begleiter.** Linien, Icons, Hover-Akzente — nicht großflächig.
- Lesetext: Forest auf Cream/Paper, oder Cream auf Forest. Niemals Cream auf Fern (Kontrast zu schwach).
- WCAG: Cream auf Forest = 12.4:1 (AAA) · Cream auf Fern = 4.6:1 (AA) · Cream auf Clay = 4.7:1 (AA)

---

## IV. Typografie

**Fraunces** — Display Serif (Variable Font)
Verwendet mit `opsz` (optical sizing) 96–144 für große Displays, 64 für H3/Lede, 36 für Inline-Italic.
Standard ist **Italic** für Headlines — die Italic von Fraunces hat organischen Charakter, sie atmet.

**Inter** — Sans Serif
Für Body, UI, Buttons. Weights: 400, 500, 600.

**Skala**

| Rolle | Font | Größe | Line-Height | Variante |
|-------|------|-------|-------------|----------|
| Display | Fraunces Italic | 90–168 px | 0.92–0.98 | opsz 144 |
| H1 | Fraunces Italic | 56–72 px | 1.0 | opsz 144 |
| H2 | Fraunces | 40–50 px | 1.04 | opsz 96 |
| H3 | Fraunces | 24–28 px | 1.2 | opsz 64 |
| Lede | Fraunces Italic | 18–22 px | 1.4 | opsz 64 |
| Body | Inter Regular | 14–16 px | 1.65 | — |
| Body Small | Inter Regular | 11–12 px | 1.7 | — |
| Eyebrow / Label | Inter Semibold | 10–11 px | UPPERCASE, 0.3em | weight 600 |

**Regeln**
- Niemals mehr als 2 Schriftarten gleichzeitig
- Fraunces Italic ist die Standard-Variante für Headlines (Roman nur für kleinere H2/H3)
- Inter wird in 400, 500, 600 verwendet — kein Bold

---

## V. Spacing

Acht-Schritt-Skala: **4 · 8 · 16 · 24 · 40 · 64 · 96 · 144 px**

- Zwischen Sektionen: min. 96 px (Mobil 64 px)
- Innerhalb eines Blocks: max. 24 px
- Innerhalb einer Card: 32–40 px Padding
- Außenränder Mobil: 24 px · Tablet: 40 px · Desktop: 64–96 px

---

## VI. Komponenten

**Buttons**
- *Primary*: `background: var(--clay); color: var(--cream);` — der einzige CTA-Stil. Inter Semibold 11 px UPPERCASE mit 0.22em letterspacing.
- *Secondary*: `background: var(--forest); color: var(--cream);` — für Sekundär-Aktionen auf Cream-Hintergrund.
- *Ghost*: `background: transparent; color: var(--forest); border-bottom: 1px solid;` — für tertiäre Links.

**Inputs**
- Underline-only: `border: 0; border-bottom: 1px solid var(--mist); padding: 12px 0;`
- Focus: `border-bottom-color: var(--clay);`

**Cards**
- `background: var(--paper); border: 1px solid var(--mist); padding: 32px;`
- Optional: 3-mm-Akzent-Bar links in Fern (siehe Service-Cards)

**Icons / Service-Marker**
- Runde Kreise 16 mm Durchmesser, Hintergrund Fern/Clay/Forest abwechselnd
- Inhalt: römische Nummern in Fraunces Italic — i, ii, iii

**Dividers**
- Hairline-Akzent: `1px solid var(--fern);` oder Clay für Akzent-Linien
- Funktional: `1px solid var(--mist);`

**Animationen**
- Easing: `cubic-bezier(0.2, 0.7, 0.2, 1)`
- Dauer: 300–700 ms
- `prefers-reduced-motion` immer respektieren

---

## VII. Sprache

**So reden wir**
- „Wir pflegen Gärten in München. Seit 2009."
- „Rudi kommt selbst vorbei. Schauen kostet nichts."
- „Ein Schnitt zu viel verändert die Form für ein Jahr."
- „Rufen Sie an. Oder schreiben Sie kurz, was wächst."

**So nicht**
- „Ihr absoluter Premium-Partner für Traumgärten!"
- „Mit unserer langjährigen Expertise verwandeln wir…"
- „🌱 Jetzt 20% Frühbucher-Rabatt!"
- „Wir freuen uns auf Ihre unverbindliche Anfrage."

**Regeln**
- Kurze, direkte Sätze
- Keine Ausrufezeichen, keine Emojis
- Konkrete Worte: „mähen, schneiden, jäten" — nicht „umfassende Garten-Lösungen"
- „Rudi" statt „unser Team" (Personalisierung)
- Niemals: „unverbindlich", „professionell", „individuell", „maßgeschneidert", „hochwertig"

---

## VIII. CSS Custom Properties (copy & paste)

```css
:root {
  --forest:       #1E3026;
  --forest-deep:  #0F1E14;
  --fern:         #4A7C5D;
  --fern-deep:    #3A6248;
  --moss-light:   #A8C29C;
  --clay:         #B8623A;
  --clay-deep:    #9C4F2D;
  --cream:        #F4EFE3;
  --paper:        #FCF9F1;
  --mist:         #E0D9C8;
  --stone:        #6B6358;
  --ink:          #1A1A18;

  --serif: 'Fraunces', 'EB Garamond', Georgia, serif;
  --sans:  'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;

  --opsz-display: "opsz" 144, "SOFT" 100;
  --opsz-section: "opsz" 96;
  --opsz-text:    "opsz" 36;

  --space-1: 4px;   --space-2: 8px;   --space-3: 16px;
  --space-4: 24px;  --space-5: 40px;  --space-6: 64px;
  --space-7: 96px;  --space-8: 144px;

  --ease: cubic-bezier(0.2, 0.7, 0.2, 1);
}
```

**Fonts-Import**
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..600;1,9..144,400..600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

---

## IX. Migration zur Website

**Phase 1** — Foundation
- [ ] CSS-Variablen in `css/style.css` ersetzen (alte Forest/Moss/Craft/Earth/Stone-Werte raus)
- [ ] Google Fonts Link auf Fraunces + Inter umstellen (Lora, Playfair, Montserrat raus)
- [ ] Logo überall durch `logo-wordmark.svg` ersetzen
- [ ] Favicon durch `logo-mark.svg` (oder Monogramm) ersetzen

**Phase 2** — Sections
- [ ] Hero: Forest-Hintergrund mit subtilem Fern/Clay-Glow, Headline in Fraunces Italic mit Clay-Akzent-Wort
- [ ] Service-Cards: Paper-BG mit Fern-Akzentleiste links + runde Fern/Clay/Forest-Icons mit römischen Nummern
- [ ] Buttons: Primary = Clay, Sekundär = Forest

**Phase 3** — Feinschliff
- [ ] Voice & Tone in allen Texten anwenden (siehe Sprache-Kapitel)
- [ ] Animationen auf cubic-bezier(0.2, 0.7, 0.2, 1) konsolidieren
- [ ] Spacing kalibrieren (acht-Schritt-Skala)

---

**Version:** 3.0 · Lebendige Gartenbau-Richtung
**Status:** Konzept · zur Freigabe
