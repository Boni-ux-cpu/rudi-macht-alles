# Rudi macht alles — Projekt-Protokoll

**Stand:** 5. Juli 2026
**Letzte Session:** Conversion-Redesign der kompletten Website + echte Projektfotos eingebaut.

---

## Was in dieser Session passiert ist

### 1. Startseite komplett neu (Conversion-Struktur nach dura-projekt-Logik)

Neue Sektionsreihenfolge:
1. **Hero** — Parallax-Bild (Pool/Travertin), klares Nutzenversprechen „Ihr Garten, aus einer Hand.", 2 CTAs (Angebot anfragen → Formular, WhatsApp) + Trust-Leiste
2. **Problem → Lösung** — 3 Schmerzpunkte vs. „Bei Rudi läuft's anders"
3. **Leistungen** — 6 Karten mit echten Fotos (Baumschnitt + Entrümpelung als Icon-Kacheln, Fotos fehlen) + Sonderprojekte-Hinweis
4. **Zahlen-Band** — animierte Counter: 50+ Projekte, seit 2009, 24h Antwort
5. **Statement** — Parallax „Der Traum gehört Ihnen."
6. **Über uns** — Familienbetrieb (echtes Corten-Foto)
7. **In 4 Schritten zum fertigen Projekt** — mit „Festpreis-Angebot" als Schritt 3
8. **Persönliche Sektion** — „Sie sprechen direkt mit Rudi", Telefon/WhatsApp/E-Mail-Karten (Foto-Platzhalter „R." bis echtes Foto da ist)
9. **Anfrage-Formular** — 4 Felder (Name, Telefon/E-Mail, Leistung-Dropdown, Nachricht)

### 2. Verbindliche Trust-Aussagen (nichts anderes verwenden)
- „Antwort innerhalb von 24 Stunden"
- „Festpreis nach kostenloser Besichtigung"
- „Über 50 Projekte — Schwerpunkt Garten- & Landschaftsbau"
- Leistungen zusätzlich: „Auch Sonderprojekte: vom Baumhaus bis zum kompletten Gartenumbau…" (in Sie-Form angepasst)

### 3. Formular = WhatsApp
Beide Formulare (Startseite + Kontakt) öffnen beim Absenden WhatsApp mit vorausgefüllter Nachricht (`form[data-wa]` in `js/brand.js`). Kein Backend, keine Datenspeicherung. Das alte kaputte `mailto:` ist raus.

### 4. Bilder
- Alle 21 Dateien aus `bilder/` einzeln geprüft
- **11 verwendet** → als WebP optimiert (max. 1600px Hero / 1200px Rest) in `website/images/`
- **Aussortiert:** 5 Bridge-Connect-Stellenanzeigen (anderes Projekt), 2 iPhone-Screenshots (Weiden-Baumhaus, „Artons Beitrag"-Natursteinweg), 3 Qualitätsmängel (Fußballtor/Müll, trübes Licht, Baustellen-Look)
- 7 alte Stock-Platzhalter (`garten-*.jpg`) gelöscht
- Erfundene Kundenstimmen + erfundene Ortsangaben in Galerie-Captions entfernt

### 5. Effekte (alles ohne Libraries, `js/brand.js`)
- Hero- + Statement-Parallax (nur Desktop ≥769px, Mobile statisch)
- Scroll-Reveal (funktioniert auch nach Anker-Sprüngen)
- Zahlen-Counter beim Einscrollen
- Hover-Lift auf Karten
- `prefers-reduced-motion` wird respektiert

### 6. Geprüft
- Formular-Test: WhatsApp-Link korrekt aufgebaut
- Mobile (375px): sauber, Parallax aus, Initial-Load nur ~507 KB, Rest lazy
- Alle Seiten im Browser gesichtet

**Lokal ansehen:** `http://localhost:8020` (Server läuft; sonst: `cd website && python3 -m http.server 8020`)
Hinweis: Der alte Server auf Port 8000 liefert 404 (macOS-Berechtigung) — 8020 nutzen.

---

## Offene Punkte

1. **Foto von Rudi** für die „Direkter Draht"-Sektion (Platzhalter-Monogramm ist vorbereitet)
2. **Fotos für Baum-/Heckenschnitt + Entrümpelung** (aktuell Icon-Kacheln)
3. **Impressum & Datenschutz** — Pflicht vor dem Online-Gehen (braucht: Name, Adresse, ggf. USt-IdNr.)
4. **Domain + Hosting** (z.B. rudimachtalles.de)
5. **Echte Google-Bewertungen** — Kundenstimmen-Sektion wurde entfernt, bis echte da sind

---

## Ordner-Struktur

```
Rudi_macht_alles/
├── bilder/                 (Original-Fotos, unverändert)
├── brandkit/               (Logo, Markenbuch)
└── website/
    ├── index.html          (NEU: Conversion-Struktur)
    ├── leistungen.html     (echte Bilder, Festpreis-Prozess, Sonderprojekte)
    ├── galerie.html        (11 echte Projektfotos, lazy)
    ├── ueber-uns.html      (echte Bilder)
    ├── kontakt.html        (WhatsApp-Formular mit Leistungs-Dropdown)
    ├── css/brand.css       (erweitert: Trust-Leiste, Problem/Lösung, Stats, Personal…)
    ├── js/brand.js         (Reveal, Counter, Parallax, WhatsApp-Formular)
    └── images/             (11 optimierte WebP-Fotos)
```
