# 📝 Bearbeitungsanleitung — Rudi Macht Alles Website

## Wie du die Website editierst (OHNE Code zu schreiben!)

Alle Inhalte der Website stehen in **einer einzigen Datei**: `content.json`

Diese Datei ist ein strukturiertes Dokument, ähnlich wie eine gut organisierte Liste. Du kannst sie in jedem Text-Editor öffnen und ändern.

---

## Schritt 1: Die Datei öffnen

1. Öffne deinen Computer-Dateimanager
2. Gehe zu: `Desktop/rudi-macht-alles-v2/`
3. Öffne die Datei `content.json` mit einem Text-Editor (z.B. VSCode, Notepad++, oder auch TextEdit auf dem Mac)

---

## Schritt 2: Inhalte ändern

Die `content.json` Datei sieht so aus:

```json
{
  "company": {
    "name": "Rudi Macht Alles",
    "phone": "+49 (0) 123 456 789",
    "email": "info@rudimachtalles.de"
  },
  "contact": { ... },
  "hero": { ... },
  "services": [ ... ]
}
```

### Wichtige Regeln beim Editieren:

✅ **RICHTIG:**
- Text zwischen Anführungszeichen ändern: `"Rudi Macht Alles"` → `"Meine Gärtnerei"`
- Zahlen ändern: `"+49 123 456"` → `"+49 999 888"`
- Kommas und geschweifte Klammern NICHT löschen

❌ **FALSCH:**
- Anführungszeichen löschen: `"Text` (statt `"Text"`)
- Kommas am Ende einer Zeile entfernen
- Geschweifte Klammern `{}` oder eckige Klammern `[]` verändern

---

## Beispiele: Was du ändern kannst

### Kontaktdaten ändern

**Finde diese Sektion:**
```json
"contact": {
  "phone": "+49 (0) 123 456 789",
  "email": "info@rudimachtalles.de",
  "location": "Musterstadt & 50 km Umkreis",
  "openingHours": "Mo–Fr: 07:00–18:00 Uhr"
}
```

**Ändere zu:**
```json
"contact": {
  "phone": "+49 (0) 123 456 789",
  "email": "meine@email.de",
  "location": "Berlin & Umland",
  "openingHours": "Mo–Fr: 08:00–17:00 Uhr"
}
```

✅ Die Website aktualisiert sich SOFORT!

---

### Hero-Überschrift ändern

**Finde diese Sektion:**
```json
"hero": {
  "headline": "Gärten, die begeistern.",
  "subheadline": "Professionelle Gartengestaltung und -pflege mit Leidenschaft."
}
```

**Ändere zu:**
```json
"hero": {
  "headline": "Dein Traum-Garten wartet.",
  "subheadline": "Wir machen deine Gartenträume wahr!"
}
```

---

### Statistiken ändern

**Finde diese Sektion:**
```json
"stats": {
  "experience": "15+ Jahre",
  "projects": "500+ Projekte",
  "satisfaction": "100% Zufriedenheit",
  "service_area": "Region Bayern"
}
```

**Ändere zu:**
```json
"stats": {
  "experience": "20+ Jahre",
  "projects": "1000+ Projekte",
  "satisfaction": "99% Zufriedenheit",
  "service_area": "Hamburg & Umkreis"
}
```

---

### Dienstleistungen (Services) ändern

**Finde diese Sektion:**
```json
"services": [
  {
    "id": 1,
    "title": "Rasenpflege",
    "description": "Professionelle Rasenpflege für einen perfekt gepflegten Rasen.",
    "icon": "🌱"
  },
  ...
]
```

**Ändere die Beschreibung:**
```json
"services": [
  {
    "id": 1,
    "title": "Rasenpflege",
    "description": "Wir sorgen für den schönsten Rasen in der Stadt!",
    "icon": "🌱"
  },
  ...
]
```

---

### Kundenbewertungen (Testimonials) ändern

**Finde diese Sektion:**
```json
"testimonials": [
  {
    "text": "Sehr professionell, zuverlässig und pünktlich. Unser Garten sieht wunderbar aus!",
    "author": "Maria Müller",
    "location": "Musterstadt",
    "stars": 5
  }
]
```

**Ändere zu deinen echten Bewertungen:**
```json
"testimonials": [
  {
    "text": "Rudi hat unseren verwilderten Garten in ein Paradies verwandelt!",
    "author": "Peter Schmidt",
    "location": "Charlottenburg",
    "stars": 5
  }
]
```

---

### Farben (Design) ändern

**Finde diese Sektion:**
```json
"design": {
  "colors": {
    "greenDark": "#1B4332",
    "greenPrimary": "#2D6A4F",
    "gold": "#D4A853"
  }
}
```

**Ändere die Farb-Codes** (Hex-Farben findest du auf colorpicker.com):
```json
"design": {
  "colors": {
    "greenDark": "#0D5C2D",
    "greenPrimary": "#1E8449",
    "gold": "#F39C12"
  }
}
```

---

## Schritt 3: Speichern

1. Drücke **Ctrl+S** (Windows) oder **Cmd+S** (Mac)
2. Gehe zur Website im Browser
3. Drücke **F5** (oder Cmd+Shift+R auf Mac) um die Seite neu zu laden

**Fertig!** Deine Änderungen sind live!

---

## ⚠️ Häufige Fehler (und wie du sie vermeidest)

### Fehler 1: Anführungszeichen vergessen
```
❌ FALSCH:  "Meine Adresse
✅ RICHTIG: "Meine Adresse"
```

### Fehler 2: Komma am Ende vergessen
```
❌ FALSCH:  "email": "test@test.de"
                       "phone": "123"
✅ RICHTIG: "email": "test@test.de",
                       "phone": "123"
```

### Fehler 3: Spezielle Zeichen nicht escaped
Wenn dein Text ein **Anführungszeichen** oder **Backslash** enthält, musst du es "escapen":
```
❌ FALSCH:  "Das ist "mein" Garten"
✅ RICHTIG: "Das ist \"mein\" Garten"
```

---

## Validierung: Ist meine JSON korrekt?

Wenn etwas nicht funktioniert, überprüfe deine JSON hier:
👉 **jsonlint.com**

1. Kopiere den kompletten Inhalt von `content.json`
2. Paste auf jsonlint.com
3. Wenn es grün wird → alles OK!
4. Wenn es rot wird → es zeigt dir den Fehler

---

## Support

Wenn etwas nicht funktioniert:
1. Öffne die Browser-Konsole (F12 → Console-Tab)
2. Schaue nach roten Fehlern
3. Überprüfe deine JSON auf jsonlint.com

---

## Nächste Schritte: Bilder hinzufügen

Die Bilder kannst du später selbst hochladen — mehr dazu bald! 📸

**Viel Erfolg!** 🌱
