# Website-Inhalte bearbeiten

So änderst du Texte, Telefonnummer, Bewertungen und mehr auf der Website — ohne Code anzufassen.

---

## Das Prinzip

Alle änderbaren Inhalte stehen in einer einzigen Datei:

**`website/content.json`**

Die HTML-Seiten lesen diese Datei automatisch und zeigen den Inhalt an. Du änderst nur `content.json` — die Website aktualisiert sich überall gleichzeitig.

---

## Der Ablauf (4 Schritte)

1. **Öffnen**: `website/content.json` mit einem Text-Editor (VSCode oder TextEdit)
2. **Ändern**: gewünschten Wert anpassen (siehe Regeln unten)
3. **Speichern**: `Cmd+S`
4. **Im Browser aktualisieren**: `Cmd+Shift+R`

Fertig.

---

## Was du ändern kannst

| Was | Wo in `content.json` |
|-----|----------------------|
| Firmenname, Tagline, Region | `company` |
| Telefon, E-Mail, Öffnungszeiten | `contact` |
| Hero-Headline + CTA-Texte | `hero` |
| Zahlen (Jahre Erfahrung, Projekte) | `stats` |
| Leistungen (Titel, Beschreibung) | `services` |
| Ablauf-Schritte (Anfrage, Beratung…) | `process.steps` |
| Über-Text | `about` |
| Kundenbewertungen | `testimonials` |
| Call-to-Action am Seitenende | `cta` |
| Farben und Schriften | `design` |
| SEO-Metadaten | `seo` |

---

## Regeln beim Editieren

**Erlaubt**
- Text zwischen Anführungszeichen ändern: `"alter Text"` → `"neuer Text"`
- Zahlen ändern: `"15+ Jahre"` → `"20+ Jahre"`
- Neue Bewertung hinzufügen (siehe Beispiel unten)

**Nicht erlaubt**
- Anführungszeichen weglassen: `"Text"` nicht zu `Text` machen
- Kommas am Zeilenende entfernen
- Geschweifte `{` `}` oder eckige Klammern `[` `]` verändern

**Goldene Regel**: Wenn du dir unsicher bist ob es noch korrekt ist, kopier den Inhalt auf [jsonlint.com](https://jsonlint.com) — wenn die Seite grün wird, ist alles OK.

---

## Beispiele

### Telefonnummer ändern

Finden in `content.json`:
```json
"contact": {
  "phone": "0176 311 47867",
  ...
}
```

Ändern zu:
```json
"contact": {
  "phone": "089 12345678",
  ...
}
```

Die neue Nummer erscheint danach überall auf der Website (Hero, Kontakt, Footer).

---

### Hero-Headline ändern

Finden:
```json
"hero": {
  "headline": "Gärten, die begeistern.",
  "subheadline": "Professionelle Gartengestaltung und -pflege mit Leidenschaft."
}
```

Ändern zu:
```json
"hero": {
  "headline": "Ihr Garten. Unsere Leidenschaft.",
  "subheadline": "Seit 2009 in München und Umgebung."
}
```

---

### Neue Kundenbewertung hinzufügen

In `testimonials` ein neues Objekt am Ende des Arrays anhängen (mit Komma davor):

```json
"testimonials": [
  { ... bestehende Bewertung ... },
  {
    "text": "Rudi hat unseren Garten in ein Paradies verwandelt.",
    "author": "Peter Schmidt",
    "location": "Schwabing",
    "stars": 5
  }
]
```

---

## Wenn etwas nicht funktioniert

1. **JSON validieren**: Inhalt von `content.json` auf [jsonlint.com](https://jsonlint.com) einfügen
2. **Browser-Konsole öffnen**: `Cmd+Option+I` → Tab „Console" → nach roten Fehlern schauen
3. **Hart-Refresh**: `Cmd+Shift+R` (lädt ohne Cache neu)

Die häufigsten Fehler:
- Vergessenes Komma am Ende einer Zeile (außer bei der letzten Zeile vor `}` oder `]`)
- Nicht geschlossene Anführungszeichen
- Anführungszeichen IM Text — die müssen mit Backslash escaped werden: `"Das ist \"mein\" Garten"`

---

## Was du NICHT anfassen musst

Diese Dateien bleiben unangetastet:

- `website/css/` — das Design (kümmert sich darum, wie es aussieht)
- `website/js/` — die Logik (sorgt dafür, dass content.json gelesen wird)
- Alle `*.html` Dateien — die Struktur (lädt automatisch aus content.json)

Wenn an diesen Dateien etwas geändert werden soll, machen wir das gemeinsam.
