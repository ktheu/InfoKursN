// Lernkarten Bedingungen, wird von lernkarten/index.html geladen
// Klausurvorbereitung: Karten zu den Aufgaben in aufgaben/aufgaben.pdf
// quelle: "Aufgabe n" = Originalaufgabe, "Variante zu Aufgabe n" = ähnliche Aufgabe, "Vorgehen …" = Lösungsweg
// Formatierung in frage/antwort: **fett**, __unterstrichen__, `code`,
// Codeblock mit ``` ... ```, Tabellenzeilen | a | b |, Bild ![Beschreibung](datei.png), Zeilenumbruch mit \n

lernkarten("Bedingungen", [
  // ---------- if – else (Aufgaben 1, 2) ----------
  {
    thema: "if – else",
    quelle: "Aufgabe 1",
    frage: "Lies in die Variable `note` eine Zahl (1–6) ein. Setze die Variable `ergebnis` auf 'bestanden', falls die Note mindestens 4 ist, und auf 'nicht bestanden', falls die Note schlechter als 4 ist.",
    antwort: "```\nnote = int(input(\"Bitte eine Note (1-6) eingeben: \"))\nif note <= 4:\n    ergebnis = \"bestanden\"\nelse:\n    ergebnis = \"nicht bestanden\"\n```\nAchtung: „mindestens 4“ heißt 1, 2, 3 oder 4, also `note <= 4`."
  },
  {
    thema: "if – else",
    quelle: "Variante zu Aufgabe 1",
    frage: "Lies in die Variable `alter` eine ganze Zahl ein. Setze die Variable `status` auf 'volljährig', falls das Alter mindestens 18 ist, sonst auf 'minderjährig'.",
    antwort: "```\nalter = int(input(\"Alter: \"))\nif alter >= 18:\n    status = \"volljährig\"\nelse:\n    status = \"minderjährig\"\n```"
  },
  {
    thema: "if – else",
    quelle: "Variante zu Aufgabe 1",
    frage: "Lies eine ganze Zahl `x` ein und gib aus, ob sie gerade oder ungerade ist.",
    antwort: "```\nx = int(input(\"Bitte eine ganze Zahl eingeben: \"))\nif x % 2 == 0:\n    print(\"gerade\")\nelse:\n    print(\"ungerade\")\n```\nMit dem Modulo-Operator `%`: Bei geraden Zahlen ist der Rest bei Division durch 2 gleich 0."
  },
  {
    thema: "if – else",
    quelle: "Aufgabe 2",
    frage: "Lies eine ganze Zahl `x` ein. Gib aus:\n'positiv', wenn x größer als 0 ist,\n'null', wenn x gleich 0 ist,\n'negativ', wenn x kleiner als 0 ist.",
    antwort: "```\nx = int(input(\"Bitte eine ganze Zahl eingeben: \"))\nif x > 0:\n    print(\"positiv\")\nelif x == 0:\n    print(\"null\")\nelse:\n    print(\"negativ\")\n```"
  },
  {
    thema: "if – else",
    quelle: "Variante zu Aufgabe 2",
    frage: "Lies eine Temperatur `t` (ganze Zahl) ein. Gib aus:\n'heiß', wenn t über 30 liegt,\n'warm', wenn t über 20 liegt, aber höchstens 30,\n'kalt' sonst.",
    antwort: "```\nt = int(input(\"Temperatur: \"))\nif t > 30:\n    print(\"heiß\")\nelif t > 20:\n    print(\"warm\")\nelse:\n    print(\"kalt\")\n```\nBei `elif t > 20` ist schon klar, dass t nicht über 30 liegt. Nur der erste zutreffende Fall wird ausgeführt."
  },
  {
    thema: "if – else",
    quelle: "Vorgehen zu Aufgaben 1, 2",
    frage: "Finde die vier Fehler:\n```\nx = input(\"Zahl: \")\nif x = 0\nprint(\"null\")\n```",
    antwort: "1. `input` liefert einen String → `int(input(...))`\n2. Vergleich mit `==`, nicht `=`\n3. Doppelpunkt nach der Bedingung fehlt\n4. Der Rumpf muss eingerückt sein\n```\nx = int(input(\"Zahl: \"))\nif x == 0:\n    print(\"null\")\n```"
  },

  // ---------- Wahrheitstafeln (Aufgaben 3, 4) ----------
  {
    thema: "Wahrheitstafeln",
    quelle: "Vorgehen zu Aufgaben 3, 4",
    frage: "Wie stellst du eine Wahrheitstafel auf?",
    antwort: "1. **Zeilen:** 2 Variablen → 4 Zeilen, 3 Variablen → 8 Zeilen\n2. Belegungen in der Reihenfolge der Binärzahlen: 00, 01, 10, 11 bzw. 000, 001, …, 111\n3. Für jeden Teilausdruck eine **Hilfsspalte**: zuerst `not`, dann die Klammern, dann den ganzen Ausdruck\n4. `and` ist nur 1, wenn **beide** 1 sind. `or` ist 1, wenn **mindestens einer** 1 ist. `not` dreht um."
  },
  {
    thema: "Wahrheitstafeln",
    quelle: "Aufgabe 3",
    frage: "Gib die Wahrheitstafel für `(A or B) and not A` für alle vier Kombinationen von A und B an (0 für False, 1 für True).",
    antwort: "| A | B | A or B | not A | (A or B) and not A |\n| 0 | 0 | 0 | 1 | 0 |\n| 0 | 1 | 1 | 1 | 1 |\n| 1 | 0 | 1 | 0 | 0 |\n| 1 | 1 | 1 | 0 | 0 |"
  },
  {
    thema: "Wahrheitstafeln",
    quelle: "Aufgabe 4",
    frage: "Gib die Wahrheitstafel für `(A and not B) or C` für alle acht Kombinationen von A, B und C an (0 für False, 1 für True).",
    antwort: "| A | B | C | not B | A and not B | (A and not B) or C |\n| 0 | 0 | 0 | 1 | 0 | 0 |\n| 0 | 0 | 1 | 1 | 0 | 1 |\n| 0 | 1 | 0 | 0 | 0 | 0 |\n| 0 | 1 | 1 | 0 | 0 | 1 |\n| 1 | 0 | 0 | 1 | 1 | 1 |\n| 1 | 0 | 1 | 1 | 1 | 1 |\n| 1 | 1 | 0 | 0 | 0 | 0 |\n| 1 | 1 | 1 | 0 | 0 | 1 |"
  },
  {
    thema: "Wahrheitstafeln",
    quelle: "Variante zu Aufgabe 3",
    frage: "Gib die Wahrheitstafel für `not A or B` an.",
    antwort: "| A | B | not A | not A or B |\n| 0 | 0 | 1 | 1 |\n| 0 | 1 | 1 | 1 |\n| 1 | 0 | 0 | 0 |\n| 1 | 1 | 0 | 1 |\n`not` wird vor `or` ausgewertet."
  },
  {
    thema: "Wahrheitstafeln",
    quelle: "Variante zu Aufgabe 3",
    frage: "Gib die Wahrheitstafel für `not (A and B)` an.",
    antwort: "| A | B | A and B | not (A and B) |\n| 0 | 0 | 0 | 1 |\n| 0 | 1 | 0 | 1 |\n| 1 | 0 | 0 | 1 |\n| 1 | 1 | 1 | 0 |"
  },
  {
    thema: "Wahrheitstafeln",
    quelle: "Variante zu Aufgabe 4",
    frage: "Gib die Wahrheitstafel für `A and (B or not C)` für alle acht Kombinationen an.",
    antwort: "| A | B | C | not C | B or not C | A and (B or not C) |\n| 0 | 0 | 0 | 1 | 1 | 0 |\n| 0 | 0 | 1 | 0 | 0 | 0 |\n| 0 | 1 | 0 | 1 | 1 | 0 |\n| 0 | 1 | 1 | 0 | 1 | 0 |\n| 1 | 0 | 0 | 1 | 1 | 1 |\n| 1 | 0 | 1 | 0 | 0 | 0 |\n| 1 | 1 | 0 | 1 | 1 | 1 |\n| 1 | 1 | 1 | 0 | 1 | 1 |"
  },

  // ---------- Boolesche Ausdrücke (Aufgaben 5, 6) ----------
  {
    thema: "Boolesche Ausdrücke",
    quelle: "Aufgabe 5",
    frage: "In `x` sei eine ganze Zahl gespeichert. Schreibe einen Python-Ausdruck, der genau dann wahr ist, wenn x größer als 10 ist und durch 5 teilbar ist.",
    antwort: "```\nx > 10 and x % 5 == 0\n```"
  },
  {
    thema: "Boolesche Ausdrücke",
    quelle: "Aufgabe 6",
    frage: "In `x` sei eine ganze Zahl gespeichert. Schreibe einen Python-Ausdruck, der genau dann wahr ist, wenn x zwischen 110 und 120 (einschließlich) liegt oder durch 7 teilbar ist.",
    antwort: "```\n(110 <= x and x <= 120) or x % 7 == 0\n```"
  },
  {
    thema: "Boolesche Ausdrücke",
    quelle: "Vorgehen zu Aufgaben 5, 6",
    frage: "Wie übersetzt du diese Formulierungen in Python?\n- x ist durch 5 teilbar\n- x ist gerade\n- x liegt zwischen a und b (einschließlich)\n- „und“, „aber“ / „oder“",
    antwort: "durch 5 teilbar → `x % 5 == 0`\ngerade → `x % 2 == 0`\nzwischen a und b einschließlich → `a <= x and x <= b`\n„und“, „aber“ → `and`, „oder“ → `or`\n\nBei `and` und `or` zusammen Klammern setzen, `and` wird vor `or` ausgewertet."
  },
  {
    thema: "Boolesche Ausdrücke",
    quelle: "Variante zu Aufgabe 5",
    frage: "Schreibe einen Ausdruck, der genau dann wahr ist, wenn x negativ oder größer als 100 ist.",
    antwort: "```\nx < 0 or x > 100\n```"
  },
  {
    thema: "Boolesche Ausdrücke",
    quelle: "Variante zu Aufgabe 5",
    frage: "Schreibe einen Ausdruck, der genau dann wahr ist, wenn x durch 3 teilbar ist, aber nicht durch 9.",
    antwort: "```\nx % 3 == 0 and x % 9 != 0\n```"
  },
  {
    thema: "Boolesche Ausdrücke",
    quelle: "Variante zu Aufgabe 6",
    frage: "Schreibe einen Ausdruck, der genau dann wahr ist, wenn x gerade ist und zwischen 1 und 50 (einschließlich) liegt.",
    antwort: "```\nx % 2 == 0 and 1 <= x and x <= 50\n```"
  },
  {
    thema: "Boolesche Ausdrücke",
    quelle: "Variante zu Aufgabe 6",
    frage: "Schreibe einen Ausdruck, der genau dann wahr ist, wenn x **nicht** zwischen 10 und 20 (einschließlich) liegt oder durch 4 teilbar ist.",
    antwort: "```\n(x < 10 or x > 20) or x % 4 == 0\n```\nGleichwertig: `not (10 <= x and x <= 20) or x % 4 == 0`"
  },

  // ---------- while-Schleife (Aufgaben 7, 8) ----------
  {
    thema: "while-Schleife",
    quelle: "Aufgabe 7",
    frage: "Schreibe mit einer while-Schleife ein Python-Programm, das die Zahlen von 5 bis 12 ausgibt.",
    antwort: "```\nx = 5\nwhile x <= 12:\n    print(x)\n    x += 1\n```"
  },
  {
    thema: "while-Schleife",
    quelle: "Vorgehen zu Aufgabe 7",
    frage: "Welche drei Teile braucht eine while-Schleife, die Zahlen hoch- oder herunterzählt?",
    antwort: "1. **Startwert** vor der Schleife: `x = 5`\n2. **Bedingung**: `while x <= 12:`\n3. **Veränderung** im Rumpf: `x += 1`\n\nFehlt die Veränderung, entsteht eine Endlosschleife."
  },
  {
    thema: "while-Schleife",
    quelle: "Variante zu Aufgabe 7",
    frage: "Schreibe mit einer while-Schleife ein Programm, das die Zahlen von 20 bis 10 (rückwärts) ausgibt.",
    antwort: "```\nx = 20\nwhile x >= 10:\n    print(x)\n    x -= 1\n```"
  },
  {
    thema: "while-Schleife",
    quelle: "Variante zu Aufgabe 7",
    frage: "Schreibe mit einer while-Schleife ein Programm, das die geraden Zahlen von 2 bis 20 ausgibt.",
    antwort: "```\nx = 2\nwhile x <= 20:\n    print(x)\n    x += 2\n```"
  },
  {
    thema: "while-Schleife",
    quelle: "Aufgabe 8",
    frage: "Was wird ausgegeben?\n```\nx = 17\nprint(x)\nwhile x >= 10:\n    x -= 3\nprint(x)\n```",
    antwort: "```\n17\n8\n```\nDas `print` steht nicht in der Schleife. x: 17 → 14 → 11 → 8, bei 8 ist die Bedingung `False`."
  },
  {
    thema: "while-Schleife",
    quelle: "Vorgehen zu Aufgaben 8, 11, 12",
    frage: "Wie löst du „Was wird ausgegeben?“-Aufgaben sicher?",
    antwort: "1. Prüfe an der **Einrückung**, welche Zeilen in der Schleife stehen, besonders das `print`.\n2. Lege eine **Tabelle** mit den Variablen an und trage nach jeder Zeile die neuen Werte ein.\n3. Prüfe vor jedem Durchlauf die Bedingung neu.\n4. Schreibe jede Ausgabe in eine eigene Zeile."
  },
  {
    thema: "while-Schleife",
    quelle: "Variante zu Aufgabe 8",
    frage: "Was wird ausgegeben?\n```\nx = 30\nwhile x > 10:\n    x -= 7\nprint(x)\n```",
    antwort: "```\n9\n```\nx: 30 → 23 → 16 → 9"
  },
  {
    thema: "while-Schleife",
    quelle: "Variante zu Aufgabe 8",
    frage: "Was wird ausgegeben?\n```\nx = 1\nwhile x < 20:\n    x = x * 3\n    print(x)\n```",
    antwort: "```\n3\n9\n27\n```\nDas `print` steht in der Schleife und nach der Veränderung. Bei 9 ist die Bedingung noch wahr, also wird noch 27 berechnet und ausgegeben."
  },

  // ---------- for und range (Aufgaben 9–12) ----------
  {
    thema: "for und range",
    quelle: "Aufgabe 9",
    frage: "Schreibe mit einer for-Schleife ein Python-Programm, das die Zahlen von 5 bis 12 ausgibt.",
    antwort: "```\nfor x in range(5, 13):\n    print(x)\n```"
  },
  {
    thema: "for und range",
    quelle: "Aufgabe 10",
    frage: "Schreibe mit einer for-Schleife ein Python-Programm, das die Zahlen von 11 bis 7 ausgibt.",
    antwort: "```\nfor x in range(11, 6, -1):\n    print(x)\n```"
  },
  {
    thema: "for und range",
    quelle: "Vorgehen zu Aufgaben 9, 10",
    frage: "Wie bestimmst du Start, Ende und Schrittweite bei `range(start, ende, schritt)`?",
    antwort: "Die **Endzahl wird nicht mitgenommen**.\n\nAufwärts bis z → Ende ist **z + 1**: von 5 bis 12 → `range(5, 13)`\nAbwärts bis z → Ende ist **z − 1**, Schrittweite negativ: von 11 bis 7 → `range(11, 6, -1)`\n\nOhne Startwert beginnt `range` bei 0, ohne Schrittweite ist sie 1."
  },
  {
    thema: "for und range",
    quelle: "Variante zu Aufgabe 9",
    frage: "Schreibe mit einer for-Schleife ein Programm, das die Zahlen 3, 6, 9, …, 30 ausgibt.",
    antwort: "```\nfor x in range(3, 31, 3):\n    print(x)\n```"
  },
  {
    thema: "for und range",
    quelle: "Variante zu Aufgabe 10",
    frage: "Schreibe mit einer for-Schleife ein Programm, das die Zahlen 20, 18, 16, …, 0 ausgibt.",
    antwort: "```\nfor x in range(20, -1, -2):\n    print(x)\n```\nDie 0 soll noch ausgegeben werden, also endet der Bereich bei -1."
  },
  {
    thema: "for und range",
    quelle: "Aufgabe 11",
    frage: "Was wird ausgegeben?\n```\ni = 2\nfor k in range(i):\n    print(i+k)\n```",
    antwort: "```\n2\n3\n```\n`range(2)` liefert 0, 1. Ausgegeben wird 2 + 0 und 2 + 1."
  },
  {
    thema: "for und range",
    quelle: "Aufgabe 12",
    frage: "Was wird ausgegeben?\n```\ni = 5\nfor k in range(3):\n    print(i)\n```",
    antwort: "```\n5\n5\n5\n```\nDie Schleife läuft dreimal, ausgegeben wird aber `i`, nicht `k`."
  },
  {
    thema: "for und range",
    quelle: "Variante zu Aufgabe 11",
    frage: "Was wird ausgegeben?\n```\ni = 3\nfor k in range(1, i):\n    print(k * i)\n```",
    antwort: "```\n3\n6\n```\n`range(1, 3)` liefert 1, 2."
  },
  {
    thema: "for und range",
    quelle: "Variante zu Aufgabe 11",
    frage: "Was wird ausgegeben?\n```\ns = 0\nfor k in range(4):\n    s += k\nprint(s)\n```",
    antwort: "```\n6\n```\n0 + 1 + 2 + 3 = 6, ausgegeben wird nur einmal nach der Schleife."
  },
  {
    thema: "for und range",
    quelle: "Variante zu Aufgabe 12",
    frage: "Was wird ausgegeben?\n```\nfor k in range(10, 0, -3):\n    print(k)\n```",
    antwort: "```\n10\n7\n4\n1\n```"
  },

  // ---------- break und continue (Aufgabe 13) ----------
  {
    thema: "break und continue",
    quelle: "Aufgabe 13",
    frage: "Schreibe ein Programm, das mit einer for-Schleife die Zahlen von 1 bis 30 durchläuft. Überspringe alle Zahlen, die durch 5 teilbar sind (mit `continue`). Brich die Schleife ab (mit `break`), sobald eine Zahl größer als 20 ist. Gib alle nicht übersprungenen Zahlen aus.",
    antwort: "```\nfor i in range(1, 31):\n    if i % 5 == 0:\n        continue\n    if i > 20:\n        break\n    print(i)\n```\nAusgegeben werden 1–4, 6–9, 11–14, 16–19."
  },
  {
    thema: "break und continue",
    quelle: "Vorgehen zu Aufgabe 13",
    frage: "Was bewirken `break` und `continue`? Wo stehen sie im Programm?",
    antwort: "`continue` beendet nur den **laufenden Durchgang**, die Schleife macht mit der nächsten Zahl weiter.\n`break` **verlässt die Schleife** sofort.\n\nBeide stehen in einem `if` innerhalb der Schleife, **vor** dem `print`, damit übersprungene Zahlen nicht ausgegeben werden."
  },
  {
    thema: "break und continue",
    quelle: "Variante zu Aufgabe 13",
    frage: "Durchlaufe mit einer for-Schleife die Zahlen von 1 bis 50. Überspringe alle Vielfachen von 3 (mit `continue`). Brich ab (mit `break`), sobald eine Zahl größer als 10 ist. Gib die übrigen Zahlen aus.",
    antwort: "```\nfor i in range(1, 51):\n    if i % 3 == 0:\n        continue\n    if i > 10:\n        break\n    print(i)\n```\nAusgabe: 1, 2, 4, 5, 7, 8, 10"
  },
  {
    thema: "break und continue",
    quelle: "Variante zu Aufgabe 13",
    frage: "Was wird ausgegeben?\n```\nfor i in range(1, 10):\n    if i == 6:\n        break\n    if i % 2 == 0:\n        continue\n    print(i)\n```",
    antwort: "```\n1\n3\n5\n```\nGerade Zahlen werden übersprungen, bei 6 wird abgebrochen."
  },
  {
    thema: "break und continue",
    quelle: "Variante zu Aufgabe 13",
    frage: "Lies mit `while True` so lange ganze Zahlen ein, bis 0 eingegeben wird. Gib dann die Summe der eingegebenen Zahlen aus.",
    antwort: "```\nsumme = 0\nwhile True:\n    zahl = int(input())\n    if zahl == 0:\n        break\n    summe = summe + zahl\nprint(summe)\n```"
  }
]);
