# Rudi macht alles — Projekt-Protokoll

**Stand:** 9. September 2026
**Letzte Session:** Domain live, Google Search Console eingerichtet, Unternehmensprofil befüllt. Davor: 6 neue Projektfotos, neue Bildersektion, Sicherheits- und Funktionsprüfung.

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

## Erledigt (6. Juli 2026)

- **Website ist live:** https://boni-ux-cpu.github.io/rudi-macht-alles/ (GitHub Pages, Deploy automatisch bei jedem Push auf main)
- **Impressum + Datenschutz** live (Rrustem Baralija, Oberer Lährer Weg 5, 92318 Neumarkt i.d.OPf., keine USt-IdNr.), Footer-Links auf allen Seiten
- **Schriften lokal eingebunden** (Fraunces + Inter als woff2 in `website/fonts/`) — kein Google-Fonts-Abruf mehr, DSGVO-Problem behoben
- **.mcp.json aus dem Repo entfernt** (enthielt Framer-Token) — ABER: Token war öffentlich, muss bei unframer.co erneuert werden!

## Erledigt (6. Juli 2026, zweite Session)

- **leistungen.html komplett ausgebaut:** 6 vollbreite Bereiche (statt Karten-Grid), je mit Ergebnis-Absatz, „Das ist enthalten"-Liste, Bild-Slots (`<!-- BILD: … -->`), Vorher/Nachher-Layout bei Pflaster + Gestaltung, Referenz-Platzhalter, Ablauf-Zeile + WhatsApp-CTA
- **FAQ-Sektion** mit 6 Fragen (Festpreis, Entsorgung inklusive, Start max. 2 Wochen, kleine Aufträge, Anwesenheit, ganz Bayern) als barrierearmes Akkordeon + FAQPage-Schema (JSON-LD)
- **Homepage-Karten aufklappbar:** Teaser mit Ergebnis-Satz, 3 Stichpunkten, Ablauf-Zeile, „Alle Details"-Link + WhatsApp — nur eine offen, Tastatur-bedienbar
- **Rechtsseiten** intern als Entwurf gekennzeichnet; „Auf der Website wird nichts gespeichert" verlinkt jetzt auf datenschutz.html
- Positionierung geschärft: Rudi macht jede Besichtigung persönlich, Ausführung durch die Familien-Teams (ganz Bayern)

## Erledigt (6. September 2026)

### Bild für Baum- & Heckenschnitt
- `images/heckenschnitt-thuja.webp` (Pexels, gewerblich frei, 194 KB, 1200x800) ersetzt die Icon-Kachel auf der Startseite und den Platzhalter auf leistungen.html
- Bewusst ein Motiv ohne frontal erkennbares Gesicht gewählt — die Pexels-Lizenz deckt keine Nutzung ab, die nach Werbung mit einer abgebildeten Person aussieht
- Bleibt ein Symbolbild wie bei Entrümpelung: sobald ein echtes Foto einer geschnittenen Hecke da ist, ersetzen

### Vollständige Prüfung — Ergebnis
Bestanden:
- Formular-Injection-Test: Versuch, über das Nachrichtenfeld eine fremde Telefonnummer in den WhatsApp-Link zu schleusen, schlägt fehl (encodeURIComponent). Kein XSS.
- Git-Historie über alle 17 Commits durchsucht: kein Token, kein Schlüssel mehr auffindbar. Die Bereinigung vom 6.7. hat gehalten.
- 39 interne Links und Bilder einzeln gegen den Server geprüft: 0 Fehler
- Kontaktdaten über alle 7 Seiten identisch (Telefon 27x, WhatsApp 25x, E-Mail 23x)
- Alle 27 Bilder mit alt-Text; JSON-LD valide (LocalBusiness + FAQPage)
- Mobile 375px: kein horizontales Scrollen

Behoben:
- **Sechs sichtbare `[Referenz: ...]`-Platzhalter** von leistungen.html entfernt (standen live auf der Website)
- **Vorher/Nachher-Bereiche aufgelöst** (Gestaltung + Pflaster) — es gibt keine Vorher-Fotos, die Platzhalter "Vorher-Foto folgt" waren live sichtbar. Jetzt je ein Einzelbild wie in den anderen Bereichen.
- **sitemap.xml + robots.txt** zeigten auf `rudimachtalles.de` — Domain existiert nicht (kein DNS). Umgestellt auf die github.io-Adresse. **Zurückstellen, sobald die eigene Domain läuft.**
- Meta-Descriptions gekürzt (186/201 → 133/134 Zeichen, Google schneidet bei ~160 ab)
- `window.open` beim WhatsApp-Versand mit `noopener` abgesichert
- `<noscript>`-Fallback in allen 7 Seiten: ohne JavaScript blieb die Seite wegen der Einblend-Effekte praktisch leer
- Touch-Ziele im Handy-Menü auf 44x44 px vergrößert (waren 32-33 px)

Geklärt:
- **Rechtsform: Einzelunternehmen**, keine GmbH. Das Impressum stimmt so. Die alte Visitenkarte im Ordner `kunden-unterlagen/` nennt noch "GmbH" — die ist überholt.

Hinweise ohne Handlungsbedarf:
- Das GitHub-Repo ist öffentlich: chat-protokoll.md, CLAUDE.md und die Visitenkarten-PDFs sind für jeden lesbar. Keine Zugangsdaten, keine Kundendaten dabei.
- CSS-Regeln für `.ba-grid`, `.ba-label`, `.svc-ref`, `.img-slot` sind jetzt ungenutzt — bewusst stehengelassen als Vorlage, falls doch mal Vorher/Nachher-Fotos kommen.
- Voller Bericht: `Website-Pruefbericht.pdf` im Projektordner


### Neue Projektfotos (26 gesichtet, 6 verwendet)
Boni hat 26 neue Fotos in `bilder/` gelegt. Alle einzeln durchgesehen.

**Wichtig — drei davon waren bereits auf der Website** und wurden aussortiert:
weiße Pflanzkübel (= `bepflanzung-kuebel`), Luftbild Polygonalterrasse (= `galerie-polygonal`), Pool mit Holzdeck (= `galerie-pool-deck`).

**Übernommen (je 1200x900 WebP, aus 4:3-Zuschnitt):**
| Datei | Motiv | Anmerkung |
|---|---|---|
| `terrasse-abendlicht.webp` | Natursteinterrasse mit Beleuchtung | einzige Abendaufnahme, trägt als großes Bild die Sektion |
| `treppe-blockstufen.webp` | Blockstufen-Treppe | Treppenbau kam vorher nicht vor; Kabelrolle rechts weggeschnitten |
| `vorgarten-schwungbeete.webp` | Vorgarten mit geschwungenen Beeten | |
| `rundbeet-wasserschale.webp` | Rundbeet, Cortenstahl, Wasserschale | gestalterisch stärkstes Motiv |
| `polygonalweg-hortensien.webp` | Polygonalweg mit Hortensien | Sommer/Blüte |
| `kopfsteinpflaster-weg.webp` | Kopfstein zwischen Sandsteinmauern | Arbeiter + Bauschutt am oberen Rand weggeschnitten |

**Aussortiert:** Weiden-Iglu (ist ein Screenshot mit Browser-Leiste), reine Baustellenfotos, Pool mit Hortensien (Pool ist bereits 2x auf der Seite), Kopfsteinweg mit Rosenbögen (Umfeld noch unfertig).

### Neue Sektion „Aus unserer Arbeit" auf der Startseite
- Sitzt zwischen Zahlen-Band und Statement-Parallax — erst die Behauptung „50+ Projekte", direkt danach der Bildbeweis
- Raster `.work-grid`: 3-spaltig, erstes Bild über 2 Spalten und 2 Reihen (795x600), die anderen fünf 389x292; auf dem Handy 2-spaltig mit dem großen Bild über die volle Breite
- Nutzt das bestehende `.gal-item`-Muster (Bildunterschrift beim Hover, Klick führt zur passenden Leistung), darunter Knopf zur Galerie
- **Galerie-Seite von 11 auf 17 Bilder erweitert** — die sechs neuen sind eingemischt, nicht angehängt, damit die starken Motive weit oben stehen. Sonst hätte „Alle Projekte ansehen" auf andere Bilder geführt als die auf der Startseite gezeigten.

### Personenbilder
- **Familienfoto (Rudi + 4 Söhne)** → `familie-rudi-soehne.webp`, ersetzt in der Sektion „Wer wir sind" das Gartenbild. Der Text dort spricht von „Rudi und seine Söhne" — das Bild belegt die Aussage jetzt. (Einverständnis der Söhne zur Veröffentlichung ist Bonis Sache.)
- **Foto von Rudi im Garten:** kurz eingebaut, dann auf Bonis Wunsch wieder entfernt. Grund: Schnappschuss beim Sprechen, harte Mittagssonne, Bierflasche in der Hand (weggeschnitten), und mit 906x900 px Original blieb nach dem engen Zuschnitt zu wenig Auflösung.
- **Stattdessen: das Logo als Platzhalter** in „Sie sprechen direkt mit Rudi" — als Inline-SVG auf dem grünen Verlauf.
  **Wichtig:** Die SVG-Dateien in `brandkit/` laden Schriften per `@import` von Google Fonts. Nicht direkt einbinden — das wäre der DSGVO-Fehler von Anfang Juli zurück. Die eingebaute Fassung nutzt die lokal vorhandenen Schriften über CSS-Klassen (`.lg-rudi`, `.lg-ma`, `.lg-cl` in `.personal__logo`), verifiziert: kein Google-Abruf mehr.

## Erledigt (7. September 2026) — Eigene Domain live

**Die Website läuft unter https://rudimachtalles.de**

- Domain bei netcup registriert (5 EUR, Verlängerung 06.09.2027 — Folgepreis prüfen)
- DNS im netcup-CCP unter **CloudDNS** (nicht unter „Nameserver"): vier A-Einträge auf
  185.199.108–111.153 mit Host `@`, dazu `www` als CNAME auf `boni-ux-cpu.github.io`, TTL 3600
- **DNSSEC bleibt deaktiviert** — für GitHub Pages nicht nötig, nur zusätzliche Fehlerquelle
- `website/CNAME` mit Inhalt `rudimachtalles.de` angelegt. **Wichtig:** Bei Deploy über GitHub Actions
  reicht diese Datei allein nicht — die Domain muss zusätzlich unter
  Repository → Settings → Pages → Custom domain eingetragen werden.
  (Nicht zu verwechseln mit Account-Einstellungen → Pages → „Add a verified domain“ — das ist eine
  optionale Schutzfunktion mit TXT-Eintrag, die wir nicht brauchen.)
- Zertifikat für HTTPS von GitHub ausgestellt, deckt auch `www` ab
- Umgestellt: sitemap.xml, robots.txt, **canonical-Tags auf allen sieben Seiten** (nötig, weil die Seite
  unter zwei Adressen erreichbar ist), `url` im LocalBusiness-Schema, `og:url`
- Die alte github.io-Adresse funktioniert weiterhin

**Noch offen bei der Domain:** Haken „Enforce HTTPS“ in den GitHub-Einstellungen — bis dahin
antwortet `http://` (ohne s) mit 404. Die verschlüsselte Adresse funktioniert bereits.

## Erledigt (9. September 2026)

### Website-Änderungen
- **Hinweis auf KI-Erstellung**: Fußzeile aller 7 Seiten („Website mit Unterstützung von KI erstellt") plus eigener Abschnitt im Impressum
- **Zweiter Weg im Anfrageformular**: Knopf „Lieber per E-Mail" neben WhatsApp. Beide nutzen dieselbe Textfunktion; der E-Mail-Knopf prüft die Pflichtfelder und löst kein versehentliches Absenden aus (`type="button"`). Datenschutzerklärung entsprechend ergänzt.
- **Öffnungszeiten** auf 08:00–18:00 (vorher 07:00) — Startseite, Kontaktseite, LocalBusiness-Schema
- **Familienfoto entfernt**, in „Wer wir sind" steht wieder `galerie-corten.webp`. Datei aus `website/images/` gelöscht.
  Boni hat entschieden: **Git-Historie wird NICHT bereinigt** — das Foto bleibt über frühere Commits abrufbar, das ist so akzeptiert.

### Auffindbarkeit
- **„Enforce HTTPS" aktiv** — `http://` leitet mit 301 auf `https://` um
- **Google Search Console eingerichtet**: Property als „URL-Präfix" `https://rudimachtalles.de`, Bestätigung über `<meta name="google-site-verification">` in `index.html`. Sitemap eingereicht, Indexierung beantragt.
  Zwei Tage nach dem Domain-Start war die Seite in keiner Suchmaschine auffindbar — ohne diese Anmeldung hätte es Wochen dauern können.
  Selbstprüfung: Google-Suche nach `site:rudimachtalles.de`

### Google Unternehmensprofil
- Angelegt und befüllt: Name „Rudi macht alles", Kategorie **„Gartenbauer"** (Landschaftsgärtner steht bei Google nicht zur Auswahl), Leistungen und Öffnungszeiten hinterlegt
- **Status: noch nicht öffentlich sichtbar** — die Identitätsbestätigung per Post läuft
- Kurzbeschreibung (ca. 300 Zeichen) wurde geliefert, lange Fassung steht in `Google-Unternehmensprofil.pdf`

### E-Mail mit eigener Domain — recherchiert, vertagt
Boni hat entschieden: **erstmal so lassen**, die Gmail-Adresse bleibt auf der Website.
Recherche-Ergebnis für später:
- netcup bietet bei einer **reinen Domain keine E-Mail** — dafür braucht es ein Webhosting-Paket (2,69 Euro/Monat, ca. 32 Euro/Jahr)
- mailbox.org Standard: 3 Euro/Monat (36 Euro/Jahr), eigene Domain erst ab diesem Tarif
- Google Workspace Starter: 6,80 Euro/Monat (ca. 82 Euro/Jahr)
- **Wichtig:** Der kostenlose Weg (Weiterleiter + „Senden als" in Gmail) ist eine Sackgasse — **Google schaltet „Senden als" für fremde Adressen im Januar 2027 ab**, neue Einrichtungen werden schon vorher eingeschränkt. Quelle: Gmail-Hilfe.
- Empfehlung falls später: netcup, weil dort schon ein Kundenkonto besteht

## Offene Punkte

1. **Framer-Token erneuern** — Historie ist nachweislich sauber (6.9. erneut geprüft), aber der alte Token war einmal öffentlich sichtbar und gilt damit als kompromittiert. Neuen Token im Unframer-Plugin erzeugen.
2. **Google-Profil bestätigen** — Postkarte abwarten, Code eingeben. Danach: Fotos hochladen (mindestens 10 aus `website/images/`), Beschreibung eintragen. **Das ist der größte offene Hebel** — ohne Bestätigung ist das Profil unsichtbar.
3. **Indexierung abwarten** — nach dem Antrag in der Search Console üblicherweise Stunden bis Tage. Prüfen mit `site:rudimachtalles.de`.
4. **E-Mail mit eigener Domain** — vertagt, Recherche oben. Falls später: erst Postfach einrichten und testen, dann die Adresse auf der Website tauschen (steht dort 23-mal, plus Impressum, Datenschutz, Firmeneintrag und im E-Mail-Knopf des Formulars).
5. **Foto von Rudi** für die „Direkter Draht"-Sektion — aktuell steht dort das Logo. Gebraucht wird: Rudi auf einer Baustelle, in Arbeitskleidung, ruhig in die Kamera, quer oder hoch, mindestens 1200 px. Zwei Minuten Aufwand, große Wirkung an genau der Stelle, wo über den Anruf entschieden wird.
6. **Echte Projektfotos** für Baum-/Heckenschnitt und Entrümpelung — beide laufen weiterhin mit gekauftem Symbolbild. Ein Handyfoto direkt nach dem Schnitt reicht. (Alle anderen Bereiche haben inzwischen echte Fotos.)
7. **Referenz-Sätze je Leistung** — die Platzhalter sind raus. Sobald Zahlen da sind (z.B. „40 m Hainbuchenhecke, Neumarkt"), lohnt es sich, sie einzusetzen.
8. **Echte Google-Bewertungen** — Kundenstimmen-Sektion wurde entfernt, bis echte da sind
9. **Impressum + Datenschutz** vor größeren Werbeausgaben anwaltlich gegenlesen lassen (tragen intern noch den Entwurfs-Vermerk)

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
