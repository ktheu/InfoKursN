// Lernkarten Datenbanken, wird von lernkarten/index.html geladen
// Kleine Karten zu den Aufgabentypen aus aufgaben/aufgaben.pdf, ohne Stift und Papier lösbar
// Formatierung in frage/antwort: **fett**, __unterstrichen__ (Primärschlüssel), `code`,
// Codeblock mit ``` ... ```, Tabellenzeilen | a | b |, Bild ![Beschreibung](datei.png), Zeilenumbruch mit \n

lernkarten("Datenbanken", [
  // ---------- Komponenten ----------
  {
    thema: "Komponenten",
    frage: "Aus welchen drei Komponenten besteht ein relationales Datenbanksystem?",
    antwort: "**Datenbanken**, **Datenbankmanagementsystem (DBMS)** und **Datenbankschnittstelle**"
  },
  {
    thema: "Komponenten",
    frage: "Was sind die **Datenbanken** in einem relationalen Datenbanksystem?",
    antwort: "Die in Tabellen strukturierte Sammlung der Daten."
  },
  {
    thema: "Komponenten",
    frage: "Welche Aufgabe hat das **DBMS**?",
    antwort: "Es verwaltet die Daten und kontrolliert Zugriff und Verarbeitung der Daten."
  },
  {
    thema: "Komponenten",
    frage: "Wozu dient die **Datenbankschnittstelle**?",
    antwort: "Über sie nutzen Anwender oder Anwendungsprogramme die Funktionalität des DBMS."
  },
  {
    thema: "Komponenten",
    frage: "Skizze eines Datenbanksystems: Welche Kästen stehen von oben nach unten?",
    antwort: "Anwender und Anwendungsprogramme → Datenbankschnittstelle → DBMS → Datenbanken\n![Skizze Datenbanksystem](komponenten.png)"
  },
  {
    thema: "Komponenten",
    frage: "Ein Python-Programm greift mit `sqlite3` auf `schule.db` zu.\nWelche Komponente ist `sqlite3`, welche SQLite, welche `schule.db`?",
    antwort: "`sqlite3` → Datenbankschnittstelle\nSQLite → DBMS\n`schule.db` → Datenbank"
  },

  // ---------- Begriffe ----------
  {
    thema: "Begriffe",
    frage: "| BuchID | Titel | Autor |\n| 101 | Tschick | Herrndorf |\n| 102 | Krabat | Preußler |\nWas ist eine **Entität**? Nenne ein Beispiel aus der Tabelle.",
    antwort: "Ein konkretes Objekt der realen Welt, z. B. das Buch „Tschick“."
  },
  {
    thema: "Begriffe",
    frage: "| BuchID | Titel | Autor |\n| 101 | Tschick | Herrndorf |\n| 102 | Krabat | Preußler |\nWas ist ein **Entitätstyp**? Nenne ihn für die Tabelle.",
    antwort: "Die Klasse ähnlicher Objekte, hier „Buch“."
  },
  {
    thema: "Begriffe",
    frage: "| BuchID | Titel | Autor |\n| 101 | Tschick | Herrndorf |\n| 102 | Krabat | Preußler |\nWas ist ein **Attribut**? Nenne ein Beispiel aus der Tabelle.",
    antwort: "Eine Eigenschaft eines Entitätstyps, z. B. Titel oder Autor."
  },
  {
    thema: "Begriffe",
    frage: "| BuchID | Titel | Autor |\n| 101 | Tschick | Herrndorf |\n| 102 | Krabat | Preußler |\nWas ist ein **Datensatz**? Nenne ein Beispiel aus der Tabelle.",
    antwort: "Eine Zeile der Tabelle, die alle Informationen zu einer Entität enthält, z. B. 102, Krabat, Preußler."
  },
  {
    thema: "Begriffe",
    frage: "| BuchID | Titel | Autor |\n| 101 | Tschick | Herrndorf |\n| 102 | Krabat | Preußler |\nWas ist ein **Datenfeld**? Nenne ein Beispiel aus der Tabelle.",
    antwort: "Ein einzelner Wert innerhalb eines Datensatzes, z. B. „Tschick“ oder „Preußler“."
  },
  {
    thema: "Begriffe",
    frage: "Was ist eine **Tabelle** im relationalen Modell?",
    antwort: "Die strukturierte Darstellung eines Entitätstyps in Zeilen und Spalten."
  },
  {
    thema: "Begriffe",
    frage: "| FilmID | Titel | Jahr |\n| 1 | Lola rennt | 1998 |\nIst „Titel“ ein Attribut oder ein Datenfeld? Und „Lola rennt“?",
    antwort: "„Titel“ ist ein **Attribut** (Spaltenüberschrift).\n„Lola rennt“ ist ein **Datenfeld** (einzelner Wert)."
  },
  {
    thema: "Begriffe",
    frage: "Ist „Film“ eine Entität oder ein Entitätstyp? Und der Film „Lola rennt“?",
    antwort: "„Film“ ist ein **Entitätstyp**.\n„Lola rennt“ ist eine **Entität**."
  },
  {
    thema: "Begriffe",
    frage: "Eine Fahrschule: Jeder Schüler hat eine Schülernummer, einen Namen und ein Geburtsdatum. Jeder Fahrlehrer hat eine Personalnummer und einen Namen.\n\nWelche Entitätstypen gibt es, welche Attribute haben sie?",
    antwort: "Schüler: Schülernummer, Name, Geburtsdatum\nFahrlehrer: Personalnummer, Name"
  },

  // ---------- Kardinalität ----------
  {
    thema: "Kardinalität",
    frage: "Was beschreibt eine **Kardinalität**? Welche gibt es?",
    antwort: "Wie viele Entitäten an einer konkreten Beziehung beteiligt sein können: **1:1**, **1:n**, **n:m**."
  },
  {
    thema: "Kardinalität",
    frage: "Wie bestimmst du aus einem Text die Kardinalität zwischen A und B?",
    antwort: "In **beide Richtungen** fragen: Wie viele B gehören zu einem A? Wie viele A zu einem B?\n\nbeide Male „genau ein“ → 1:1\neinmal „mehrere“ → 1:n\nbeide Male „mehrere“ → n:m"
  },
  {
    thema: "Kardinalität",
    frage: "Ein Fahrlehrer unterrichtet mehrere Schüler. Jeder Schüler hat genau einen Fahrlehrer.\n\nKardinalität?",
    antwort: "**1:n**"
  },
  {
    thema: "Kardinalität",
    frage: "Ein Mitglied besucht mehrere Kurse. Ein Kurs hat mehrere Mitglieder.\n\nKardinalität?",
    antwort: "**n:m**"
  },
  {
    thema: "Kardinalität",
    frage: "Jede Klasse hat genau einen Klassenlehrer. Jede Lehrkraft ist Klassenlehrer von höchstens einer Klasse.\n\nKardinalität?",
    antwort: "**1:1**"
  },
  {
    thema: "Kardinalität",
    frage: "Ein Kunde gibt mehrere Bestellungen auf. Jede Bestellung gehört genau einem Kunden.\n\nKardinalität?",
    antwort: "**1:n**"
  },
  {
    thema: "Kardinalität",
    frage: "Eine Bestellung enthält mehrere Produkte. Ein Produkt kann in mehreren Bestellungen enthalten sein.\n\nKardinalität?",
    antwort: "**n:m**"
  },
  {
    thema: "Kardinalität",
    frage: "Ein Buch ist immer nur an einen Leser ausgeliehen. Ein Leser kann mehrere Bücher ausleihen.\n\nKardinalität?",
    antwort: "**1:n** (Leser 1, Buch n)"
  },
  {
    thema: "Kardinalität",
    frage: "Ein Arzt behandelt mehrere Patienten. Ein Patient wird von mehreren Ärzten behandelt.\n\nKardinalität?",
    antwort: "**n:m**"
  },

  // ---------- Schlüssel ----------
  {
    thema: "Schlüssel",
    frage: "Was ist ein **Schlüssel**?",
    antwort: "Ein Attribut oder eine Attributkombination, mit der ein Datensatz eindeutig identifiziert werden kann."
  },
  {
    thema: "Schlüssel",
    frage: "Was ist ein **Primärschlüssel**?",
    antwort: "Der ausgewählte Schlüssel, der jeden Datensatz einer Tabelle eindeutig kennzeichnet."
  },
  {
    thema: "Schlüssel",
    frage: "Was ist ein **Fremdschlüssel** und wozu dient er?",
    antwort: "Ein Attribut, das auf den Primärschlüssel einer anderen Tabelle verweist. Dadurch werden Datensätze verschiedener Tabellen miteinander verknüpft."
  },
  {
    thema: "Schlüssel",
    frage: "Wann führt man einen **künstlichen Schlüssel** ein?",
    antwort: "Wenn sich kein Attribut und keine Attributkombination als Schlüssel anbietet. Meist mit dem Zusatz ID, z. B. ZimmerID."
  },
  {
    thema: "Schlüssel",
    frage: "Wie werden im Schema Primärschlüssel und Fremdschlüssel gekennzeichnet?",
    antwort: "Primärschlüssel **unterstrichen**, Fremdschlüssel mit **Pfeil nach oben**:\nKurs(__KursID__, Bezeichnung, LehrerID↑)"
  },
  {
    thema: "Schlüssel",
    frage: "| KundenID | Name | Wohnort |\n| 101 | Anna Meier | Stuttgart |\n| 102 | Max Schulz | Böblingen |\nWelches Attribut ist Primärschlüssel? Begründe.",
    antwort: "**KundenID**: Jede KundenID kommt nur einmal vor und identifiziert den Kunden eindeutig. Name und Wohnort können bei mehreren Kunden gleich sein."
  },
  {
    thema: "Schlüssel",
    frage: "| Kennzeichen | Marke | Farbe |\n| MS-AB 123 | VW | rot |\n| BOR-K 55 | VW | blau |\nWelches Attribut ist Primärschlüssel? Begründe.",
    antwort: "**Kennzeichen**: Jedes Kennzeichen wird nur einmal vergeben. Marke und Farbe kommen mehrfach vor."
  },
  {
    thema: "Schlüssel",
    frage: "| Hotelname | Zimmernummer | Betten |\n| Sonne | 101 | 2 |\n| Sonne | 102 | 1 |\n| Adler | 101 | 3 |\nKein Attribut allein ist eindeutig. Welche zwei Möglichkeiten gibt es für einen Primärschlüssel?",
    antwort: "1. die Kombination (__Hotelname__, __Zimmernummer__)\n2. ein künstlicher Schlüssel, z. B. __ZimmerID__"
  },
  {
    thema: "Schlüssel",
    frage: "Schueler(SchuelerID, Name)\nKurs(KursID, Kursname, SchuelerID)\n\nWelches Attribut ist der Fremdschlüssel?",
    antwort: "**SchuelerID** in der Tabelle Kurs. Es verweist auf den Primärschlüssel der Tabelle Schueler."
  },
  {
    thema: "Schlüssel",
    frage: "Mitarbeiter(__MID__, Name, AbtID↑)\n\nWorauf verweist AbtID und was wird dadurch erreicht?",
    antwort: "Auf den Primärschlüssel der Tabelle Abteilung. So wird jeder Mitarbeiter mit seiner Abteilung verknüpft."
  },
  {
    thema: "Schlüssel",
    frage: "Kapitel(__KID__, Überschrift, BID↑)\n\nWas bedeutet BID↑ in dieser Tabelle?",
    antwort: "BID ist ein **Fremdschlüssel**. Er verweist auf das Buch, zu dem das Kapitel gehört."
  },

  // ---------- ER-Diagramm ----------
  {
    thema: "ER-Diagramm",
    frage: "Welche Form haben im ER-Diagramm\nEntitätstyp, Attribut, Beziehung?",
    antwort: "Entitätstyp → **Rechteck**\nAttribut → **Ellipse**\nBeziehung → **Raute**"
  },
  {
    thema: "ER-Diagramm",
    frage: "Wie kennzeichnet man im ER-Diagramm den Primärschlüssel?",
    antwort: "Das Attribut wird **unterstrichen**."
  },
  {
    thema: "ER-Diagramm",
    frage: "„Ein Kunde gibt mehrere Bestellungen auf.“\nWo stehen im ER-Diagramm die 1 und das n?",
    antwort: "Kunde —**1**— gibt auf —**n**— Bestellung\n\nDie 1 an der Linie zu Kunde, das n an der Linie zu Bestellung."
  },
  {
    thema: "ER-Diagramm",
    frage: "Werden Fremdschlüssel im ER-Diagramm als Ellipse eingezeichnet?",
    antwort: "**Nein.** Die Verknüpfung wird durch die Beziehung (Raute) dargestellt."
  },
  {
    thema: "ER-Diagramm",
    frage: "![ER-Diagramm Fitnessstudio](er_fitnessstudio.png)\nWelche Kardinalität hat „besucht“ und was bedeutet sie?",
    antwort: "**n:m**: Ein Mitglied besucht mehrere Kurse, ein Kurs wird von mehreren Mitgliedern besucht."
  },
  {
    thema: "ER-Diagramm",
    frage: "![ER-Diagramm Online-Shop](er_onlineshop.png)\nWelche Kardinalitäten haben „gibt auf“ und „enthält“?",
    antwort: "gibt auf: **1:n** (ein Kunde, mehrere Bestellungen)\nenthält: **n:m** (Bestellungen und Produkte)"
  },
  {
    thema: "ER-Diagramm",
    frage: "![ER-Diagramm Buch Kapitel Autor](er_buch_kapitel_autor.png)\nWie viele Autoren hat ein Buch in diesem Modell? Zu wie vielen Büchern gehört ein Kapitel?",
    antwort: "Ein Buch hat **genau einen** Autor.\nEin Kapitel gehört zu **genau einem** Buch."
  },
  {
    thema: "ER-Diagramm",
    frage: "Kunde(__KundenID__, Name, Ort)\nBestellung(__BestellNr__, Datum, KundenID↑)\n\nWelche Kardinalität hat die Beziehung im ER-Diagramm?",
    antwort: "Kunde —**1**— gibt auf —**n**— Bestellung\n\nDer Fremdschlüssel steht in Bestellung, dort ist die n-Seite.\n![ER-Diagramm Kunde Bestellung](er_kunde_bestellung.png)"
  },
  {
    thema: "ER-Diagramm",
    frage: "Lehrer(__LID__, Name)\nKlasse(__KlassenID__, Bezeichnung, LID↑)\n\nWelche Kardinalität hat die Beziehung zwischen Lehrer und Klasse?",
    antwort: "Lehrer —**1**— leitet —**n**— Klasse"
  },
  {
    thema: "ER-Diagramm",
    frage: "Mitglied(__MID__, Name, …)\nSportart(__SpID__, Bezeichnung)\nbetreibt_Sportart(MID↑, SpID↑)\n\nWird betreibt_Sportart im ER-Diagramm ein Rechteck oder eine Raute?",
    antwort: "Eine **Raute**: Die Tabelle besteht nur aus Fremdschlüsseln und stellt die **n:m-Beziehung** zwischen Mitglied und Sportart dar."
  },
  {
    thema: "ER-Diagramm",
    frage: "![ER-Diagramm Sportverein](er_sportverein.png)\nZu welcher Raute gehört der Fremdschlüssel PLZ in Mitglied?",
    antwort: "Zu „**wohnt in**“: Mitglied —n— wohnt in —1— Ort"
  },
  {
    thema: "ER-Diagramm",
    frage: "spielt_in(__FID↑__, __SID↑__, Rolle)\n\nWo wird das Attribut Rolle im ER-Diagramm eingezeichnet?",
    antwort: "Als Ellipse an der **Raute** „spielt in“, denn Rolle gehört zur Beziehung zwischen Film und Schauspieler."
  },

  // ---------- Normalformen ----------
  {
    thema: "Normalformen",
    frage: "Wann liegt eine Datenbank in der **1. Normalform** vor?",
    antwort: "Wenn alle Attribute nur **atomare** Werte enthalten: In jeder Zelle steht genau ein Wert, keine Listen."
  },
  {
    thema: "Normalformen",
    frage: "Wann liegt eine Datenbank in der **2. Normalform** vor?",
    antwort: "1NF und jedes Nicht-Schlüsselattribut hängt **vom gesamten Schlüssel** ab, nicht nur von einem Teil."
  },
  {
    thema: "Normalformen",
    frage: "Wann liegt eine Datenbank in der **3. Normalform** vor?",
    antwort: "2NF und **kein Nicht-Schlüsselattribut hängt von einem anderen Nicht-Schlüsselattribut** ab."
  },
  {
    thema: "Normalformen",
    frage: "Kann eine Tabelle in 1NF, deren Primärschlüssel aus **einem** Attribut besteht, die 2NF verletzen?",
    antwort: "**Nein.** Die 2NF kann nur verletzt sein, wenn der Schlüssel aus mehreren Attributen besteht."
  },
  {
    thema: "Normalformen",
    frage: "| Name | Telefonnummern |\n| Anna Meier | 030-123456, 030-654321 |\nWelche Normalform ist verletzt? Wie behebt man das?",
    antwort: "Die **1NF**: Telefonnummern ist nicht atomar.\nJede Telefonnummer kommt in eine eigene Zeile."
  },
  {
    thema: "Normalformen",
    frage: "Teilnahme(__KursID__, __SchülerID__, SchülerName)\n\nWelche Normalform ist verletzt? Warum?",
    antwort: "Die **2NF**: SchülerName hängt nur von SchülerID ab, also nur von einem Teil des Schlüssels."
  },
  {
    thema: "Normalformen",
    frage: "Teilnahme(__KursID__, __SchülerID__, SchülerName) verletzt die 2NF.\n\nIn welche zwei Tabellen teilt man sie auf?",
    antwort: "Schueler(__SchülerID__, SchülerName)\nTeilnahme(__KursID__, __SchülerID↑__)"
  },
  {
    thema: "Normalformen",
    frage: "Mitarbeiter(__MitarbeiterID__, Name, AbteilungsID, AbteilungsName)\n\nWelche Normalform ist verletzt? Warum?",
    antwort: "Die **3NF**: AbteilungsName hängt von AbteilungsID ab, also von einem Nicht-Schlüsselattribut."
  },
  {
    thema: "Normalformen",
    frage: "Mitarbeiter(__MitarbeiterID__, Name, AbteilungsID, AbteilungsName) verletzt die 3NF.\n\nIn welche zwei Tabellen teilt man sie auf?",
    antwort: "Mitarbeiter(__MitarbeiterID__, Name, AbteilungsID↑)\nAbteilung(__AbteilungsID__, AbteilungsName)"
  },
  {
    thema: "Normalformen",
    frage: "Ausleihe(__LeserNr__, __ISBN__, Datum, Titel)\n\nWelche Normalform ist verletzt? Warum?",
    antwort: "Die **2NF**: Titel hängt nur von ISBN ab, also nur von einem Teil des Schlüssels."
  },
  {
    thema: "Normalformen",
    frage: "Schueler(__SchuelerID__, Name, PLZ, Ort)\n\nWelche Normalform ist verletzt? Wie teilt man auf?",
    antwort: "Die **3NF**: Ort hängt von PLZ ab.\nSchueler(__SchuelerID__, Name, PLZ↑)\nOrt(__PLZ__, Ort)"
  },
  {
    thema: "Normalformen",
    frage: "Was ist **Redundanz** und warum ist sie gefährlich?",
    antwort: "Dieselbe Information ist mehrfach gespeichert. Wird sie nur an einer Stelle geändert, sind die Daten **inkonsistent** (widersprüchlich)."
  },
  {
    thema: "Normalformen",
    frage: "| SchuelerID | Name | Klasse | Klassenlehrer |\n| 1 | Anna | 10A | Müller |\n| 2 | Max | 10A | Müller |\n| 3 | Lea | 10B | Schmidt |\nWelche Information ist redundant gespeichert?",
    antwort: "Dass Herr Müller Klassenlehrer der 10A ist, steht in mehreren Datensätzen."
  },
  {
    thema: "Normalformen",
    frage: "Schueler(__SchuelerID__, Name, Klasse, Klassenlehrer)\n\nGib ein Schema in 3NF an.",
    antwort: "Schueler(__SchuelerID__, Name, KlassenID↑)\nKlasse(__KlassenID__, Klassenname, Klassenlehrer)"
  },
  {
    thema: "Normalformen",
    frage: "Spieler(__SpielerID__, Name, Verein, Vereinsort)\n\nGib ein Schema in 3NF an.",
    antwort: "Spieler(__SpielerID__, Name, VereinID↑)\nVerein(__VereinID__, Vereinsname, Vereinsort)"
  },
  {
    thema: "Normalformen",
    frage: "Statt Kapitel, Buch und Autor soll es nur eine Tabelle geben:\nKapitel(KID, Überschrift, Titel, Erscheinungsjahr, Name, Geburtsjahr)\n\nWarum ist das keine gute Idee?",
    antwort: "Bei jedem Kapitel werden Buch- und Autorendaten erneut gespeichert: **Redundanz**. Das kostet Speicher und führt bei Änderungen leicht zu **Inkonsistenzen**."
  },

  // ---------- Schema entwerfen ----------
  {
    thema: "Schema entwerfen",
    frage: "Wie setzt man eine **1:n-Beziehung** im Schema um?",
    antwort: "Keine neue Tabelle. Die Tabelle auf der **n-Seite** bekommt den Primärschlüssel der anderen als Fremdschlüssel."
  },
  {
    thema: "Schema entwerfen",
    frage: "Wie setzt man eine **n:m-Beziehung** im Schema um?",
    antwort: "Eine **neue Tabelle** mit den Primärschlüsseln beider Tabellen als Fremdschlüssel. Zusammen bilden sie den Primärschlüssel."
  },
  {
    thema: "Schema entwerfen",
    frage: "Wie setzt man eine **1:1-Beziehung** im Schema um?",
    antwort: "Eine der beiden Tabellen bekommt den Primärschlüssel der anderen als Fremdschlüssel."
  },
  {
    thema: "Schema entwerfen",
    frage: "Ein Verlag verlegt mehrere Bücher, jedes Buch hat genau einen Verlag.\n\nIn welche Tabelle kommt der Fremdschlüssel?",
    antwort: "In **Buch** (n-Seite):\nBuch(__ISBN__, Titel, VID↑)"
  },
  {
    thema: "Schema entwerfen",
    frage: "Bestellung —n— enthält —m— Produkt\n\nWelche Tabelle braucht man für „enthält“?",
    antwort: "enthaelt(__BestellID↑__, __ProduktID↑__)"
  },
  {
    thema: "Schema entwerfen",
    frage: "Buch(__BID__, Titel, AID↑, Erscheinungsjahr)\nAutor(__AID__, Name)\n\nEin Buch soll mehrere Autoren haben können. Was ändert sich?",
    antwort: "AID wird aus Buch entfernt. Neue Tabelle:\nBuch_Autor(__BID↑__, __AID↑__)"
  },
  {
    thema: "Schema entwerfen",
    frage: "Schueler(__SID__, Name)\nKurs(__KID__, Bezeichnung)\n\nSchüler belegen mehrere Kurse und bekommen pro Kurs eine Note. Welche Tabelle kommt dazu?",
    antwort: "belegt(__SID↑__, __KID↑__, Note)\n\nDie Note gehört zur Kombination aus Schüler und Kurs."
  },
  {
    thema: "Schema entwerfen",
    frage: "Mitglied(__MID__, Name, …)\nSportart(__SpID__, Bezeichnung)\n\nManche Mitglieder sind Trainer einer oder mehrerer Sportarten und bekommen eine Vergütung. Welche Tabelle kommt dazu?",
    antwort: "Trainer(__TID__, MID↑, Vergütung, SpID↑)"
  },
  {
    thema: "Schema entwerfen",
    frage: "Schueler(__SNr__, Name)\nFahrlehrer(__PNr__, Name)\n\nFahrstunden mit Datum sollen gespeichert werden. Jede Fahrstunde hat einen Schüler und einen Fahrlehrer. Welche Tabelle kommt dazu?",
    antwort: "Fahrstunde(__FID__, Datum, SNr↑, PNr↑)"
  },

  // ---------- SQLite ----------
  {
    thema: "SQLite",
    frage: "Wie stellt man in Python eine Verbindung zur Datenbank `schule.db` her?",
    antwort: "```\nimport sqlite3\ncon = sqlite3.connect(\"schule.db\")\n```"
  },
  {
    thema: "SQLite",
    frage: "Wozu braucht man den **Cursor**?",
    antwort: "Über den Cursor übermitteln wir die SQL-Anweisungen:\n```\ncur = con.cursor()\ncur.execute(\"SELECT * FROM Schueler\")\n```"
  },
  {
    thema: "SQLite",
    frage: "Mit welchem SQL-Befehl\nlegt man eine Tabelle an, fügt Daten ein, fragt Daten ab, löscht Daten?",
    antwort: "`CREATE TABLE`\n`INSERT INTO`\n`SELECT`\n`DELETE FROM`"
  },
  {
    thema: "SQLite",
    frage: "Wann braucht man `con.commit()`?",
    antwort: "Wenn die Datenbank **verändert** wird. Ohne `commit()` gehen die Änderungen beim Schließen verloren."
  },
  {
    thema: "SQLite",
    frage: "Was liefert `cur.fetchall()` nach einer Abfrage?",
    antwort: "Eine **Liste von Tupeln**, ein Tupel pro Datensatz."
  },

  // ---------- SQL-Abfragen ----------
  {
    thema: "SQL-Abfragen",
    frage: "Schueler(__SchuelerID__, Name, Klasse)\n\nGib alle Daten aller Schüler aus.",
    antwort: "```\nSELECT * FROM Schueler;\n```"
  },
  {
    thema: "SQL-Abfragen",
    frage: "Schueler(__SchuelerID__, Name, Klasse)\n\nGib nur die Namen aller Schüler aus.",
    antwort: "```\nSELECT Name FROM Schueler;\n```"
  },
  {
    thema: "SQL-Abfragen",
    frage: "Schueler(__SchuelerID__, Name, Klasse)\n\nGib alle Schüler der Klasse 10A aus.",
    antwort: "```\nSELECT * FROM Schueler\nWHERE Klasse = '10A';\n```"
  },
  {
    thema: "SQL-Abfragen",
    frage: "Schueler(__SchuelerID__, Name, Klasse)\n\nGib die Namen aller Schüler aus, die **nicht** in der 10A sind.",
    antwort: "```\nSELECT Name FROM Schueler\nWHERE Klasse <> '10A';\n```"
  },
  {
    thema: "SQL-Abfragen",
    frage: "Schueler(__SchuelerID__, Name, Klasse)\n\nGib die Namen aller Schüler aus, deren Name mit L beginnt.",
    antwort: "```\nSELECT Name FROM Schueler\nWHERE Name LIKE 'L%';\n```"
  },
  {
    thema: "SQL-Abfragen",
    frage: "Produkt(__ProduktID__, Produktname, Preis)\n\nGib alle Produkte aus, die weniger als 30 kosten.",
    antwort: "```\nSELECT * FROM Produkt\nWHERE Preis < 30;\n```"
  },
  {
    thema: "SQL-Abfragen",
    frage: "Produkt(__ProduktID__, Produktname, Preis)\n\nGib Name und Preis aller Produkte aus, das teuerste zuerst.",
    antwort: "```\nSELECT Produktname, Preis FROM Produkt\nORDER BY Preis DESC;\n```"
  },
  {
    thema: "SQL-Abfragen",
    frage: "Autor(__AID__, Name, Geburtsjahr)\n\nGib die Namen aller Autoren aus, die 1970 geboren wurden.",
    antwort: "```\nSELECT Name FROM Autor\nWHERE Geburtsjahr = 1970;\n```"
  },
  {
    thema: "SQL-Abfragen",
    frage: "Was bedeuten `ASC` und `DESC` bei `ORDER BY`?",
    antwort: "`ASC` aufsteigend (Standard), `DESC` absteigend"
  },
  {
    thema: "SQL-Abfragen",
    frage: "Finde die zwei Fehler:\n```\nSELECT Name FROM Schueler\nWHERE Klasse == 10A\n```",
    antwort: "1. Für „gleich“ steht in SQL ein **einfaches** `=`.\n2. Texte stehen in **Hochkommata**: `'10A'`"
  },

  // ---------- SQL-Verbund ----------
  {
    thema: "SQL-Verbund",
    frage: "Lehrer(__LehrerID__, Name)\nKurs(__KursID__, Bezeichnung, LehrerID↑)\n\nWie lautet die Verknüpfungsbedingung?",
    antwort: "```\nLehrer.LehrerID = Kurs.LehrerID\n```\nFremdschlüssel = Primärschlüssel"
  },
  {
    thema: "SQL-Verbund",
    frage: "Wann muss man den Tabellennamen vor den Spaltennamen schreiben, z. B. `Kurs.LehrerID`?",
    antwort: "Wenn der Spaltenname in mehreren Tabellen der Abfrage vorkommt."
  },
  {
    thema: "SQL-Verbund",
    frage: "Was liefert `SELECT * FROM Lehrer, Kurs` **ohne** Verknüpfungsbedingung?",
    antwort: "**Alle Kombinationen** aus jeder Lehrkraft und jedem Kurs, auch die, die nicht zusammengehören."
  },
  {
    thema: "SQL-Verbund",
    frage: "Lehrer(__LehrerID__, Name)\nKurs(__KursID__, Bezeichnung, LehrerID↑)\n\nGib die Namen der Lehrkräfte und ihre Kurse aus.",
    antwort: "```\nSELECT Lehrer.Name, Kurs.Bezeichnung\nFROM Lehrer, Kurs\nWHERE Lehrer.LehrerID = Kurs.LehrerID;\n```"
  },
  {
    thema: "SQL-Verbund",
    frage: "Mitarbeiter(__MID__, Name, AbtID↑)\nAbteilung(__AbtID__, Bezeichnung)\n\nGib die Namen aller Mitarbeiter der Abteilung 'IT' aus.",
    antwort: "```\nSELECT Name FROM Mitarbeiter, Abteilung\nWHERE Mitarbeiter.AbtID = Abteilung.AbtID\n  AND Bezeichnung = 'IT';\n```"
  },
  {
    thema: "SQL-Verbund",
    frage: "Buch(__BID__, Titel, AID↑, Erscheinungsjahr)\nAutor(__AID__, Name)\n\nErgänze die WHERE-Zeile für alle Bücher von J. K. Rowling:\n```\nSELECT Titel, Erscheinungsjahr\nFROM Buch, Autor\nWHERE ...\nORDER BY Erscheinungsjahr\n```",
    antwort: "```\nWHERE Buch.AID = Autor.AID\n  AND Name = 'J. K. Rowling'\n```"
  },
  {
    thema: "SQL-Verbund",
    frage: "Kapitel(__KID__, Überschrift, BID↑)\nBuch(__BID__, Titel)\n\nGib die Überschriften aller Kapitel des Buchs 'Krabat' aus.",
    antwort: "```\nSELECT Überschrift FROM Kapitel, Buch\nWHERE Kapitel.BID = Buch.BID\n  AND Titel = 'Krabat';\n```"
  },
  {
    thema: "SQL-Verbund",
    frage: "Wie viele Verknüpfungsbedingungen braucht man bei einer Abfrage über **drei** Tabellen?",
    antwort: "**Zwei**, eine für jedes Paar verbundener Tabellen."
  },
  {
    thema: "SQL-Verbund",
    frage: "Buch(__BID__, Titel)\nBuch_Autor(__BID↑__, __AID↑__)\nAutor(__AID__, Name)\n\nGesucht: Titel aller Bücher von Sebastian Fitzek.\nWelche Tabellen stehen hinter FROM?",
    antwort: "**Buch, Buch_Autor, Autor**\n\nAuch Buch_Autor, obwohl daraus nichts ausgegeben wird: Sie verbindet Buch und Autor."
  },
  {
    thema: "SQL-Verbund",
    frage: "Buch(__BID__, Titel)\nBuch_Autor(__BID↑__, __AID↑__)\nAutor(__AID__, Name)\n\nWie lauten die beiden Verknüpfungsbedingungen?",
    antwort: "```\nBuch.BID = Buch_Autor.BID\nAND Buch_Autor.AID = Autor.AID\n```"
  },
  {
    thema: "SQL-Verbund",
    frage: "Schueler(__SID__, Name)\nbelegt(__SID↑__, __KID↑__)\nKurs(__KID__, Bezeichnung)\n\nErgänze die WHERE-Bedingungen für alle Schüler im Kurs 'Informatik':\n```\nSELECT Name FROM Schueler, belegt, Kurs\nWHERE ...\n```",
    antwort: "```\nWHERE Schueler.SID = belegt.SID\n  AND belegt.KID = Kurs.KID\n  AND Bezeichnung = 'Informatik'\n```"
  },

  // ---------- SQL: Daten ändern ----------
  {
    thema: "SQL: Daten ändern",
    frage: "Schueler(__SchuelerID__, Name, Klasse)\n\nFüge Lea Weber mit der SchuelerID 3 in die Klasse 10A ein.",
    antwort: "```\nINSERT INTO Schueler\nVALUES (3, 'Lea Weber', '10A');\n```"
  },
  {
    thema: "SQL: Daten ändern",
    frage: "In welcher Reihenfolge stehen die Werte bei `INSERT INTO … VALUES (…)`?",
    antwort: "In der Reihenfolge der Spalten der Tabelle."
  },
  {
    thema: "SQL: Daten ändern",
    frage: "Produkt(__ProduktID__, Produktname, Preis)\n\nFüge das Produkt Monitor mit der ProduktID 3 und dem Preis 150 ein.",
    antwort: "```\nINSERT INTO Produkt\nVALUES (3, 'Monitor', 150);\n```"
  },
  {
    thema: "SQL: Daten ändern",
    frage: "Produkt(__ProduktID__, Produktname, Preis)\n\nDer Preis des Produkts mit der ProduktID 2 soll 55 betragen.",
    antwort: "```\nUPDATE Produkt\nSET Preis = 55\nWHERE ProduktID = 2;\n```"
  },
  {
    thema: "SQL: Daten ändern",
    frage: "Schueler(__SchuelerID__, Name, Klasse)\n\nAlle Schüler der 10B kommen in die 11B.",
    antwort: "```\nUPDATE Schueler\nSET Klasse = '11B'\nWHERE Klasse = '10B';\n```"
  },
  {
    thema: "SQL: Daten ändern",
    frage: "Kunde(__KundenID__, Name)\n\nLösche den Kunden Max Schulz mit der KundenID 2.",
    antwort: "```\nDELETE FROM Kunde\nWHERE KundenID = 2;\n```"
  },
  {
    thema: "SQL: Daten ändern",
    frage: "Warum schreibt man beim Löschen besser `WHERE KundenID = 2` als `WHERE Name = 'Max Schulz'`?",
    antwort: "Der Name kann mehrfach vorkommen. Dann würden mehrere Kunden gelöscht. Der Primärschlüssel ist eindeutig."
  },
  {
    thema: "SQL: Daten ändern",
    frage: "Produkt(__ProduktID__, Produktname, Preis)\n\nLösche alle Produkte, die weniger als 10 kosten.",
    antwort: "```\nDELETE FROM Produkt\nWHERE Preis < 10;\n```"
  },
  {
    thema: "SQL: Daten ändern",
    frage: "Was passiert bei `UPDATE` oder `DELETE` ohne `WHERE`?",
    antwort: "Es werden **alle** Datensätze der Tabelle geändert bzw. gelöscht."
  }
]);
