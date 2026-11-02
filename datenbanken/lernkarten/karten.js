// Lernkarten Datenbanken, wird von lernkarten/index.html geladen
// Klausurvorbereitung: Karten zu den Aufgaben in aufgaben/aufgaben.pdf
// quelle: "Aufgabe n" = Originalaufgabe, "Variante zu Aufgabe n" = ähnliche Aufgabe, "Vorgehen …" = Lösungsweg
// Formatierung in frage/antwort: **fett**, __unterstrichen__ (Primärschlüssel), `code`,
// Codeblock mit ``` ... ```, Tabellenzeilen | a | b |, Bild ![Beschreibung](datei.png), Zeilenumbruch mit \n

lernkarten("Datenbanken", [
  // ---------- Komponenten (Aufgabe 1) ----------
  {
    thema: "Komponenten",
    quelle: "Aufgabe 1",
    frage: "Nenne die Komponenten eines relationalen Datenbanksystems und beschreibe deren Funktion. Skizziere ein relationales Datenbanksystem und beschrifte die Komponenten.",
    antwort: "Ein relationales Datenbanksystem besteht aus einer in Tabellen strukturierten Sammlung von Daten (**Datenbanken**) und einer Software zur Verwaltung dieser Daten, dem **Datenbankmanagementsystem (DBMS)**. Das DBMS kontrolliert Zugriff und Verarbeitung der Daten. Anwender oder Anwendungsprogramme nutzen die Funktionalität des DBMS über eine **Datenbankschnittstelle**.\n![Skizze Datenbanksystem](komponenten.png)"
  },
  {
    thema: "Komponenten",
    quelle: "Vorgehen zu Aufgabe 1",
    frage: "Was muss in der Skizze eines Datenbanksystems stehen? Nenne die Kästen von oben nach unten.",
    antwort: "1. **Anwender** und **Anwendungsprogramme** (oben, außerhalb)\n2. **Datenbankschnittstelle**\n3. **DBMS**\n4. **Datenbanken** (Zylinder)\n\nPfeile von oben nach unten. Schnittstelle, DBMS und Datenbanken bilden zusammen das Datenbanksystem (umrandet)."
  },
  {
    thema: "Komponenten",
    quelle: "Variante zu Aufgabe 1",
    frage: "Ein Python-Programm fragt mit `sqlite3` Daten aus der Datei `lkwahl.db` ab.\n\nOrdne die beteiligten Teile den Komponenten eines Datenbanksystems zu.",
    antwort: "Python-Programm → **Anwendungsprogramm**\n`sqlite3` → **Datenbankschnittstelle**\nSQLite → **DBMS**\n`lkwahl.db` → **Datenbank**"
  },

  // ---------- Begriffe (Aufgaben 2, 3) ----------
  {
    thema: "Begriffe",
    quelle: "Aufgabe 2",
    frage: "In einer Schulbibliothek werden Bücher verwaltet:\n| BuchID | Titel | Autor | Erscheinungsjahr |\n| 101 | Die Physiker | Dürrenmatt | 1962 |\n| 102 | Tschick | Herrndorf | 2010 |\n| 103 | Krabat | Preußler | 1971 |\nErläutere die Begriffe **Entität**, **Entitätstyp**, **Attribut**, **Tabelle**, **Datensatz** und **Datenfeld** anhand des Beispiels.",
    antwort: "**Entität:** ein konkretes Objekt der realen Welt, z. B. das Buch „Tschick“\n**Entitätstyp:** die Klasse ähnlicher Objekte, hier „Buch“\n**Attribut:** eine Eigenschaft eines Entitätstyps, z. B. Titel oder Autor\n**Tabelle:** die strukturierte Darstellung eines Entitätstyps in Zeilen und Spalten\n**Datensatz:** eine Zeile der Tabelle, die alle Informationen zu einer Entität enthält, z. B. 102 | Tschick | Herrndorf | 2010\n**Datenfeld:** ein einzelner Wert innerhalb eines Datensatzes, z. B. „Tschick“ oder „2010“"
  },
  {
    thema: "Begriffe",
    quelle: "Variante zu Aufgabe 2",
    frage: "Ein Kino verwaltet seine Filme:\n| FilmID | Titel | Regie | Jahr |\n| 1 | Lola rennt | Tykwer | 1998 |\n| 2 | Good Bye, Lenin! | Becker | 2003 |\nErläutere **Entität**, **Entitätstyp**, **Attribut**, **Datensatz** und **Datenfeld** anhand des Beispiels.",
    antwort: "**Entität:** ein konkreter Film, z. B. „Lola rennt“\n**Entitätstyp:** „Film“\n**Attribut:** eine Eigenschaft, z. B. Titel, Regie oder Jahr\n**Datensatz:** eine Zeile, z. B. 2 | Good Bye, Lenin! | Becker | 2003\n**Datenfeld:** ein einzelner Wert, z. B. „Tykwer“ oder „1998“"
  },
  {
    thema: "Begriffe",
    quelle: "Vorgehen zu Aufgabe 2",
    frage: "Worauf musst du achten, wenn du Begriffe „anhand des Beispiels“ erläutern sollst?",
    antwort: "Zu **jedem** Begriff gehören zwei Teile:\n1. die allgemeine Erklärung\n2. ein konkretes Beispiel aus der gegebenen Tabelle\n\nNur die Definition oder nur das Beispiel reicht nicht."
  },
  {
    thema: "Begriffe",
    quelle: "Aufgabe 3",
    frage: "Eine Fahrschule verwaltet Informationen über Schüler und Fahrlehrer.\n- Jeder Schüler besitzt eine Schülernummer, einen Namen und ein Geburtsdatum.\n- Jeder Fahrlehrer besitzt eine Personalnummer und einen Namen.\n- Ein Fahrlehrer unterrichtet mehrere Schüler.\n- Jeder Schüler wird genau einem Fahrlehrer zugeordnet.\n\nBestimme die Entitätstypen und ihre Attribute. Beschreibe die Beziehung zwischen Schüler und Fahrlehrer und gib die Kardinalität an.",
    antwort: "**Entitätstypen:**\nSchüler – Attribute: Schülernummer, Name, Geburtsdatum\nFahrlehrer – Attribute: Personalnummer, Name\n\n**Beziehung:** Ein Fahrlehrer unterrichtet Schüler.\n\n**Kardinalität:** 1:n\nEin Fahrlehrer kann mehrere Schüler unterrichten, jeder Schüler hat jedoch genau einen Fahrlehrer."
  },
  {
    thema: "Begriffe",
    quelle: "Variante zu Aufgabe 3",
    frage: "Eine Bibliothek verwaltet Leser und Bücher.\n- Jeder Leser hat eine Lesernummer und einen Namen.\n- Jedes Buch hat eine ISBN und einen Titel.\n- Ein Leser kann mehrere Bücher ausleihen.\n- Ein Buch ist immer nur an einen Leser ausgeliehen.\n\nBestimme Entitätstypen, Attribute, Beziehung und Kardinalität.",
    antwort: "**Entitätstypen:**\nLeser – Attribute: Lesernummer, Name\nBuch – Attribute: ISBN, Titel\n\n**Beziehung:** Ein Leser leiht Bücher aus.\n\n**Kardinalität:** 1:n\nEin Leser kann mehrere Bücher ausleihen, ein Buch ist aber nur an einen Leser ausgeliehen."
  },
  {
    thema: "Begriffe",
    quelle: "Variante zu Aufgabe 3",
    frage: "Eine Schule verwaltet Schüler und AGs.\n- Jeder Schüler hat eine SchülerID und einen Namen.\n- Jede AG hat eine AG-Nummer und einen AG-Namen.\n- Ein Schüler kann mehrere AGs besuchen, eine AG wird von vielen Schülern besucht.\n\nBestimme Entitätstypen, Attribute, Beziehung und Kardinalität.",
    antwort: "**Entitätstypen:**\nSchüler – Attribute: SchülerID, Name\nAG – Attribute: AG-Nummer, AG-Name\n\n**Beziehung:** Ein Schüler besucht AGs.\n\n**Kardinalität:** n:m\nEin Schüler kann mehrere AGs besuchen und eine AG hat mehrere Schüler."
  },
  {
    thema: "Begriffe",
    quelle: "Variante zu Aufgabe 3",
    frage: "Eine Schule speichert Klassen und Klassenlehrer.\n- Jede Klasse hat eine Bezeichnung und einen Raum.\n- Jede Lehrkraft hat ein Kürzel und einen Namen.\n- Jede Klasse hat genau einen Klassenlehrer, jede Lehrkraft ist Klassenlehrer von höchstens einer Klasse.\n\nGib die Kardinalität der Beziehung an und begründe.",
    antwort: "**Kardinalität:** 1:1\nZu einer Klasse gehört genau ein Klassenlehrer, und eine Lehrkraft leitet höchstens eine Klasse."
  },
  {
    thema: "Begriffe",
    quelle: "Vorgehen zu Aufgabe 3",
    frage: "Wie bestimmst du aus einem Text Entitätstypen, Attribute und die Kardinalität?",
    antwort: "**Entitätstypen:** Dinge, die eigene Eigenschaften haben (Schüler, Fahrlehrer, Buch …)\n**Attribute:** was ein Entitätstyp „besitzt“ (Nummer, Name …)\n**Beziehung:** das Verb, das zwei Entitätstypen verbindet (unterrichtet, leiht aus …)\n**Kardinalität:** in **beide Richtungen** fragen:\nWie viele B gehören zu einem A? Wie viele A gehören zu einem B?\n\nbeide Male „genau einer“ → 1:1\neinmal „mehrere“, einmal „genau einer“ → 1:n\nbeide Male „mehrere“ → n:m"
  },

  // ---------- Schlüssel (Aufgaben 4, 5, 21a) ----------
  {
    thema: "Schlüssel",
    quelle: "Aufgabe 4",
    frage: "| KundenID | Name | Wohnort |\n| 101 | Anna Meier | Stuttgart |\n| 102 | Max Schulz | Böblingen |\n| 103 | Lea Weber | Sindelfingen |\nErläutere die Begriffe **Schlüssel** und **Primärschlüssel**. Bestimme den Primärschlüssel der Tabelle und begründe deine Wahl.",
    antwort: "Ein **Schlüssel** ist ein Attribut oder eine Attributkombination, mit der ein Datensatz eindeutig identifiziert werden kann.\n\nEin **Primärschlüssel** ist der ausgewählte Schlüssel, der jeden Datensatz einer Tabelle eindeutig kennzeichnet.\n\nDer Primärschlüssel ist **KundenID**, da jede KundenID nur einmal vorkommt und jeden Kunden eindeutig identifiziert. Name und Wohnort sind ungeeignet, da mehrere Kunden denselben Namen oder Wohnort haben könnten."
  },
  {
    thema: "Schlüssel",
    quelle: "Variante zu Aufgabe 4",
    frage: "| Kennzeichen | Marke | Farbe |\n| MS-AB 123 | VW | rot |\n| MS-XY 7 | Opel | blau |\n| BOR-K 55 | VW | blau |\nBestimme den Primärschlüssel und begründe deine Wahl.",
    antwort: "Primärschlüssel ist **Kennzeichen**, da jedes Kennzeichen nur einmal vergeben wird und jedes Auto eindeutig identifiziert.\nMarke und Farbe sind ungeeignet, sie kommen schon in der Tabelle mehrfach vor (VW, blau)."
  },
  {
    thema: "Schlüssel",
    quelle: "Variante zu Aufgabe 4",
    frage: "| Hotelname | Zimmernummer | Betten |\n| Hotel Sonne | 101 | 2 |\n| Hotel Sonne | 102 | 1 |\n| Hotel Adler | 101 | 3 |\nKein einzelnes Attribut ist eindeutig. Welche Möglichkeiten gibt es für einen Primärschlüssel?",
    antwort: "1. Die **Kombination** (__Hotelname__, __Zimmernummer__) ist eindeutig.\n2. Man führt einen **künstlichen Schlüssel** ein, z. B. __ZimmerID__ mit fortlaufenden Nummern."
  },
  {
    thema: "Schlüssel",
    quelle: "Aufgabe 5",
    frage: "Schueler\n| SchuelerID | Name |\n| 1 | Anna Meier |\n| 2 | Max Schulz |\n| 3 | Lea Weber |\nKurs\n| KursID | Kursname | SchuelerID |\n| 10 | Informatik | 1 |\n| 11 | Mathematik | 1 |\n| 12 | Physik | 2 |\na) Bestimme die Primärschlüssel beider Tabellen.\nb) Bestimme den Fremdschlüssel.\nc) Erläutere die Funktion eines Fremdschlüssels.",
    antwort: "a) Schueler: **SchuelerID**, Kurs: **KursID**\n\nb) **SchuelerID** in der Tabelle Kurs\n\nc) Ein Fremdschlüssel verweist auf den Primärschlüssel einer anderen Tabelle. Dadurch können Datensätze verschiedener Tabellen miteinander verknüpft werden. Hier zeigt die SchuelerID in Kurs auf einen Schüler in der Tabelle Schueler."
  },
  {
    thema: "Schlüssel",
    quelle: "Variante zu Aufgabe 5",
    frage: "Abteilung\n| AbtID | Bezeichnung |\n| 10 | Buchhaltung |\n| 20 | IT |\nMitarbeiter\n| MID | Name | AbtID |\n| 1 | Anna Meier | 10 |\n| 2 | Max Schulz | 20 |\n| 3 | Lea Weber | 10 |\nBestimme Primärschlüssel und Fremdschlüssel und erläutere die Funktion des Fremdschlüssels.",
    antwort: "Primärschlüssel: **AbtID** in Abteilung, **MID** in Mitarbeiter\nFremdschlüssel: **AbtID** in Mitarbeiter\n\nDer Fremdschlüssel verweist auf den Primärschlüssel der Tabelle Abteilung. So wird jeder Mitarbeiter mit seiner Abteilung verknüpft, z. B. gehört Lea Weber zur Abteilung 10, der Buchhaltung."
  },
  {
    thema: "Schlüssel",
    quelle: "Aufgabe 21a",
    frage: "Kapitel(__KID__, Überschrift, BID↑)\nBuch(__BID__, Titel, AID↑, Erscheinungsjahr)\nAutor(__AID__, Name, Geburtsjahr)\n\nErläutere anhand dieser Relationen die Begriffe „Primärschlüssel“ und „Fremdschlüssel“.",
    antwort: "**Primärschlüssel:** ein Attribut oder eine Attributkombination, die jeden Datensatz einer Relation eindeutig identifiziert, hier KID, BID und AID.\n\n**Fremdschlüssel:** ein Attribut, das auf den Primärschlüssel einer anderen Relation verweist, um Beziehungen zwischen Datensätzen herzustellen. Hier verweist BID in Kapitel auf das Buch, zu dem das Kapitel gehört, und AID in Buch auf den Autor des Buchs."
  },
  {
    thema: "Schlüssel",
    quelle: "Vorgehen zu Aufgaben 4, 5",
    frage: "Woran erkennst du einen Fremdschlüssel? Und wie begründest du die Wahl eines Primärschlüssels?",
    antwort: "**Fremdschlüssel:** ein Attribut, das in einer **anderen** Tabelle Primärschlüssel ist (meist gleicher Name, z. B. SchuelerID in Kurs). Im Schema mit ↑ markiert.\n\n**Begründung Primärschlüssel:** Jeder Wert kommt nur einmal vor und identifiziert den Datensatz eindeutig. Bei den anderen Attributen sagen, warum sie **grundsätzlich** mehrfach vorkommen können (z. B. zwei Kunden mit gleichem Namen)."
  },

  // ---------- ER-Diagramm (Aufgaben 6, 7, 12, 13, 21b) ----------
  {
    thema: "ER-Diagramm",
    quelle: "Vorgehen zu Aufgaben 6, 7",
    frage: "Wie zeichnest du ein ER-Diagramm? Welche Form hat was, wo stehen die Kardinalitäten?",
    antwort: "Entitätstyp → **Rechteck**\nAttribut → **Ellipse**, mit Linie am Rechteck\nPrimärschlüssel → Attribut **unterstrichen**\nBeziehung → **Raute** mit Verb (gibt auf, besucht …)\nKardinalität → an die Linien zwischen Raute und Rechtecken\n\nBeispiel „ein Kunde gibt viele Bestellungen auf“:\nKunde —1— gibt auf —n— Bestellung"
  },
  {
    thema: "ER-Diagramm",
    quelle: "Aufgabe 6",
    frage: "Ein Fitnessstudio verwaltet Mitglieder und Kurse. Die Mitglieder können an mehreren Kursen teilnehmen.\n- Jedes Mitglied besitzt eine Mitgliedsnummer und einen Namen.\n- Jeder Kurs besitzt eine Kursnummer und eine Bezeichnung.\n\nModelliere den Ausschnitt als ER-Diagramm. Kennzeichne die Schlüssel und gib die Kardinalitäten an.",
    antwort: "![ER-Diagramm Fitnessstudio](er_fitnessstudio.png)\nn:m, weil ein Mitglied mehrere Kurse besucht und ein Kurs mehrere Mitglieder hat."
  },
  {
    thema: "ER-Diagramm",
    quelle: "Aufgabe 7",
    frage: "Ein Online-Shop verwaltet Kunden, Bestellungen und Produkte.\n- Jeder Kunde besitzt eine KundenID und einen Namen.\n- Jede Bestellung besitzt eine BestellID und ein Bestelldatum.\n- Jedes Produkt besitzt eine ProduktID, eine Bezeichnung und einen Preis.\n- Ein Kunde kann mehrere Bestellungen aufgeben, jede Bestellung gehört genau zu einem Kunden.\n- Eine Bestellung kann mehrere Produkte enthalten, ein Produkt kann in mehreren Bestellungen enthalten sein.\n\nModelliere als ER-Diagramm mit Schlüsseln und Kardinalitäten.",
    antwort: "![ER-Diagramm Online-Shop](er_onlineshop.png)\nKunde —1— gibt auf —n— Bestellung\nBestellung —n— enthält —m— Produkt"
  },
  {
    thema: "ER-Diagramm",
    quelle: "Variante zu Aufgabe 7",
    frage: "Ein Krankenhaus verwaltet Patienten, Zimmer und Ärzte.\n- Ein Patient hat eine Patientennummer und einen Namen.\n- Ein Zimmer hat eine Zimmernummer und eine Bettenzahl.\n- Ein Arzt hat eine ArztID und einen Namen.\n- Jeder Patient liegt in genau einem Zimmer, in einem Zimmer liegen mehrere Patienten.\n- Ein Arzt behandelt mehrere Patienten, ein Patient wird von mehreren Ärzten behandelt.\n\nBeschreibe das ER-Diagramm: Rechtecke, Ellipsen, Rauten, Kardinalitäten.",
    antwort: "**Rechtecke mit Ellipsen:**\nPatient: __Patientennummer__, Name\nZimmer: __Zimmernummer__, Bettenzahl\nArzt: __ArztID__, Name\n\n**Rauten mit Kardinalitäten:**\nPatient —n— liegt in —1— Zimmer\nArzt —n— behandelt —m— Patient"
  },
  {
    thema: "ER-Diagramm",
    quelle: "Variante zu Aufgabe 7",
    frage: "Ein Musikdienst verwaltet Nutzer, Playlists und Songs.\n- Ein Nutzer hat einen Benutzernamen und eine E-Mail-Adresse.\n- Eine Playlist hat eine PlaylistID und einen Namen.\n- Ein Song hat eine SongID, einen Titel und eine Länge.\n- Ein Nutzer erstellt mehrere Playlists, jede Playlist gehört genau einem Nutzer.\n- Eine Playlist enthält mehrere Songs, ein Song kann in mehreren Playlists sein.\n\nBeschreibe das ER-Diagramm.",
    antwort: "**Rechtecke mit Ellipsen:**\nNutzer: __Benutzername__, E-Mail\nPlaylist: __PlaylistID__, Name\nSong: __SongID__, Titel, Länge\n\n**Rauten mit Kardinalitäten:**\nNutzer —1— erstellt —n— Playlist\nPlaylist —n— enthält —m— Song"
  },
  {
    thema: "ER-Diagramm",
    quelle: "Vorgehen zu Aufgaben 12, 13",
    frage: "Wie liest du aus einem relationalen Schema die Entitätstypen, Beziehungen und Kardinalitäten für das ER-Diagramm ab?",
    antwort: "**Tabelle mit eigenem Primärschlüssel** → Entitätstyp (Rechteck), die übrigen Attribute ohne die Fremdschlüssel als Ellipsen\n\n**Fremdschlüssel in Tabelle A, der auf B zeigt** → 1:n-Beziehung, das **n** steht bei A\n\n**Tabelle, die nur aus Fremdschlüsseln besteht** (z. B. betreibt_Sportart) → kein Rechteck, sondern eine **n:m-Beziehung** (Raute). Weitere Attribute dieser Tabelle werden Ellipsen an der Raute."
  },
  {
    thema: "ER-Diagramm",
    quelle: "Aufgabe 12",
    frage: "Kunde(__KundenID__, Name, Ort)\nBestellung(__BestellNr__, Datum, KundenID↑)\n\nÜberführe das Schema in ein ER-Diagramm. Mache Kardinalitäten und Schlüssel deutlich.",
    antwort: "![ER-Diagramm Kunde Bestellung](er_kunde_bestellung.png)\nDer Fremdschlüssel KundenID steht in Bestellung, also gehört jede Bestellung zu einem Kunden: Kunde —1— gibt auf —n— Bestellung."
  },
  {
    thema: "ER-Diagramm",
    quelle: "Aufgabe 13",
    frage: "Mitglied(__MID__, Name, Vorname, Geburtsjahr, Geschlecht, Straße, PLZ↑)\nOrt(__PLZ__, Ortsname)\nSportart(__SpID__, Bezeichnung)\nbetreibt_Sportart(MID↑, SpID↑)\n\nEntwirf ein passendes ER-Diagramm mit Kardinalitäten.",
    antwort: "![ER-Diagramm Sportverein](er_sportverein.png)\nMitglied —n— wohnt in —1— Ort (Fremdschlüssel PLZ in Mitglied)\nMitglied —n— betreibt —m— Sportart (Tabelle betreibt_Sportart)"
  },
  {
    thema: "ER-Diagramm",
    quelle: "Variante zu Aufgaben 12, 13",
    frage: "Lehrer(__LID__, Name)\nKlasse(__KlassenID__, Bezeichnung, LID↑)\nSchueler(__SID__, Name, KlassenID↑)\n\nBeschreibe das passende ER-Diagramm mit Kardinalitäten.",
    antwort: "**Rechtecke mit Ellipsen:**\nLehrer: __LID__, Name\nKlasse: __KlassenID__, Bezeichnung\nSchüler: __SID__, Name\n\n**Rauten mit Kardinalitäten:**\nLehrer —1— leitet —n— Klasse (LID steht in Klasse)\nKlasse —1— hat —n— Schüler (KlassenID steht in Schueler)"
  },
  {
    thema: "ER-Diagramm",
    quelle: "Variante zu Aufgaben 12, 13",
    frage: "Film(__FID__, Titel, Jahr)\nSchauspieler(__SID__, Name)\nspielt_in(__FID↑__, __SID↑__, Rolle)\n\nBeschreibe das passende ER-Diagramm mit Kardinalitäten.",
    antwort: "**Rechtecke mit Ellipsen:**\nFilm: __FID__, Titel, Jahr\nSchauspieler: __SID__, Name\n\n**Raute:**\nSchauspieler —n— spielt in —m— Film\nDas Attribut **Rolle** gehört zur Beziehung, seine Ellipse hängt an der Raute."
  },
  {
    thema: "ER-Diagramm",
    quelle: "Aufgabe 21b",
    frage: "Kapitel(__KID__, Überschrift, BID↑)\nBuch(__BID__, Titel, AID↑, Erscheinungsjahr)\nAutor(__AID__, Name, Geburtsjahr)\n\nEin Kapitel gehört genau zu einem Buch, ein Buch hat genau einen Autor.\nEntwirf ein ER-Diagramm mit allen Kardinalitäten.",
    antwort: "![ER-Diagramm Buch Kapitel Autor](er_buch_kapitel_autor.png)\nAutor —1— hat geschrieben —n— Buch\nBuch —1— enthält —n— Kapitel"
  },

  // ---------- Normalformen (Aufgaben 8–11, 21c) ----------
  {
    thema: "Normalformen",
    quelle: "Aufgabe 8",
    frage: "Erläutere, was es bedeutet, dass eine Datenbank in der **1. Normalform** vorliegt. Gib ein Beispiel für eine Datenbank, die nicht in 1NF ist, und erkläre, wie man sie in 1NF überführt.",
    antwort: "1NF: Alle Attribute enthalten nur **atomare Werte**. In einer Zelle steht genau ein Wert, keine Listen, keine mehrfachen Werte, keine zusammengesetzten Felder.\n\n**Nicht in 1NF:**\n| Name | Telefonnummern |\n| Anna Meier | 030-123456, 030-654321 |\n| Max Schulz | 040-987654 |\nTelefonnummern ist nicht atomar.\n\n**Überführung:**\n| Name | Telefonnummer |\n| Anna Meier | 030-123456 |\n| Anna Meier | 030-654321 |\n| Max Schulz | 040-987654 |\nJede Zeile hat jetzt genau einen Telefonwert."
  },
  {
    thema: "Normalformen",
    quelle: "Aufgabe 9",
    frage: "Erläutere, was es bedeutet, dass eine Datenbank in der **2. Normalform** vorliegt. Gib ein Beispiel für eine Datenbank, die nicht in 2NF ist, und erkläre, wie man sie in 2NF überführt.",
    antwort: "2NF: 1NF und jedes Nicht-Schlüsselattribut hängt **voll vom gesamten Schlüssel** ab.\n\n**Nicht in 2NF:**\n| __KursID__ | __SchülerID__ | SchülerName |\n| 10 | 1 | Anna Meier |\n| 10 | 2 | Max Schulz |\n| 11 | 1 | Anna Meier |\nDer Schlüssel ist (KursID, SchülerID). SchülerName hängt nur von SchülerID ab, nicht vom ganzen Schlüssel.\n\n**Überführung:** aufteilen in\n| __SchülerID__ | SchülerName |\n| 1 | Anna Meier |\n| 2 | Max Schulz |\nund\n| __KursID__ | __SchülerID__ |\n| 10 | 1 |\n| 10 | 2 |\n| 11 | 1 |"
  },
  {
    thema: "Normalformen",
    quelle: "Aufgabe 10",
    frage: "Erläutere, was es bedeutet, dass eine Datenbank in der **3. Normalform** vorliegt. Gib ein Beispiel für eine Datenbank, die nicht in 3NF ist, und erkläre, wie man sie in 3NF überführt.",
    antwort: "3NF: 2NF und **kein Nicht-Schlüsselattribut hängt von einem anderen Nicht-Schlüsselattribut ab**.\n\n**Nicht in 3NF:**\n| __MitarbeiterID__ | Name | AbteilungsID | AbteilungsName |\n| 1 | Anna Meier | 10 | Buchhaltung |\n| 2 | Max Schulz | 20 | IT |\n| 3 | Lea Weber | 10 | Buchhaltung |\nAbteilungsName hängt nicht direkt vom Schlüssel ab, sondern von AbteilungsID.\n\n**Überführung:** aufteilen in\n| __MitarbeiterID__ | Name | AbteilungsID |\n| 1 | Anna Meier | 10 |\n| 2 | Max Schulz | 20 |\n| 3 | Lea Weber | 10 |\nund\n| __AbteilungsID__ | AbteilungsName |\n| 10 | Buchhaltung |\n| 20 | IT |"
  },
  {
    thema: "Normalformen",
    quelle: "Vorgehen zu Aufgaben 8–10",
    frage: "Was verbietet jede der drei Normalformen? Wie überführt man jeweils?",
    antwort: "**1NF** verbietet mehrere Werte in einer Zelle → jeden Wert in eine eigene Zeile\n\n**2NF** verbietet, dass ein Attribut nur von **einem Teil** eines zusammengesetzten Schlüssels abhängt → dieses Attribut mit seinem Schlüsselteil in eine eigene Tabelle\n(nur möglich, wenn der Schlüssel aus mehreren Attributen besteht)\n\n**3NF** verbietet Abhängigkeiten **zwischen Nicht-Schlüsselattributen** → die abhängigen Attribute mit dem Attribut, von dem sie abhängen, in eine eigene Tabelle; dieses wird dort Primärschlüssel und bleibt in der alten Tabelle als Fremdschlüssel"
  },
  {
    thema: "Normalformen",
    quelle: "Variante zu Aufgaben 8–10",
    frage: "| __BestellNr__ | Kunde | Artikel |\n| 1 | Meier | Stift, Heft |\n| 2 | Schulz | Lineal |\nWelche Normalform ist verletzt? Überführe die Tabelle.",
    antwort: "Die **1NF** ist verletzt: Artikel enthält bei Bestellung 1 zwei Werte.\n\n| __BestellNr__ | Kunde | __Artikel__ |\n| 1 | Meier | Stift |\n| 1 | Meier | Heft |\n| 2 | Schulz | Lineal |\nDer Schlüssel ist jetzt (BestellNr, Artikel)."
  },
  {
    thema: "Normalformen",
    quelle: "Variante zu Aufgaben 8–10",
    frage: "Ausleihe(__LeserNr__, __ISBN__, Datum, Titel)\n\nWelche Normalform ist verletzt? Gib ein Schema an, das sie erfüllt.",
    antwort: "Die **2NF** ist verletzt: Titel hängt nur von ISBN ab, also nur von einem Teil des Schlüssels.\n\nBuch(__ISBN__, Titel)\nAusleihe(__LeserNr__, __ISBN↑__, Datum)"
  },
  {
    thema: "Normalformen",
    quelle: "Variante zu Aufgaben 8–10",
    frage: "Schueler(__SchuelerID__, Name, PLZ, Ort)\n\nWelche Normalform ist verletzt? Gib ein Schema an, das sie erfüllt.",
    antwort: "Die **3NF** ist verletzt: Ort hängt von PLZ ab, also von einem Nicht-Schlüsselattribut.\n\nSchueler(__SchuelerID__, Name, PLZ↑)\nOrt(__PLZ__, Ort)"
  },
  {
    thema: "Normalformen",
    quelle: "Aufgabe 11",
    frage: "| SchuelerID | Schuelername | Klassenname | Klassenlehrer |\n| 1 | Anna Meier | 10A | Herr Müller |\n| 2 | Max Schulz | 10A | Herr Müller |\n| 3 | Lea Weber | 10B | Frau Schmidt |\nErläutere, warum die Tabelle Redundanzen enthält. Überführe sie in ein relationales Schema in 3NF.",
    antwort: "Die Information, wer Klassenlehrer einer Klasse ist, wird mehrfach gespeichert: „10A – Herr Müller“ steht in mehreren Datensätzen. Dadurch können Inkonsistenzen entstehen.\n\nSchueler(__SchuelerID__, Schuelername, KlassenID↑)\nKlasse(__KlassenID__, Klassenname, Klassenlehrer)\n\nDie Informationen über Klassen werden nur noch einmal gespeichert."
  },
  {
    thema: "Normalformen",
    quelle: "Variante zu Aufgabe 11",
    frage: "| SpielerID | Name | Verein | Vereinsort |\n| 1 | Kim | SC Preußen | Münster |\n| 2 | Ben | SC Preußen | Münster |\n| 3 | Ali | VfL Bochum | Bochum |\nErläutere, warum die Tabelle Redundanzen enthält. Überführe sie in ein relationales Schema in 3NF.",
    antwort: "Der Ort eines Vereins wird bei jedem Spieler des Vereins erneut gespeichert: „SC Preußen – Münster“ steht mehrfach. Zieht der Verein um und wird nur ein Datensatz geändert, sind die Daten inkonsistent.\n\nSpieler(__SpielerID__, Name, VereinID↑)\nVerein(__VereinID__, Vereinsname, Vereinsort)"
  },
  {
    thema: "Normalformen",
    quelle: "Aufgabe 21c",
    frage: "Statt Kapitel, Buch und Autor schlägt jemand eine einzige Tabelle vor:\nKapitel(KID, Überschrift, Titel, Erscheinungsjahr, Name, Geburtsjahr)\n\nBeurteile diesen Vorschlag.",
    antwort: "Der Vorschlag ist nicht sinnvoll, da starke **Redundanzen** entstehen: Bei jedem Kapitel werden die Buchdaten und die Autorendaten erneut gespeichert. Das erhöht den Speicherbedarf und führt bei Änderungen leichter zu **Inkonsistenzen**, z. B. wenn ein Buchtitel nur bei einem Kapitel korrigiert wird."
  },

  // ---------- Schema entwerfen (Aufgaben 20, 21f) ----------
  {
    thema: "Schema entwerfen",
    quelle: "Vorgehen zu Aufgaben 20, 21f",
    frage: "Wie setzt du eine Beziehung im relationalen Schema um, je nach Kardinalität?",
    antwort: "**1:n** → keine neue Tabelle, die Tabelle auf der **n-Seite** bekommt den Primärschlüssel der anderen als Fremdschlüssel\n**n:m** → **neue Tabelle** mit beiden Primärschlüsseln als Fremdschlüssel, zusammen sind sie der Primärschlüssel; Attribute der Beziehung kommen dazu\n**1:1** → eine der beiden Tabellen bekommt den Primärschlüssel der anderen als Fremdschlüssel"
  },
  {
    thema: "Schema entwerfen",
    quelle: "Aufgabe 20",
    frage: "Mitglied(__MID__, Name, Vorname, Geburtsjahr, Geschlecht, Straße, PLZ↑)\nOrt(__PLZ__, Ortsname)\nSportart(__SpID__, Bezeichnung)\nbetreibt_Sportart(MID↑, SpID↑)\n\nEinige Mitglieder sind Trainer einer oder mehrerer Sportarten und erhalten dafür eine monatliche Vergütung. Ergänze das Schema.",
    antwort: "Trainer(__TID__, MID↑, Vergütung, SpID↑)\n\nEin Mitglied kann Trainer mehrerer Sportarten sein und eine Sportart kann mehrere Trainer haben. Deshalb eine eigene Tabelle mit beiden Fremdschlüsseln und der Vergütung."
  },
  {
    thema: "Schema entwerfen",
    quelle: "Aufgabe 21f",
    frage: "Kapitel(__KID__, Überschrift, BID↑)\nBuch(__BID__, Titel, AID↑, Erscheinungsjahr)\nAutor(__AID__, Name, Geburtsjahr)\n\nEinem Buch sollen mehrere Autoren zugeordnet werden können (z. B. Sammelbände). Erläutere die nötigen Änderungen.",
    antwort: "Es entsteht eine **n:m-Beziehung** zwischen Buch und Autor. Dazu wird der Fremdschlüssel AID aus der Tabelle Buch entfernt und eine zusätzliche Beziehungstabelle eingeführt:\n\nBuch(__BID__, Titel, Erscheinungsjahr)\nBuch_Autor(__BID↑__, __AID↑__)"
  },
  {
    thema: "Schema entwerfen",
    quelle: "Variante zu Aufgaben 20, 21f",
    frage: "Schueler(__SID__, Name)\nKurs(__KID__, Bezeichnung)\n\nSchüler sollen mehrere Kurse belegen können, und für jede Belegung soll die Note gespeichert werden. Ergänze das Schema.",
    antwort: "belegt(__SID↑__, __KID↑__, Note)\n\nn:m-Beziehung → eigene Tabelle mit beiden Fremdschlüsseln. Die Note gehört zur Kombination aus Schüler und Kurs, deshalb steht sie in dieser Tabelle."
  },
  {
    thema: "Schema entwerfen",
    quelle: "Variante zu Aufgaben 20, 21f",
    frage: "Schueler(__SNr__, Name, Geburtsdatum, PNr↑)\nFahrlehrer(__PNr__, Name)\n\nKünftig sollen alle Fahrstunden mit Datum gespeichert werden. Eine Fahrstunde hat genau einen Schüler und genau einen Fahrlehrer. Ergänze das Schema.",
    antwort: "Fahrstunde(__FID__, Datum, SNr↑, PNr↑)\n\nJede Fahrstunde ist eine eigene Entität mit künstlichem Schlüssel FID. Über die Fremdschlüssel SNr und PNr wird sie mit Schüler und Fahrlehrer verknüpft."
  },
  {
    thema: "Schema entwerfen",
    quelle: "Variante zu Aufgabe 7",
    frage: "Überführe das ER-Diagramm des Online-Shops in ein relationales Schema:\nKunde —1— gibt auf —n— Bestellung\nBestellung —n— enthält —m— Produkt\n(Kunde: KundenID, Name; Bestellung: BestellID, Bestelldatum; Produkt: ProduktID, Bezeichnung, Preis)",
    antwort: "Kunde(__KundenID__, Name)\nBestellung(__BestellID__, Bestelldatum, KundenID↑)\nProdukt(__ProduktID__, Bezeichnung, Preis)\nenthaelt(__BestellID↑__, __ProduktID↑__)\n\n1:n → Fremdschlüssel in Bestellung, n:m → eigene Tabelle."
  },

  // ---------- SQLite (Aufgabe 14) ----------
  {
    thema: "SQLite",
    quelle: "Aufgabe 14",
    frage: "Beschreibe, wie im Unterricht mit dem DBMS SQLite gearbeitet wurde. Gehe ein auf:\n- Herstellen einer Datenbankverbindung\n- Erstellen von Tabellen\n- Einfügen von Daten\n- Abfragen von Daten\n- Löschen von Daten",
    antwort: "Wir verwenden das DBMS SQLite. Der Zugriff erfolgt aus Python über das Modul `sqlite3`, die Schnittstelle zu SQLite.\n\n- Mit `sqlite3.connect()` wird eine Verbindung zur Datenbank hergestellt. Über einen Cursor übermitteln wir die SQL-Anweisungen.\n- Mit `CREATE TABLE` werden Tabellen angelegt.\n- Mit `INSERT INTO` werden Datensätze eingefügt.\n- Mit `SELECT` werden Daten abgefragt.\n- Mit `DELETE FROM` werden Datensätze gelöscht."
  },
  {
    thema: "SQLite",
    quelle: "Variante zu Aufgabe 14",
    frage: "Schreibe das Grundgerüst eines Python-Programms, das alle Datensätze der Tabelle Schueler aus `schule.db` ausgibt.",
    antwort: "```\nimport sqlite3\ncon = sqlite3.connect(\"schule.db\")\ncur = con.cursor()\ncur.execute(\"SELECT * FROM Schueler\")\nfor datensatz in cur.fetchall():\n    print(datensatz)\ncon.close()\n```"
  },
  {
    thema: "SQLite",
    quelle: "Variante zu Aufgabe 14",
    frage: "Wann braucht man `con.commit()`?",
    antwort: "Wenn die Datenbank **verändert** wird (`CREATE TABLE`, `INSERT`, `UPDATE`, `DELETE`). Ohne `commit()` gehen die Änderungen beim Schließen verloren. Bei reinen Abfragen mit `SELECT` ist es nicht nötig."
  },

  // ---------- SQL-Abfragen (Aufgaben 15, 16, 21d, 21e, 21g) ----------
  {
    thema: "SQL-Abfragen",
    quelle: "Aufgabe 15",
    frage: "Schueler\n| SchuelerID | Name | Klasse |\n| 1 | Anna Meier | 10A |\n| 2 | Max Schulz | 10B |\n| 3 | Lea Weber | 10A |\n1. Gib alle Daten aller Schülerinnen und Schüler aus.\n2. Gib nur die Namen aus.\n3. Gib alle Schülerinnen und Schüler der Klasse 10A aus.",
    antwort: "```\nSELECT * FROM Schueler;\n\nSELECT Name FROM Schueler;\n\nSELECT * FROM Schueler\nWHERE Klasse = '10A';\n```"
  },
  {
    thema: "SQL-Abfragen",
    quelle: "Variante zu Aufgabe 15",
    frage: "Produkt\n| ProduktID | Produktname | Preis |\n| 1 | Maus | 20 |\n| 2 | Tastatur | 50 |\n| 3 | Kabel | 5 |\n1. Gib die Namen aller Produkte aus.\n2. Gib alle Daten der Produkte aus, die weniger als 30 kosten.\n3. Gib Name und Preis aller Produkte aus, sortiert nach Preis, das teuerste zuerst.",
    antwort: "```\nSELECT Produktname FROM Produkt;\n\nSELECT * FROM Produkt\nWHERE Preis < 30;\n\nSELECT Produktname, Preis FROM Produkt\nORDER BY Preis DESC;\n```"
  },
  {
    thema: "SQL-Abfragen",
    quelle: "Variante zu Aufgabe 15",
    frage: "Schueler(__SchuelerID__, Name, Klasse)\n\n1. Gib die Namen aller Schüler aus, die **nicht** in der 10A sind.\n2. Gib die Namen aller Schüler aus, deren Name mit L beginnt.",
    antwort: "```\nSELECT Name FROM Schueler\nWHERE Klasse <> '10A';\n\nSELECT Name FROM Schueler\nWHERE Name LIKE 'L%';\n```"
  },
  {
    thema: "SQL-Abfragen",
    quelle: "Variante zu Aufgabe 15",
    frage: "Finde die Fehler:\n```\nSELECT Name FROM Schueler\nWHERE Klasse == 10A\n```",
    antwort: "In SQL steht für „gleich“ ein **einfaches** `=`, und Texte stehen in **einfachen Hochkommata**:\n```\nSELECT Name FROM Schueler\nWHERE Klasse = '10A'\n```"
  },
  {
    thema: "SQL-Abfragen",
    quelle: "Aufgabe 16",
    frage: "Lehrer\n| LehrerID | Name |\n| 1 | Herr Müller |\n| 2 | Frau Schmidt |\nKurs\n| KursID | Bezeichnung | LehrerID |\n| 10 | Informatik | 1 |\n| 11 | Mathematik | 2 |\n| 12 | Physik | 1 |\nFormuliere eine SQL-Abfrage, die die Namen der Lehrkräfte und die von ihnen unterrichteten Kurse ausgibt.",
    antwort: "```\nSELECT Lehrer.Name, Kurs.Bezeichnung\nFROM Lehrer, Kurs\nWHERE Lehrer.LehrerID = Kurs.LehrerID;\n```"
  },
  {
    thema: "SQL-Abfragen",
    quelle: "Vorgehen zu Aufgaben 16, 21",
    frage: "In welchen Schritten schreibst du eine Abfrage über mehrere Tabellen?",
    antwort: "1. **SELECT:** Welche Spalten sollen ausgegeben werden?\n2. **FROM:** Welche Tabellen enthalten diese Spalten und die Spalten aus der Bedingung? Auch die Tabellen **dazwischen** (z. B. Buch_Autor) aufnehmen.\n3. **WHERE:** Für je zwei verbundene Tabellen eine Verknüpfungsbedingung **Fremdschlüssel = Primärschlüssel**. Bei 3 Tabellen also 2 Bedingungen.\n4. Weitere Bedingungen mit **AND** anhängen.\n5. Falls verlangt: **ORDER BY**.\n\nKommt ein Spaltenname in mehreren Tabellen vor, den Tabellennamen davorschreiben: `Lehrer.LehrerID`."
  },
  {
    thema: "SQL-Abfragen",
    quelle: "Variante zu Aufgabe 16",
    frage: "Abteilung(__AbtID__, Bezeichnung)\nMitarbeiter(__MID__, Name, AbtID↑)\n\nGib die Namen aller Mitarbeiter der Abteilung 'IT' aus.",
    antwort: "```\nSELECT Mitarbeiter.Name\nFROM Mitarbeiter, Abteilung\nWHERE Mitarbeiter.AbtID = Abteilung.AbtID\n  AND Abteilung.Bezeichnung = 'IT';\n```"
  },
  {
    thema: "SQL-Abfragen",
    quelle: "Variante zu Aufgabe 16",
    frage: "Kunde(__KundenID__, Name, Ort)\nBestellung(__BestellNr__, Datum, KundenID↑)\n\nGib BestellNr und Datum aller Bestellungen von Kunden aus Stuttgart aus, sortiert nach Datum.",
    antwort: "```\nSELECT BestellNr, Datum\nFROM Bestellung, Kunde\nWHERE Bestellung.KundenID = Kunde.KundenID\n  AND Ort = 'Stuttgart'\nORDER BY Datum;\n```"
  },
  {
    thema: "SQL-Abfragen",
    quelle: "Aufgabe 21d",
    frage: "Autor(__AID__, Name, Geburtsjahr)\n\nGib eine SQL-Anfrage an, die den Namen aller Autoren liefert, die im Jahr 1970 geboren wurden.",
    antwort: "```\nSELECT Name\nFROM Autor\nWHERE Geburtsjahr = 1970\n```"
  },
  {
    thema: "SQL-Abfragen",
    quelle: "Aufgabe 21e",
    frage: "Buch(__BID__, Titel, AID↑, Erscheinungsjahr)\nAutor(__AID__, Name, Geburtsjahr)\n\nGib Titel und Erscheinungsjahr aller Bücher von „J. K. Rowling“ aus, aufsteigend sortiert nach Erscheinungsjahr.",
    antwort: "```\nSELECT Buch.Titel, Erscheinungsjahr\nFROM Buch, Autor\nWHERE Buch.AID = Autor.AID\n  AND Autor.Name = 'J. K. Rowling'\nORDER BY Erscheinungsjahr ASC\n```"
  },
  {
    thema: "SQL-Abfragen",
    quelle: "Aufgabe 21g",
    frage: "Buch(__BID__, Titel, Erscheinungsjahr)\nBuch_Autor(__BID↑__, __AID↑__)\nAutor(__AID__, Name, Geburtsjahr)\n\nGib die Titel aller Bücher aus, an denen „Sebastian Fitzek“ beteiligt war.",
    antwort: "```\nSELECT Buch.Titel\nFROM Buch, Buch_Autor, Autor\nWHERE Buch.BID = Buch_Autor.BID\n  AND Buch_Autor.AID = Autor.AID\n  AND Autor.Name = 'Sebastian Fitzek'\n```\nDrei Tabellen → zwei Verknüpfungsbedingungen."
  },
  {
    thema: "SQL-Abfragen",
    quelle: "Variante zu Aufgabe 21g",
    frage: "Schueler(__SID__, Name)\nbelegt(__SID↑__, __KID↑__)\nKurs(__KID__, Bezeichnung)\n\nGib die Namen aller Schüler aus, die den Kurs 'Informatik' belegt haben, alphabetisch sortiert.",
    antwort: "```\nSELECT Schueler.Name\nFROM Schueler, belegt, Kurs\nWHERE Schueler.SID = belegt.SID\n  AND belegt.KID = Kurs.KID\n  AND Kurs.Bezeichnung = 'Informatik'\nORDER BY Schueler.Name\n```"
  },
  {
    thema: "SQL-Abfragen",
    quelle: "Variante zu Aufgabe 21g",
    frage: "Mitglied(__MID__, Name, Vorname, Geburtsjahr, Geschlecht, Straße, PLZ↑)\nSportart(__SpID__, Bezeichnung)\nbetreibt_Sportart(MID↑, SpID↑)\n\nGib die Bezeichnungen aller Sportarten aus, die das Mitglied mit dem Namen 'Meier' betreibt.",
    antwort: "```\nSELECT Sportart.Bezeichnung\nFROM Mitglied, betreibt_Sportart, Sportart\nWHERE Mitglied.MID = betreibt_Sportart.MID\n  AND betreibt_Sportart.SpID = Sportart.SpID\n  AND Mitglied.Name = 'Meier'\n```"
  },
  {
    thema: "SQL-Abfragen",
    quelle: "Variante zu Aufgabe 21e",
    frage: "Kapitel(__KID__, Überschrift, BID↑)\nBuch(__BID__, Titel, AID↑, Erscheinungsjahr)\n\nGib die Überschriften aller Kapitel des Buchs „Krabat“ aus.",
    antwort: "```\nSELECT Kapitel.Überschrift\nFROM Kapitel, Buch\nWHERE Kapitel.BID = Buch.BID\n  AND Buch.Titel = 'Krabat'\n```"
  },

  // ---------- SQL: Daten ändern (Aufgaben 17–19) ----------
  {
    thema: "SQL: Daten ändern",
    quelle: "Aufgabe 17",
    frage: "Schueler\n| SchuelerID | Name | Klasse |\n| 1 | Anna Meier | 10A |\n| 2 | Max Schulz | 10B |\nFüge die Schülerin mit SchuelerID 3, Name Lea Weber, Klasse 10A ein.",
    antwort: "```\nINSERT INTO Schueler\nVALUES (3, 'Lea Weber', '10A');\n```\nDie Werte stehen in der Reihenfolge der Spalten, Texte in einfachen Hochkommata."
  },
  {
    thema: "SQL: Daten ändern",
    quelle: "Aufgabe 18",
    frage: "Produkt\n| ProduktID | Produktname | Preis |\n| 1 | Maus | 20 |\n| 2 | Tastatur | 50 |\nDer Preis der Tastatur soll auf 55 geändert werden. Formuliere die SQL-Anweisung.",
    antwort: "```\nUPDATE Produkt\nSET Preis = 55\nWHERE ProduktID = 2;\n```"
  },
  {
    thema: "SQL: Daten ändern",
    quelle: "Aufgabe 19",
    frage: "Kunde\n| KundenID | Name |\n| 1 | Anna Meier |\n| 2 | Max Schulz |\n| 3 | Lea Weber |\nDer Datensatz von Max Schulz soll entfernt werden. Formuliere die SQL-Anweisung.",
    antwort: "```\nDELETE FROM Kunde\nWHERE KundenID = 2;\n```\nIn der Bedingung den **Primärschlüssel** verwenden: Namen können doppelt vorkommen."
  },
  {
    thema: "SQL: Daten ändern",
    quelle: "Vorgehen zu Aufgaben 17–19",
    frage: "Wie lauten die Grundformen von INSERT, UPDATE und DELETE? Was passiert ohne WHERE?",
    antwort: "```\nINSERT INTO Tabelle VALUES (Wert1, Wert2, ...);\nUPDATE Tabelle SET Spalte = Wert WHERE Bedingung;\nDELETE FROM Tabelle WHERE Bedingung;\n```\nOhne `WHERE` werden bei UPDATE und DELETE **alle** Datensätze geändert bzw. gelöscht."
  },
  {
    thema: "SQL: Daten ändern",
    quelle: "Variante zu Aufgabe 17",
    frage: "Produkt(__ProduktID__, Produktname, Preis)\n\nFüge das Produkt Monitor mit der ProduktID 3 und dem Preis 150 ein.",
    antwort: "```\nINSERT INTO Produkt\nVALUES (3, 'Monitor', 150);\n```"
  },
  {
    thema: "SQL: Daten ändern",
    quelle: "Variante zu Aufgabe 18",
    frage: "Schueler(__SchuelerID__, Name, Klasse)\n\nAlle Schüler der Klasse 10B kommen in die Klasse 11B. Formuliere die SQL-Anweisung.",
    antwort: "```\nUPDATE Schueler\nSET Klasse = '11B'\nWHERE Klasse = '10B';\n```"
  },
  {
    thema: "SQL: Daten ändern",
    quelle: "Variante zu Aufgabe 18",
    frage: "Kunde(__KundenID__, Name, Ort)\n\nDer Kunde mit der KundenID 4 zieht nach Münster. Formuliere die SQL-Anweisung.",
    antwort: "```\nUPDATE Kunde\nSET Ort = 'Münster'\nWHERE KundenID = 4;\n```"
  },
  {
    thema: "SQL: Daten ändern",
    quelle: "Variante zu Aufgabe 19",
    frage: "Produkt(__ProduktID__, Produktname, Preis)\n\nAlle Produkte, die weniger als 10 kosten, sollen gelöscht werden.",
    antwort: "```\nDELETE FROM Produkt\nWHERE Preis < 10;\n```"
  }
]);
