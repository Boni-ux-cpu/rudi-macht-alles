# Website-Inhalte ändern

So änderst du Texte, Telefonnummer und Öffnungszeiten auf der Website — ohne Programmierkenntnisse.

---

## Das Prinzip

Die Texte stehen **direkt in den Seiten-Dateien** im Ordner `website/`. Es gibt keine zentrale Datei mehr, in der alles gesammelt ist. Das klingt umständlicher, ist aber verlässlicher: Was du in der Datei siehst, steht später genau so auf der Website.

| Datei | Was drinsteht |
|---|---|
| `index.html` | Startseite: Überschrift, Leistungskarten, Zahlen, „Über uns", Ablauf, Anfrageformular |
| `leistungen.html` | Die sechs Leistungen ausführlich, FAQ |
| `galerie.html` | Die Projektfotos |
| `ueber-uns.html` | Die Geschichte des Betriebs |
| `kontakt.html` | Kontaktseite mit Formular |
| `impressum.html` | Impressum |
| `datenschutz.html` | Datenschutzerklärung |

---

## Vier Schritte

1. **Öffnen** — Datei in `website/` mit einem Text-Editor öffnen. Auf dem Mac geht TextEdit; besser ist ein Editor wie VS Code, weil er farbig hervorhebt, was Text und was Technik ist.
2. **Suchen** — mit `Cmd + F` nach dem Text suchen, den du ändern willst.
3. **Ändern und speichern** — nur den Text zwischen den spitzen Klammern anfassen, dann `Cmd + S`.
4. **Ansehen** — siehe „Vorschau" weiter unten.

---

## Die eine Regel

Text steht **zwischen** den spitzen Klammern, nicht darin.

```html
<p>Rudi kommt selbst vorbei.</p>
   └──────── das darfst du ändern ────────┘
```

Die Teile `<p>` und `</p>` sagen dem Browser, wie der Text dargestellt wird. Wenn du dort etwas löschst, verrutscht das Layout. Ändere nur, was dazwischen steht.

Kommt in deinem neuen Text eines dieser Zeichen vor, schreib es so:

| Zeichen | schreiben als |
|---|---|
| `&` | `&amp;` |
| `<` | `&lt;` |
| `>` | `&gt;` |

---

## Achtung: manches steht an mehreren Stellen

Das ist die häufigste Fehlerquelle. Wenn du eine dieser Angaben änderst, musst du **alle** Stellen erwischen — sonst steht auf einer Seite etwas anderes als auf der nächsten, und Google merkt das.

| Angabe | Wo überall |
|---|---|
| **Telefonnummer** | alle sieben Seiten (Kopf, Fuß, Kontaktbereiche), zusätzlich im Firmeneintrag oben in `index.html` |
| **E-Mail** | dieselben Stellen, dazu Impressum, Datenschutz und der Knopf „Lieber per E-Mail" in `js/brand.js` |
| **Öffnungszeiten** | `index.html` (zweimal: sichtbar und im Firmeneintrag), `kontakt.html` |
| **Leistungen** | `index.html` (die Karten) und `leistungen.html` (die ausführlichen Bereiche) |

Der Firmeneintrag oben in `index.html` sieht aus wie Programmcode und wird gern übersehen — daraus baut Google den Kasten mit Öffnungszeiten und Telefonnummer. Er beginnt mit `"@type": "LocalBusiness"`.

**Einfacher:** Sag Claude, was geändert werden soll. Dann werden alle Stellen auf einmal angepasst und geprüft.

---

## Diese Angaben sind verbindlich

Diese Sätze wurden mit Rudi abgestimmt. Sie dürfen nicht abgeschwächt oder übertrieben werden:

- „Antwort innerhalb von 24 Stunden"
- „Festpreis nach kostenloser Besichtigung"
- „Über 50 Projekte — Schwerpunkt Garten- & Landschaftsbau"

**Keine Zahlen erfinden.** Keine Kundenstimmen erfinden. Keine Orte behaupten, an denen noch nicht gearbeitet wurde. Solche Angaben sind nicht nur unfair — bei Werbeaussagen können sie abgemahnt werden.

---

## Bilder tauschen

Die Fotos liegen in `website/images/` als WebP-Dateien. Ein neues Bild einzusetzen heißt: gleiche Größe, gleiches Format, sinnvoller Dateiname — und der Alternativtext muss mitgeändert werden (`alt="..."`), sonst beschreibt er das falsche Bild.

Das ist der Punkt, an dem sich Handarbeit selten lohnt. Gib Claude die Originalfotos, dann werden Zuschnitt, Umwandlung und Einbau in einem Rutsch erledigt.

---

## Vorschau vor dem Veröffentlichen

Im Terminal:

```bash
python3 -m http.server 8030 --directory ~/Desktop/Rudi_macht_alles/website
```

Dann im Browser **http://localhost:8030** öffnen. Nach jeder Änderung mit `Cmd + Shift + R` neu laden — das erzwingt frisches Laden, sonst zeigt der Browser die alte Fassung.

Beenden mit `Ctrl + C` im Terminal.

---

## Veröffentlichen

Die Website liegt bei GitHub. Sobald Änderungen dorthin hochgeladen sind, geht sie nach 30 bis 60 Sekunden automatisch online unter **rudimachtalles.de**.

Der Upload passiert nicht von selbst — Claude erledigt das auf Zuruf und prüft danach, ob die Seite noch fehlerfrei läuft.

---

## Wenn etwas kaputt aussieht

Kein Grund zur Sorge: Jeder frühere Stand ist gespeichert und lässt sich zurückholen. Sag einfach Bescheid, was zuletzt geändert wurde — dann wird der letzte funktionierende Stand wiederhergestellt.

Was du **nicht** anfassen solltest, steht in der `README.md` unter „Finger weg". Die Kurzfassung: `website/CNAME` nicht löschen (sonst ist die Domain weg), und die Schriften in `website/fonts/` bleiben, wo sie sind.
