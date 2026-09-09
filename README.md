# Rudi macht alles

Website für den Garten- und Landschaftsbaubetrieb **Rudi macht alles** (Inhaber Rudi Baralija) aus Neumarkt in der Oberpfalz. Familienbetrieb seit 2009, tätig in Neumarkt, Nürnberg, München, Freising und Landshut.

**Live:** https://rudimachtalles.de

---

## Veröffentlichen

Jeder Push auf `main` veröffentlicht die Website automatisch. Ein GitHub-Actions-Workflow lädt den Ordner `website/` zu GitHub Pages hoch — nach etwa 30 bis 60 Sekunden ist die Änderung online.

Alles außerhalb von `website/` (diese Datei, Protokolle, Brandkit) wird **nicht** veröffentlicht und dient nur der Projektarbeit.

---

## Ordner

```
Rudi_macht_alles/
├── README.md              Diese Datei
├── chat-protokoll.md      Was wann warum gemacht wurde — Einstiegspunkt für neue Sessions
├── Fahrplan.pdf           Offene Schritte (Domain, Google-Profil, E-Mail)
├── Website-Pruefbericht.pdf
├── Google-Unternehmensprofil.pdf
├── Visitenkarte-Druck.pdf 85 × 55 mm, 3 mm Anschnitt, zweiseitig, druckfertig
│
├── website/               Das, was veröffentlicht wird
│   ├── index.html         Startseite
│   ├── leistungen.html    Sechs Leistungsbereiche + FAQ
│   ├── galerie.html       17 Projektfotos
│   ├── ueber-uns.html
│   ├── kontakt.html
│   ├── impressum.html
│   ├── datenschutz.html
│   ├── CNAME              Verknüpfung zur eigenen Domain — nicht löschen
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── css/brand.css      Das gesamte Design
│   ├── js/brand.js        Das einzige aktive Skript
│   ├── fonts/             Schriften, lokal eingebunden
│   └── images/            Projektfotos als WebP
│
├── brandkit/              Logos und Markenbuch
├── bilder/                Originalfotos (nicht im Repository)
└── kunden-unterlagen/     Alte Visitenkarten
```

---

## Inhalte ändern

Die Texte stehen **direkt im HTML**. Öffne die passende Datei in `website/`, such die Stelle, ändere sie, speichere, fertig.

Eine Schritt-für-Schritt-Anleitung dafür steht in **`anleitung.md`** — inklusive der Stellen, die man leicht übersieht.

**Wenn du etwas an mehreren Stellen änderst, denk an diese Orte:**

| Was | Wo überall |
|---|---|
| Telefonnummer | alle sieben Seiten, Impressum, Datenschutz, `index.html` (Firmeneintrag) |
| E-Mail | dieselben Stellen plus der E-Mail-Knopf im Anfrageformular |
| Öffnungszeiten | `index.html` (zweimal: sichtbar und im Firmeneintrag), `kontakt.html` |
| Leistungen | `index.html` (Karten), `leistungen.html` (Detailbereiche) |

---

## Technik

Reines HTML, CSS und JavaScript. Keine Frameworks, kein Build-Schritt — was im Ordner liegt, wird ausgeliefert.

- **Schriften:** Fraunces (Serif) und Inter (Sans), als woff2 in `website/fonts/`. **Bewusst lokal eingebunden, nicht von Google Fonts** — ein Abruf bei Google wäre ohne Einwilligung datenschutzrechtlich problematisch.
- **Anfrageformular:** Speichert und sendet nichts selbst. Beim Absenden öffnet sich WhatsApp mit vorbereiteter Nachricht, alternativ das E-Mail-Programm des Besuchers. Kein Server, keine Datenbank, keine gespeicherten Daten.
- **Bilder:** WebP, maximal 1600 px (Hero) bzw. 1200 px, alle mit Alternativtext.
- **Effekte** in `js/brand.js`: Einblenden beim Scrollen, Zähler, Parallax (nur Desktop), Aufklapp-Bereiche. `prefers-reduced-motion` wird respektiert.

---

## Finger weg

Diese Dinge sehen unwichtig aus, sind es aber nicht:

- **`website/CNAME`** — verknüpft das Projekt mit der Domain. Ohne diese Datei ist die Website unter rudimachtalles.de nicht mehr erreichbar.
- **`website/fonts/`** — siehe oben. Wer die Schriften stattdessen von Google lädt, handelt sich ein Datenschutzproblem ein.
- **Die `canonical`-Angaben** im Kopf jeder Seite — sie sagen Suchmaschinen, welche Adresse die richtige ist. Die Seite ist unter mehreren Adressen erreichbar; ohne diese Angabe wertet Google das als doppelten Inhalt.
- **Das Bestätigungs-Tag** `google-site-verification` in `index.html` — hängt an der Google Search Console.
- **Die Logo-SVGs in `brandkit/`** — sie laden ihre Schriften per Verweis von Google Fonts. Nicht direkt in die Website einbinden. Auf der Seite steckt das Logo als Inline-SVG mit den lokalen Schriften.

---

## Lokale Vorschau

```bash
python3 -m http.server 8030 --directory website
```

Dann im Browser: http://localhost:8030

(Port 8000 wird auf diesem Rechner von etwas anderem belegt und liefert 404.)

---

Privates Projekt. Alle Rechte vorbehalten.
