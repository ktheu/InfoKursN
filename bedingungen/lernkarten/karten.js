// Lernkarten Bedingungen, wird von lernkarten/index.html geladen
// Kleine Karten zu den Aufgabentypen aus aufgaben/aufgaben.pdf, ohne Stift und Papier lösbar
// Formatierung in frage/antwort: **fett**, __unterstrichen__, `code`,
// Codeblock mit ``` ... ```, Tabellenzeilen | a | b |, Bild ![Beschreibung](datei.png), Zeilenumbruch mit \n

lernkarten("Bedingungen", [
  // ---------- if – else ----------
  {
    thema: "if – else",
    frage: "Was steht nach der Bedingung einer if-Anweisung, und woran erkennt man, was zum Rumpf gehört?",
    antwort: "Nach der Bedingung steht ein **Doppelpunkt**. Zum Rumpf gehören die **eingerückten** Zeilen (üblich: vier Leerzeichen)."
  },
  {
    thema: "if – else",
    frage: "Wann wird bei einer if – else – Anweisung der else-Zweig ausgeführt?",
    antwort: "Wenn die if-Bedingung **nicht** erfüllt ist. Es wird also immer genau einer der beiden Zweige durchlaufen."
  },
  {
    thema: "if – else",
    frage: "Wie viele Zweige werden bei if – elif – else ausgeführt?",
    antwort: "Genau einer: der **erste**, dessen Bedingung zutrifft. Trifft keine zu, der else-Zweig."
  },
  {
    thema: "if – else",
    frage: "Wie liest man eine ganze Zahl in die Variable `x` ein?",
    antwort: "```\nx = int(input(\"Bitte eine ganze Zahl eingeben: \"))\n```\n`input` liefert einen String, `int` macht daraus eine Zahl."
  },
  {
    thema: "if – else",
    frage: "Schulnoten 1–6: Welche Bedingung prüft „die Note ist mindestens 4“?",
    antwort: "`note <= 4`\n\nMindestens 4 heißt 1, 2, 3 oder 4. Kleinere Zahlen sind bessere Noten."
  },
  {
    thema: "if – else",
    frage: "Setze `ergebnis` auf 'bestanden', falls `note` mindestens 4 ist, sonst auf 'nicht bestanden'.",
    antwort: "```\nif note <= 4:\n    ergebnis = \"bestanden\"\nelse:\n    ergebnis = \"nicht bestanden\"\n```"
  },
  {
    thema: "if – else",
    frage: "Gib 'gerade' oder 'ungerade' aus, je nachdem, ob `x` gerade ist.",
    antwort: "```\nif x % 2 == 0:\n    print(\"gerade\")\nelse:\n    print(\"ungerade\")\n```"
  },
  {
    thema: "if – else",
    frage: "Gib 'positiv', 'null' oder 'negativ' aus, je nachdem, ob `x` größer, gleich oder kleiner als 0 ist.",
    antwort: "```\nif x > 0:\n    print(\"positiv\")\nelif x == 0:\n    print(\"null\")\nelse:\n    print(\"negativ\")\n```"
  },
  {
    thema: "if – else",
    frage: "```\nif t > 30:\n    print(\"heiß\")\nelif t > 20:\n    print(\"warm\")\nelse:\n    print(\"kalt\")\n```\nWas wird für `t = 35` ausgegeben, was für `t = 25`?",
    antwort: "`t = 35` → heiß\n`t = 25` → warm\n\nBei 35 ist auch `t > 20` wahr, aber nur der erste zutreffende Zweig wird ausgeführt."
  },
  {
    thema: "if – else",
    frage: "Finde die vier Fehler:\n```\nx = input(\"Zahl: \")\nif x = 0\nprint(\"null\")\n```",
    antwort: "1. `int(input(...))`, sonst ist x ein String\n2. Vergleich mit `==`\n3. Doppelpunkt nach der Bedingung\n4. `print` einrücken"
  },

  // ---------- Wahrheitstafeln ----------
  {
    thema: "Wahrheitstafeln",
    frage: "Wie viele Zeilen hat eine Wahrheitstafel mit 2 Variablen, wie viele mit 3?",
    antwort: "2 Variablen → **4** Zeilen\n3 Variablen → **8** Zeilen"
  },
  {
    thema: "Wahrheitstafeln",
    frage: "In welcher Reihenfolge schreibt man die Belegungen von A, B, C in die Wahrheitstafel?",
    antwort: "Wie die Binärzahlen: 000, 001, 010, 011, 100, 101, 110, 111"
  },
  {
    thema: "Wahrheitstafeln",
    frage: "Wann ist `A and B` gleich 1? Wann ist `A or B` gleich 1?",
    antwort: "`A and B`: nur wenn **beide** 1 sind\n`A or B`: wenn **mindestens einer** 1 ist"
  },
  {
    thema: "Wahrheitstafeln",
    frage: "In welcher Reihenfolge werden `not`, `and` und `or` ausgewertet?",
    antwort: "Zuerst `not`, dann `and`, dann `or`. Klammern werden zuerst ausgewertet."
  },
  {
    thema: "Wahrheitstafeln",
    frage: "Welche Hilfsspalten brauchst du für die Wahrheitstafel von `(A or B) and not A`?",
    antwort: "`A or B` und `not A`"
  },
  {
    thema: "Wahrheitstafeln",
    frage: "A = 0, B = 1\n\nWert von `(A or B) and not A`?",
    antwort: "**1**\n\nA or B = 1, not A = 1, also 1 and 1 = 1"
  },
  {
    thema: "Wahrheitstafeln",
    frage: "A = 1, B = 1\n\nWert von `(A or B) and not A`?",
    antwort: "**0**\n\nnot A = 0, damit ist der ganze and-Ausdruck 0."
  },
  {
    thema: "Wahrheitstafeln",
    frage: "Für welche Belegung von A und B ist `(A or B) and not A` gleich 1?",
    antwort: "Nur für **A = 0, B = 1**"
  },
  {
    thema: "Wahrheitstafeln",
    frage: "A = 1, B = 0, C = 0\n\nWert von `(A and not B) or C`?",
    antwort: "**1**\n\nnot B = 1, A and not B = 1, 1 or 0 = 1"
  },
  {
    thema: "Wahrheitstafeln",
    frage: "A = 0, B = 1, C = 0\n\nWert von `(A and not B) or C`?",
    antwort: "**0**\n\nA and not B = 0, 0 or 0 = 0"
  },
  {
    thema: "Wahrheitstafeln",
    frage: "Wann ist `(A and not B) or C` gleich 1?",
    antwort: "Wenn **C = 1** ist, oder wenn **A = 1 und B = 0** ist."
  },
  {
    thema: "Wahrheitstafeln",
    frage: "A = 1, B = 0\n\nWert von `not A or B`?",
    antwort: "**0**\n\nnot A = 0, 0 or 0 = 0"
  },
  {
    thema: "Wahrheitstafeln",
    frage: "Für welche Belegung ist `not (A and B)` gleich 0?",
    antwort: "Nur für **A = 1, B = 1**"
  },
  {
    thema: "Wahrheitstafeln",
    frage: "A = 1, B = 0, C = 1\n\nWert von `A and (B or not C)`?",
    antwort: "**0**\n\nnot C = 0, B or not C = 0, 1 and 0 = 0"
  },
  {
    thema: "Wahrheitstafeln",
    frage: "Was ergibt `True or False and False`?",
    antwort: "`True`\n\n`and` zuerst: False and False = False, dann True or False = True"
  },

  // ---------- Boolesche Ausdrücke ----------
  {
    thema: "Boolesche Ausdrücke",
    frage: "Wie prüft man in Python, ob `x` durch 5 teilbar ist?",
    antwort: "`x % 5 == 0`\n\nMit dem Modulo-Operator: Der Rest bei Division durch 5 ist 0."
  },
  {
    thema: "Boolesche Ausdrücke",
    frage: "Wie prüft man, ob `x` zwischen 110 und 120 liegt (beide einschließlich)?",
    antwort: "`110 <= x and x <= 120`"
  },
  {
    thema: "Boolesche Ausdrücke",
    frage: "Was ist der Unterschied zwischen `=` und `==`?",
    antwort: "`=` weist einen Wert zu, `==` vergleicht zwei Werte."
  },
  {
    thema: "Boolesche Ausdrücke",
    frage: "x ist größer als 10 und durch 5 teilbar.",
    antwort: "`x > 10 and x % 5 == 0`"
  },
  {
    thema: "Boolesche Ausdrücke",
    frage: "x liegt zwischen 110 und 120 (einschließlich) oder ist durch 7 teilbar.",
    antwort: "`(110 <= x and x <= 120) or x % 7 == 0`"
  },
  {
    thema: "Boolesche Ausdrücke",
    frage: "x ist negativ oder größer als 100.",
    antwort: "`x < 0 or x > 100`"
  },
  {
    thema: "Boolesche Ausdrücke",
    frage: "x ist durch 3 teilbar, aber nicht durch 9.",
    antwort: "`x % 3 == 0 and x % 9 != 0`"
  },
  {
    thema: "Boolesche Ausdrücke",
    frage: "x ist gerade und liegt zwischen 1 und 50 (einschließlich).",
    antwort: "`x % 2 == 0 and 1 <= x and x <= 50`"
  },
  {
    thema: "Boolesche Ausdrücke",
    frage: "x liegt **nicht** zwischen 10 und 20 (einschließlich).",
    antwort: "`x < 10 or x > 20`\n\noder `not (10 <= x and x <= 20)`"
  },
  {
    thema: "Boolesche Ausdrücke",
    frage: "`x > 10 and x % 5 == 0`\n\nWahr oder falsch für x = 10, x = 15, x = 22?",
    antwort: "x = 10 → falsch (nicht größer als 10)\nx = 15 → wahr\nx = 22 → falsch (nicht durch 5 teilbar)"
  },
  {
    thema: "Boolesche Ausdrücke",
    frage: "`(110 <= x and x <= 120) or x % 7 == 0`\n\nWahr oder falsch für x = 14, x = 115, x = 121?",
    antwort: "x = 14 → wahr (durch 7 teilbar)\nx = 115 → wahr (im Bereich)\nx = 121 → falsch"
  },

  // ---------- while-Schleife ----------
  {
    thema: "while-Schleife",
    frage: "Welche drei Teile braucht eine while-Schleife, die hochzählt?",
    antwort: "1. **Startwert** vor der Schleife: `x = 5`\n2. **Bedingung**: `while x <= 12:`\n3. **Veränderung** im Rumpf: `x += 1`"
  },
  {
    thema: "while-Schleife",
    frage: "Wann entsteht eine **Endlosschleife**?",
    antwort: "Wenn sich im Rumpf nichts ändert, was die Bedingung beeinflusst. Die Bedingung bleibt dann immer `True`."
  },
  {
    thema: "while-Schleife",
    frage: "Gib mit einer while-Schleife die Zahlen von 5 bis 12 aus.",
    antwort: "```\nx = 5\nwhile x <= 12:\n    print(x)\n    x += 1\n```"
  },
  {
    thema: "while-Schleife",
    frage: "Gib mit einer while-Schleife die Zahlen von 20 bis 10 aus (rückwärts).",
    antwort: "```\nx = 20\nwhile x >= 10:\n    print(x)\n    x -= 1\n```"
  },
  {
    thema: "while-Schleife",
    frage: "Gib mit einer while-Schleife die geraden Zahlen von 2 bis 20 aus.",
    antwort: "```\nx = 2\nwhile x <= 20:\n    print(x)\n    x += 2\n```"
  },
  {
    thema: "while-Schleife",
    frage: "Wie oft wird der Rumpf ausgeführt?\n```\nx = 5\nwhile x < 5:\n    x += 1\n```",
    antwort: "**Keinmal.** Die Bedingung wird vor dem ersten Durchlauf geprüft und ist sofort falsch."
  },
  {
    thema: "while-Schleife",
    frage: "Was wird ausgegeben?\n```\nx = 17\nprint(x)\nwhile x >= 10:\n    x -= 3\nprint(x)\n```",
    antwort: "```\n17\n8\n```\nDas zweite `print` steht nach der Schleife. x: 17 → 14 → 11 → 8"
  },
  {
    thema: "while-Schleife",
    frage: "Was wird ausgegeben?\n```\nx = 17\nwhile x >= 10:\n    x -= 3\n    print(x)\n```",
    antwort: "```\n14\n11\n8\n```\nHier steht das `print` in der Schleife."
  },
  {
    thema: "while-Schleife",
    frage: "Was wird ausgegeben?\n```\nx = 30\nwhile x > 10:\n    x -= 7\nprint(x)\n```",
    antwort: "```\n9\n```\nx: 30 → 23 → 16 → 9"
  },
  {
    thema: "while-Schleife",
    frage: "Was wird ausgegeben?\n```\nx = 1\nwhile x < 20:\n    x = x * 3\n    print(x)\n```",
    antwort: "```\n3\n9\n27\n```\nBei x = 9 ist die Bedingung noch wahr, also wird noch 27 berechnet."
  },

  // ---------- for und range ----------
  {
    thema: "for und range",
    frage: "Welche Zahlen liefert `range(5)`?",
    antwort: "0, 1, 2, 3, 4"
  },
  {
    thema: "for und range",
    frage: "Welche Zahlen liefert `range(2, 5)`?",
    antwort: "2, 3, 4\n\nDer Endwert wird nicht mitgenommen."
  },
  {
    thema: "for und range",
    frage: "Welche Zahlen liefert `range(3, 9, 2)`?",
    antwort: "3, 5, 7"
  },
  {
    thema: "for und range",
    frage: "Welche Zahlen liefert `range(5, -1, -1)`?",
    antwort: "5, 4, 3, 2, 1, 0"
  },
  {
    thema: "for und range",
    frage: "Du willst mit `range` aufwärts bis z zählen. Welchen Endwert schreibst du? Und abwärts?",
    antwort: "Aufwärts: **z + 1**\nAbwärts (Schrittweite negativ): **z − 1**\n\nDer Endwert selbst wird nie mitgenommen."
  },
  {
    thema: "for und range",
    frage: "Welcher `range`-Aufruf liefert die Zahlen von 5 bis 12?",
    antwort: "`range(5, 13)`"
  },
  {
    thema: "for und range",
    frage: "Welcher `range`-Aufruf liefert die Zahlen von 11 bis 7 (rückwärts)?",
    antwort: "`range(11, 6, -1)`"
  },
  {
    thema: "for und range",
    frage: "Welcher `range`-Aufruf liefert 3, 6, 9, …, 30?",
    antwort: "`range(3, 31, 3)`"
  },
  {
    thema: "for und range",
    frage: "Welcher `range`-Aufruf liefert 20, 18, 16, …, 0?",
    antwort: "`range(20, -1, -2)`"
  },
  {
    thema: "for und range",
    frage: "Welcher `range`-Aufruf liefert 10, 20, 30, …, 100?",
    antwort: "`range(10, 101, 10)`"
  },
  {
    thema: "for und range",
    frage: "Gib mit einer for-Schleife die Zahlen von 5 bis 12 aus.",
    antwort: "```\nfor x in range(5, 13):\n    print(x)\n```"
  },
  {
    thema: "for und range",
    frage: "Was wird ausgegeben?\n```\ni = 2\nfor k in range(i):\n    print(i+k)\n```",
    antwort: "```\n2\n3\n```\nk ist 0 und 1."
  },
  {
    thema: "for und range",
    frage: "Was wird ausgegeben?\n```\ni = 5\nfor k in range(3):\n    print(i)\n```",
    antwort: "```\n5\n5\n5\n```\nAusgegeben wird `i`, nicht `k`."
  },
  {
    thema: "for und range",
    frage: "Was wird ausgegeben?\n```\ni = 3\nfor k in range(1, i):\n    print(k * i)\n```",
    antwort: "```\n3\n6\n```\nk ist 1 und 2."
  },
  {
    thema: "for und range",
    frage: "Was wird ausgegeben?\n```\ns = 0\nfor k in range(4):\n    s += k\nprint(s)\n```",
    antwort: "```\n6\n```\n0 + 1 + 2 + 3"
  },
  {
    thema: "for und range",
    frage: "Was wird ausgegeben?\n```\nfor k in range(10, 0, -3):\n    print(k)\n```",
    antwort: "```\n10\n7\n4\n1\n```"
  },
  {
    thema: "for und range",
    frage: "Wann nimmt man eher eine for-Schleife, wann eine while-Schleife?",
    antwort: "for: wenn die Anzahl der Durchläufe bekannt ist\nwhile: wenn sie vorher nicht bekannt ist"
  },

  // ---------- break und continue ----------
  {
    thema: "break und continue",
    frage: "Was bewirkt `continue`?",
    antwort: "Der **laufende Durchgang** wird beendet, die Schleife macht mit dem nächsten Durchgang weiter."
  },
  {
    thema: "break und continue",
    frage: "Was bewirkt `break`?",
    antwort: "Die **Schleife wird sofort verlassen**, es geht hinter der Schleife weiter."
  },
  {
    thema: "break und continue",
    frage: "Wie endet eine Schleife `while True:`?",
    antwort: "Nur durch ein `break`."
  },
  {
    thema: "break und continue",
    frage: "In einer for-Schleife über `i`: Überspringe alle Zahlen, die durch 5 teilbar sind.",
    antwort: "```\nif i % 5 == 0:\n    continue\n```"
  },
  {
    thema: "break und continue",
    frage: "In einer for-Schleife über `i`: Brich ab, sobald `i` größer als 20 ist.",
    antwort: "```\nif i > 20:\n    break\n```"
  },
  {
    thema: "break und continue",
    frage: "Warum müssen `continue` und `break` **vor** dem `print` stehen?",
    antwort: "Sonst wird die Zahl ausgegeben, bevor übersprungen oder abgebrochen wird."
  },
  {
    thema: "break und continue",
    frage: "Welche Zahlen werden ausgegeben?\n```\nfor i in range(1, 31):\n    if i % 5 == 0:\n        continue\n    if i > 20:\n        break\n    print(i)\n```",
    antwort: "1–4, 6–9, 11–14, 16–19\n\nDie 20 wird übersprungen, bei 21 wird abgebrochen."
  },
  {
    thema: "break und continue",
    frage: "Welche Zahlen werden ausgegeben?\n```\nfor i in range(1, 51):\n    if i % 3 == 0:\n        continue\n    if i > 10:\n        break\n    print(i)\n```",
    antwort: "1, 2, 4, 5, 7, 8, 10"
  },
  {
    thema: "break und continue",
    frage: "Was wird ausgegeben?\n```\nfor i in range(1, 10):\n    if i == 6:\n        break\n    if i % 2 == 0:\n        continue\n    print(i)\n```",
    antwort: "```\n1\n3\n5\n```"
  }
]);
