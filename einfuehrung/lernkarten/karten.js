// Lernkarten Einführung, wird von lernkarten/index.html geladen
// Kleine Karten zu den Inhalten und Aufgabentypen aus aufgaben/aufgaben.pdf, ohne Stift und Papier lösbar
// Formatierung in frage/antwort: **fett**, __unterstrichen__, `code`,
// Codeblock mit ``` ... ```, Tabellenzeilen | a | b |, Bild ![Beschreibung](datei.png), Zeilenumbruch mit \n

lernkarten("Einführung", [
  // ---------- Algorithmus und Programm ----------
  {
    thema: "Algorithmus und Programm",
    frage: "Was ist ein **Algorithmus**?",
    antwort: "Eine **Schritt-für-Schritt-Anleitung** zur Lösung eines Problems oder zur Durchführung einer Aufgabe."
  },
  {
    thema: "Algorithmus und Programm",
    frage: "Wie heißt ein Algorithmus, der in einer Computersprache formuliert ist?",
    antwort: "**Programm**"
  },
  {
    thema: "Algorithmus und Programm",
    frage: "Was ist **Pseudocode**?",
    antwort: "Eine vereinfachte Beschreibung eines Programms. Er verwendet eine leicht verständliche Sprache, die an Programmiersprachen erinnert, aber **nicht an die genaue Syntax** einer bestimmten Programmiersprache gebunden ist."
  },
  {
    thema: "Algorithmus und Programm",
    frage: "Was macht man bei einem **Ablaufprotokoll**?",
    antwort: "Man verfolgt die Werte der (wichtigsten) beteiligten Variablen **Schritt für Schritt** mit. So prüft man, was ein Algorithmus macht."
  },

  // ---------- Collatz-Algorithmus ----------
  {
    thema: "Collatz-Algorithmus",
    frage: "Was wird im Collatz-Algorithmus mit der Zahl `x` gemacht, wenn `x` **gerade** ist?",
    antwort: "`x` wird **halbiert**."
  },
  {
    thema: "Collatz-Algorithmus",
    frage: "Was wird im Collatz-Algorithmus mit der Zahl `x` gemacht, wenn `x` **ungerade** ist?",
    antwort: "`x` wird **verdreifacht** und dann **um 1 erhöht**."
  },
  {
    thema: "Collatz-Algorithmus",
    frage: "Wann endet der Collatz-Algorithmus?",
    antwort: "Wenn die eingegebene Zahl `x` zur **1** geworden ist."
  },
  {
    thema: "Collatz-Algorithmus",
    frage: "Was gibt der Collatz-Algorithmus aus?",
    antwort: "Die **Anzahl der Durchgänge**, bis die eingegebene Zahl zur 1 geworden ist."
  },
  {
    thema: "Collatz-Algorithmus",
    frage: "Welche Zahl berechnet der Collatz-Algorithmus aus der Zahl **13** als nächste?",
    antwort: "**40**\n\n13 ist ungerade: 3 · 13 + 1 = 40"
  },
  {
    thema: "Collatz-Algorithmus",
    frage: "Welche Zahl berechnet der Collatz-Algorithmus aus der Zahl **20** als nächste?",
    antwort: "**10**\n\n20 ist gerade: 20 : 2 = 10"
  },
  {
    thema: "Collatz-Algorithmus",
    frage: "Welche Zahl berechnet der Collatz-Algorithmus aus der Zahl **7** als nächste?",
    antwort: "**22**\n\n7 ist ungerade: 3 · 7 + 1 = 22"
  },
  {
    thema: "Collatz-Algorithmus",
    frage: "Notiere die Folge der Zahlen, die der Collatz-Algorithmus für die Eingabe **3** berechnet.",
    antwort: "10 5 16 8 4 2 1"
  },
  {
    thema: "Collatz-Algorithmus",
    frage: "Was gibt der Collatz-Algorithmus für die Eingabe **8** aus?",
    antwort: "**3**\n\nFolge: 4 2 1"
  },
  {
    thema: "Collatz-Algorithmus",
    frage: "Was gibt der Collatz-Algorithmus für die Eingabe **5** aus?",
    antwort: "**5**\n\nFolge: 16 8 4 2 1"
  },
  {
    thema: "Collatz-Algorithmus",
    frage: "Was gibt der Collatz-Algorithmus für die Eingabe **1** aus?",
    antwort: "**0**\n\n`x` ist schon gleich 1, die Schleife wird gar nicht durchlaufen."
  },
  {
    thema: "Collatz-Algorithmus",
    frage: "Welche Frage zum Collatz-Algorithmus ist bis heute ungelöst?",
    antwort: "Ob der Algorithmus **für jede Eingabe** zu einem Ende kommt."
  },

  // ---------- Collatz in Python ----------
  {
    thema: "Collatz in Python",
    frage: "Pseudocode: `solange x nicht gleich 1 tue:`\n\nWie lautet die Zeile im Python-Programm?",
    antwort: "```\nwhile x != 1:\n```"
  },
  {
    thema: "Collatz in Python",
    frage: "Mit welcher Bedingung prüft das Collatz-Programm, ob `x` gerade ist?",
    antwort: "`x % 2 == 0`\n\nDer Rest bei der Division durch 2 ist 0."
  },
  {
    thema: "Collatz in Python",
    frage: "Pseudocode: `halbiere x`\n\nWie lautet die Zeile im Python-Programm?",
    antwort: "```\nx = x // 2\n```\n`//` ist die ganzzahlige Division."
  },
  {
    thema: "Collatz in Python",
    frage: "Pseudocode: `verdreifache x und erhöhe um 1`\n\nWie lautet die Zeile im Python-Programm?",
    antwort: "```\nx = 3*x + 1\n```"
  },
  {
    thema: "Collatz in Python",
    frage: "Pseudocode: `erhöhe z um 1`\n\nWie lautet die Zeile im Python-Programm?",
    antwort: "```\nz += 1\n```"
  },

  // ---------- Entwicklungsumgebung ----------
  {
    thema: "Entwicklungsumgebung",
    frage: "Was ist eine **Entwicklungsumgebung** (IDE)?",
    antwort: "Ein Programm, das beim **Schreiben, Ausführen und Testen** von Programmen unterstützt.\n\nIDE steht für *Integrated Development Environment*."
  },
  {
    thema: "Entwicklungsumgebung",
    frage: "Wie heißt die Entwicklungsumgebung für Python, die wir benutzen?",
    antwort: "**Thonny**"
  },
  {
    thema: "Entwicklungsumgebung",
    frage: "Nenne zwei Werkzeuge einer Entwicklungsumgebung, die beim Programmieren unterstützen.",
    antwort: "Zwei davon:\n- Code-Editor\n- Ausführen von Programmen\n- Fehlermeldungen\n- Debugger\n- Python-Konsole"
  },
  {
    thema: "Entwicklungsumgebung",
    frage: "Wofür ist der **Code-Editor** einer Entwicklungsumgebung da?",
    antwort: "Dort wird der Programmcode **geschrieben und bearbeitet**."
  },
  {
    thema: "Entwicklungsumgebung",
    frage: "Was zeigen die **Fehlermeldungen** einer Entwicklungsumgebung an?",
    antwort: "Ob ein Programm **syntaktische Fehler** enthält oder ob **während der Ausführung** Probleme auftreten."
  },
  {
    thema: "Entwicklungsumgebung",
    frage: "Was kann man mit einem **Debugger** machen?",
    antwort: "Ein Programm **Schritt für Schritt** ausführen. Dabei sieht man, welche Anweisung gerade ausgeführt wird und welche Werte die Variablen haben."
  },
  {
    thema: "Entwicklungsumgebung",
    frage: "Wofür ist die **Python-Konsole** (Kommandozeile) da?",
    antwort: "Dort machen wir **Eingaben** für unsere Programme und sehen ihre **Ausgaben**."
  }
]);
