# 📖 Rudi Macht Alles — Deine Website (EditierBar Edition)

## 🎯 Das Neue System

Deine Website ist jetzt **vollständig editierbar**, ohne dass du Code anfassen musst!

### Die 3 Dateien die du brauchst:

1. **`content.json`** — Deine Inhalts-Datenbank
   - Hier änderst du: Telefon, E-Mail, Texte, Farben, Bewertungen
   - Diese Datei ist das Herzstück!

2. **`js/content-loader.js`** — Der Magier
   - Lädt `content.json` automatisch
   - Überträgt Inhalte auf deine Website
   - Du brauchst hier NICHTS zu ändern!

3. **HTML-Dateien** (index.html, kontakt.html, etc.)
   - Sind mit `content.json` verbunden
   - Werden automatisch aktualisiert
   - Du brauchst auch hier NICHTS zu ändern!

---

## 🚀 Schnelleinstieg (5 Minuten)

1. **Öffne** `content.json` im Text-Editor (VSCode, Notepad++, etc.)
2. **Ändere** deine Telefonnummer:
   ```json
   "phone": "+49 (0) 123 456 789"  →  "phone": "+49 (0) 555 123 456"
   ```
3. **Speichere** mit Ctrl+S (Windows) oder Cmd+S (Mac)
4. **Aktualisiere** die Website im Browser (F5)
5. **Voilà!** Deine Nummer ist überall aktualisiert! ✨

---

## 📚 Welche Anleitung brauchst du?

- **Erste Schritte?** → Lies `QUICK-START.md` (5 Min)
- **Detaillierte Anleitung?** → Lies `EDITING-GUIDE.md` (15 Min)
- **Schnelle Referenz?** → Diese Datei hier 

---

## ✏️ Was du ändern kannst

### Kontaktdaten
In `content.json` unter `contact`:
- Telefon (`phone`)
- E-Mail (`email`)
- Standort/Stadt (`location`)
- Öffnungszeiten (`openingHours`)

### Texte & Headlines
In `content.json` unter `hero`, `about`, `cta`:
- Hero-Überschrift
- Subheadline
- Claim/Tagline
- Kundenzitate

### Statistiken
In `content.json` unter `stats`:
- Jahre Erfahrung
- Anzahl Projekte
- Zufriedenheitsquote
- Service Area

### Farben & Design
In `content.json` unter `design.colors`:
- Alle Farb-Codes ändern (HEX-Format)
- Z.B. `"greenDark": "#1B4332"` → `"greenDark": "#0D5C2D"`

### Bewertungen
In `content.json` unter `testimonials`:
- Neue Bewertungen hinzufügen
- Bestehende Bewertungen ändern
- Sterne (1-5) anpassen

---

## 🛠️ Dateistruktur

```
rudi-macht-alles-v2/
├── 📄 content.json              ← DEINE INHALTE (editierbar!)
├── 📄 index.html                ← Startseite
├── 📄 kontakt.html              ← Kontakt-Seite
├── 📄 galerie.html              ← Galerie-Seite
├── 📄 leistungen.html           ← Leistungen-Seite
├── 📄 ueber-uns.html            ← About-Seite
│
├── 📁 css/
│   ├── style.css                ← Design (nur ändern wenn nötig)
│   └── components.css           ← Komponenten
│
├── 📁 js/
│   ├── content-loader.js        ← MAGIER (nicht ändern!)
│   ├── main.js                  ← Navigation etc.
│   ├── form.js                  ← Formular-Logik
│   └── gallery.js               ← Galerie-Filter
│
├── 📁 brandkit/                 ← Logo & Markenrichtlinien
│
├── 📄 README-EDITING.md         ← Diese Datei
├── 📄 QUICK-START.md            ← Kurze Anleitung
└── 📄 EDITING-GUIDE.md          ← Detaillierte Anleitung
```

---

## ⚠️ Wichtige Regeln

### DO ✅
- `content.json` mit Text-Editor öffnen
- Nur Text zwischen Anführungszeichen (`"..."`) ändern
- Kommas und Klammern behalten
- Auf jsonlint.com validieren wenn unsicher
- Browser mit F5 aktualisieren nach Änderung

### DON'T ❌
- HTML-Dateien nicht ändern (nicht nötig!)
- CSS-Dateien nicht ändern (nicht nötig!)
- JavaScript nicht ändern (nicht nötig!)
- Anführungszeichen löschen
- Kommas/Klammern ändern

---

## 🔍 Troubleshooting

### Problem: Änderungen erscheinen nicht
**Lösung:**
1. Hast du mit Ctrl+S/Cmd+S gespeichert? ✓
2. Hast du F5 (nicht Ctrl+R) gedrückt? ✓
3. Validiere deine JSON auf jsonlint.com ✓

### Problem: "Fehler in der Konsole"
**Lösung:**
1. Öffne F12 → Console
2. Kopiere den Fehler
3. Überprüfe deine JSON auf jsonlint.com
4. Meist ist ein Komma oder Anführungszeichen falsch

### Problem: "Website sieht kaputt aus"
**Lösung:**
1. Hast du die JSON nicht validiert?
2. Öffne jsonlint.com und prüfe
3. Finde und behebe den Fehler
4. F5 aktualisieren

---

## 🎨 Farben ändern (Beispiel)

**Aktuell (in content.json):**
```json
"colors": {
  "greenDark": "#1B4332",
  "greenPrimary": "#2D6A4F",
  "gold": "#D4A853",
  "cream": "#F8F6F0"
}
```

**Du möchtest blauere Farben?** Ändere zu:
```json
"colors": {
  "greenDark": "#0D3B66",
  "greenPrimary": "#1B5E75",
  "gold": "#F39C12",
  "cream": "#F0F4F8"
}
```

**Speichern → F5 → Neue Farben überall!** 🎨

---

## 📞 Telefon überall aktualisieren (Beispiel)

**In content.json:**
```json
"contact": {
  "phone": "+49 (0) 123 456 789"  ← Nur HIER ändern!
}
```

**Dann erscheint diese Nummer automatisch:**
- Auf der Startseite
- Im Kontakt-Bereich
- Im Footer
- Überall wo Telefon angezeigt wird!

**Das ist die Magie des Systems!** ✨

---

## 🆕 Neue Bewertung hinzufügen

**In `content.json` findest du:**
```json
"testimonials": [
  {
    "text": "Bestehende Bewertung...",
    "author": "Max M.",
    "location": "Berlin",
    "stars": 5
  }
]
```

**Füge eine neue hinzu:**
```json
"testimonials": [
  {
    "text": "Bestehende Bewertung...",
    "author": "Max M.",
    "location": "Berlin",
    "stars": 5
  },
  {
    "text": "Das ist eine NEUE Bewertung von meinem echten Kunden!",
    "author": "Anna S.",
    "location": "München",
    "stars": 5
  }
]
```

**Speichern → F5 → Neue Bewertung ist auf der Website!** 👏

---

## 📋 Checkliste für erste Edits

- [ ] `content.json` mit Text-Editor öffnen
- [ ] Eine Kleinigkeit ändern (z.B. Telefon)
- [ ] Mit Ctrl+S speichern
- [ ] Browser mit F5 aktualisieren
- [ ] Überprüfen dass Änderung da ist ✓
- [ ] JSON auf jsonlint.com validiert hast ✓
- [ ] Dann größere Änderungen machen

---

## 📞 Was ist wenn ich Hilfe brauche?

**Schritt 1:** Lies QUICK-START.md (5 Min)
**Schritt 2:** Lies EDITING-GUIDE.md (15 Min)
**Schritt 3:** Schau auf jsonlint.com nach Fehlern
**Schritt 4:** Öffne Browser-Konsole (F12)

Wenn immer noch nicht klar: Schreib mir! 💬

---

## 🎉 Das ist alles!

Du hast jetzt deine Website in der Hand. Keine Code-Kenntnisse nötig. Nur `content.json` editieren, speichern, F5 drücken. Fertig!

**Viel Spaß!** 🌱

---

*Letzte Aktualisierung: Mai 2026*
