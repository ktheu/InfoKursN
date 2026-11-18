// Lernkarten Fehler, wird von lernkarten/index.html geladen
// Kleine Karten zu Fehlerarten, Debugger und einfachen Algorithmen (Liste durchlaufen, lineare Suche, Bubblesort)
// Formatierung in frage/antwort: **fett**, __unterstrichen__, `code`,
// Codeblock mit ``` ... ```, Tabellenzeilen | a | b |, Bild ![Beschreibung](datei.png), Zeilenumbruch mit \n

lernkarten("Fehler", [
  {
    thema: "Fehlerarten",
    frage: "Beim Programmieren unterscheiden wir drei Arten von Fehlern. Nenne sie.",
    antwort: "**Syntaxfehler**, **Laufzeitfehler** und **logischer Fehler**."
  },
  {
    thema: "Fehlerarten",
    frage: "Bei welcher Fehlerart wird **keine einzige Zeile** des Programms ausgeführt?",
    antwort: "**Syntaxfehler**. Python prüft das ganze Programm, bevor es etwas ausführt."
  },
  {
    thema: "Fehlerarten",
    frage: "Ein Programm startet, bricht dann aber mit einer Fehlermeldung ab. Welche Fehlerart liegt vor?",
    antwort: "Ein **Laufzeitfehler**."
  },
  {
    thema: "Fehlerarten",
    frage: "Ein Programm läuft ohne Fehlermeldung bis zum Ende, gibt aber ein falsches Ergebnis aus. Welche Fehlerart liegt vor?",
    antwort: "Ein **logischer Fehler**."
  },
  {
    thema: "Fehlerarten",
    frage: "Die Zeile `durchschnitt = 10 + 20 / 2` soll den Durchschnitt von 10 und 20 berechnen. Welche Fehlerart liegt vor? Korrigiere die Zeile.",
    antwort: "Ein **logischer Fehler**: Punkt- vor Strichrechnung, es kommt `20.0` statt `15.0` heraus.\n`durchschnitt = (10 + 20) / 2`"
  },
  {
    thema: "Syntaxfehler",
    frage: "Nenne die zwei Fehlertypen, die Python bei einem Syntaxfehler meldet, und wann sie jeweils auftreten.",
    antwort: "**SyntaxError**: z. B. fehlt eine Klammer, ein Hochkomma oder ein Doppelpunkt.\n**IndentationError**: die Einrückung ist falsch."
  },
  {
    thema: "Syntaxfehler",
    frage: "Gib den Fehlertyp an und korrigiere die Zeile.\n```\nprint(\"Hello World\"\n```",
    antwort: "**SyntaxError**, die schließende Klammer fehlt.\n`print(\"Hello World\")`"
  },
  {
    thema: "Syntaxfehler",
    frage: "Gib den Fehlertyp an und korrigiere die Zeile.\n```\ns = 'Montag\n```",
    antwort: "**SyntaxError**, das schließende Hochkomma fehlt.\n`s = 'Montag'`"
  },
  {
    thema: "Syntaxfehler",
    frage: "Gib den Fehlertyp an und korrigiere den Code.\n```\ndef greet():\nprint(\"Hello\")\n```",
    antwort: "**IndentationError**, nach dem Doppelpunkt fehlt die Einrückung.\n```\ndef greet():\n    print(\"Hello\")\n```"
  },
  {
    thema: "Syntaxfehler",
    frage: "Gib den Fehlertyp an und korrigiere die Zeile.\n```\n1x = 'Hallo'\n```",
    antwort: "**SyntaxError**, ein Variablenname darf nicht mit einer Ziffer beginnen.\n`x1 = 'Hallo'`"
  },
  {
    thema: "Syntaxfehler",
    frage: "Gib den Fehlertyp an und korrigiere den Code.\n```\nif x > 2\n    print(x)\n```",
    antwort: "**SyntaxError**, nach der Bedingung fehlt der Doppelpunkt.\n`if x > 2:`"
  },
  {
    thema: "Syntaxfehler",
    frage: "Gib den Fehlertyp an und korrigiere den Code.\n```\nif x % 2 = 0:\n    print('gerade')\n```",
    antwort: "**SyntaxError**, für den Vergleich braucht man `==`, `=` ist die Zuweisung.\n`if x % 2 == 0:`"
  },
  {
    thema: "Syntaxfehler",
    frage: "Python meldet einen Syntaxfehler in Zeile 3, aber Zeile 3 sieht richtig aus. Wo solltest du suchen?",
    antwort: "In der **Zeile davor**. Fehlt dort zum Beispiel eine Klammer, bemerkt Python das oft erst in der nächsten Zeile."
  },
  {
    thema: "Laufzeitfehler",
    frage: "Ein Programm bricht in Zeile 5 mit einem Laufzeitfehler ab. Wurden die Zeilen 1 bis 4 ausgeführt?",
    antwort: "Ja. Bei einem Laufzeitfehler werden alle Anweisungen **vor** der fehlerhaften Stelle ausgeführt."
  },
  {
    thema: "Laufzeitfehler",
    frage: "Wie heißt die Fehlermeldung bei einem Laufzeitfehler, und wo darin stehen Art und Beschreibung des Fehlers?",
    antwort: "Sie heißt **Traceback**. Art und Beschreibung des Fehlers stehen in der **letzten Zeile**."
  },
  {
    thema: "Laufzeitfehler",
    frage: "Welcher Laufzeitfehler tritt auf? Erkläre kurz, warum.\n```\na = [1, 2, 3]\nprint(a[3])\n```",
    antwort: "**IndexError**: Den Index 3 gibt es nicht, gültig sind 0 bis 2."
  },
  {
    thema: "Laufzeitfehler",
    frage: "Welcher Laufzeitfehler tritt auf? Erkläre kurz, warum.\n```\nx = 5 + \"10\"\n```",
    antwort: "**TypeError**: Eine Zahl und ein String können nicht mit `+` verknüpft werden."
  },
  {
    thema: "Laufzeitfehler",
    frage: "Welcher Laufzeitfehler tritt auf, wenn die Variable `message` vorher nicht belegt wurde?\n```\nprint(message)\n```",
    antwort: "**NameError**: Die Variable `message` ist nicht definiert."
  },
  {
    thema: "Laufzeitfehler",
    frage: "Welcher Laufzeitfehler tritt auf? Erkläre kurz, warum.\n```\nx = int(\"abc\")\n```",
    antwort: "**ValueError**: Der String `\"abc\"` lässt sich nicht in eine Ganzzahl umwandeln."
  },
  {
    thema: "Laufzeitfehler",
    frage: "Welcher Laufzeitfehler tritt auf?\n```\nx = 5 / 0\n```",
    antwort: "**ZeroDivisionError**: Division durch 0."
  },
  {
    thema: "Laufzeitfehler",
    frage: "Erkläre den Unterschied zwischen einem TypeError und einem ValueError.",
    antwort: "**TypeError**: Die Operation passt nicht zu den Typen, z. B. `5 + \"10\"`.\n**ValueError**: Der Typ stimmt, aber der Wert ist ungültig, z. B. `int(\"abc\")`."
  },
  {
    thema: "Laufzeitfehler",
    frage: "Welcher Laufzeitfehler tritt bei `int('2.5')` auf, und wie wandelt man den String richtig in eine Zahl um?",
    antwort: "**ValueError**, weil `'2.5'` keine Ganzzahl ist. Richtig: `float('2.5')`"
  },
  {
    thema: "Laufzeitfehler",
    frage: "Welcher Laufzeitfehler tritt auf, und warum?\n```\nsumme = 0\nfor zahl in [4, 5, 6]:\n    summe += zahl\nprint(Summe)\n```",
    antwort: "**NameError**: `Summe` ist nicht definiert. Python unterscheidet Groß- und Kleinschreibung, die Variable heißt `summe`."
  },
  {
    thema: "Laufzeitfehler",
    frage: "Der Code soll die Summen benachbarter Elemente ausgeben. Welcher Laufzeitfehler tritt auf, und wie korrigiert man die Kopfzeile der Schleife?\n```\na = [3, 7, 2, 9]\nfor i in range(len(a)):\n    print(a[i] + a[i + 1])\n```",
    antwort: "**IndexError**: Bei `i = 3` gibt es `a[4]` nicht.\n`for i in range(len(a) - 1):`"
  },
  {
    thema: "Logische Fehler",
    frage: "Nenne drei Vorgehensweisen, mit denen man einen logischen Fehler findet.",
    antwort: "1. Mit Werten testen, bei denen man das **richtige Ergebnis kennt**.\n2. **print-Anweisungen** einbauen und Zwischenwerte mit der Erwartung vergleichen.\n3. Den **Debugger** benutzen."
  },
  {
    thema: "Logische Fehler",
    frage: "Gib eine print-Anweisung mit f-String an, die Name und Wert der Variablen `i` und `summe` ausgibt, zum Beispiel `i=3 summe=6`.",
    antwort: "`print(f'{i=} {summe=}')`"
  },
  {
    thema: "Logische Fehler",
    frage: "Die Variable `x` hat den Wert 5. Was gibt `print(f'{x=}')` aus?",
    antwort: "`x=5`"
  },
  {
    thema: "Logische Fehler",
    frage: "Der Code soll die Zahlen von 1 bis 4 addieren, gibt aber 6 aus. Korrigiere ihn.\n```\nsumme = 0\nfor i in range(1, 4):\n    summe += i\nprint(summe)\n```",
    antwort: "`range(1, 4)` liefert nur 1, 2, 3. Richtig ist `for i in range(1, 5):`"
  },
  {
    thema: "Logische Fehler",
    frage: "Der Code soll den Durchschnitt berechnen, gibt aber `0.5` statt `5.0` aus. Erkläre die Ausgabe und korrigiere den Fehler.\n```\na = [4, 8, 6, 2]\nfor x in a:\n    summe = 0\n    summe += x\nprint(summe / len(a))\n```",
    antwort: "`summe = 0` wird in jedem Durchlauf zurückgesetzt, am Ende ist `summe` nur das letzte Element 2, also 2 / 4 = 0.5.\n`summe = 0` gehört **vor** die Schleife."
  },
  {
    thema: "Logische Fehler",
    frage: "Der Code soll nur die Zahlen von 10 bis 20 (einschließlich) ausgeben, gibt aber alle aus. Korrigiere die Bedingung.\n```\nfor x in [5, 12, 25, 18]:\n    if x >= 10 or x <= 20:\n        print(x)\n```",
    antwort: "Jede Zahl ist größer gleich 10 **oder** kleiner gleich 20. Beide Bedingungen müssen gelten:\n`if x >= 10 and x <= 20:`"
  },
  {
    thema: "Debugger",
    frage: "Wozu dient ein Debugger?",
    antwort: "Mit einem Debugger lässt man ein Programm **Schritt für Schritt** ablaufen und beobachtet dabei die **Werte der Variablen**. So findet man vor allem logische Fehler."
  },
  {
    thema: "Debugger",
    frage: "Was bewirkt **Einzelschritt** im Debugger?",
    antwort: "Es wird **eine** Anweisung ausgeführt, danach sieht man die aktuellen Werte der Variablen."
  },
  {
    thema: "Debugger",
    frage: "Im Debugger von Thonny ist eine Zeile gelb markiert. Ist diese Anweisung schon ausgeführt?",
    antwort: "Nein. Die gelb markierte Zeile ist die **nächste** auszuführende Anweisung."
  },
  {
    thema: "Debugger",
    frage: "Was bewirkt **Eintreten** im Debugger?",
    antwort: "Die Anweisung wird in kleinere Teile zerlegt, zum Beispiel wird erst ein Ausdruck wie `x + 3*y` ausgewertet. So kann man die Auswertung genauer verfolgen."
  },
  {
    thema: "Debugger",
    frage: "Was ist ein **Breakpoint**, und wann ist er praktisch?",
    antwort: "Eine markierte Zeile (roter Punkt), an der das Programm im Debugger **anhält**. Praktisch, wenn bei einem längeren Programm nur ein bestimmter Teil interessiert."
  },
  {
    thema: "Debugger",
    frage: "Was bewirkt **Fortfahren** im Debugger?",
    antwort: "Das Programm läuft bis zum **nächsten Breakpoint** bzw. bis zum Ende."
  },
  {
    thema: "Debugger",
    frage: "Gib die Werte von `x` und `y` nach jedem Durchlauf der Schleife an. Was wird ausgegeben?\n```\nx = 1\ny = 10\nwhile x < y:\n    x = x * 2\n    y = y - 1\nprint(x, y)\n```",
    antwort: "| Durchlauf | x | y |\n| 1 | 2 | 9 |\n| 2 | 4 | 8 |\n| 3 | 8 | 7 |\nAusgabe: `8 7`"
  },
  {
    thema: "Liste durchlaufen",
    frage: "Viele Algorithmen durchlaufen eine Liste und sammeln das Ergebnis in einer Variablen. Wo wird diese Variable mit ihrem Startwert belegt?",
    antwort: "**Vor** der Schleife."
  },
  {
    thema: "Liste durchlaufen",
    frage: "Schreibe Code, der die Summe aller Zahlen der Liste `a` berechnet und ausgibt, ohne `sum()` zu verwenden.",
    antwort: "```\nsumme = 0\nfor x in a:\n    summe += x\nprint(summe)\n```"
  },
  {
    thema: "Liste durchlaufen",
    frage: "Welchen Startwert braucht eine Variable, in der das **Produkt** aller Zahlen einer Liste gesammelt wird? Warum nicht 0?",
    antwort: "Den Startwert **1**. Mit 0 wäre das Produkt immer 0."
  },
  {
    thema: "Liste durchlaufen",
    frage: "Schreibe Code, der zählt, wie viele Zahlen der Liste `a` durch 4 teilbar sind, und die Anzahl ausgibt.",
    antwort: "```\nzaehl = 0\nfor x in a:\n    if x % 4 == 0:\n        zaehl += 1\nprint(zaehl)\n```"
  },
  {
    thema: "Liste durchlaufen",
    frage: "Wie viele Zahlen der Liste `[14, 21, 8, 33, 12, 5, 40]` sind durch 4 teilbar?",
    antwort: "**3**, nämlich 8, 12 und 40."
  },
  {
    thema: "Liste durchlaufen",
    frage: "Aus `a = [2, 4, 9, 12, 1, 5]` wird eine Liste `b` gebildet, in der an jeder Stelle die Summe aller Zahlen bis dorthin steht. Gib `b` an.",
    antwort: "`[2, 6, 15, 27, 28, 33]`"
  },
  {
    thema: "Liste durchlaufen",
    frage: "Es gilt `b = []` und `teilsumme = 0`. Gib den Rumpf der Schleife `for x in a:` an, der `b` mit den Teilsummen von `a` füllt.",
    antwort: "```\n    teilsumme += x\n    b.append(teilsumme)\n```"
  },
  {
    thema: "Liste durchlaufen",
    frage: "Wie viele Zahlen der Liste `[2, 4, 9, 12, 1, 5]` haben einen kleineren Vorgänger?",
    antwort: "**4**, nämlich 4, 9, 12 und 5."
  },
  {
    thema: "Liste durchlaufen",
    frage: "Jedes Element `a[i]` wird mit seinem **Vorgänger** `a[i-1]` verglichen. Gib die Kopfzeile der for-Schleife an und begründe den Startwert.",
    antwort: "`for i in range(1, len(a)):`\nDie Schleife beginnt bei Index 1, weil das erste Element keinen Vorgänger hat."
  },
  {
    thema: "Liste durchlaufen",
    frage: "Jedes Element `a[i]` wird mit seinem **Nachfolger** `a[i+1]` verglichen. Gib die Kopfzeile der for-Schleife an und begründe das Ende.",
    antwort: "`for i in range(len(a) - 1):`\nDas letzte Element hat keinen Nachfolger, sonst gäbe es einen IndexError."
  },
  {
    thema: "Liste durchlaufen",
    frage: "Wie viele Zahlen der Liste `[5, 9, 3, 12, 7, 7, 2]` haben einen größeren Nachfolger?",
    antwort: "**2**, nämlich 5 (vor 9) und 3 (vor 12)."
  },
  {
    thema: "Lineare Suche",
    frage: "Die lineare Suche findet ein besonderes Element einer Liste, z. B. das größte. Beschreibe die Idee.",
    antwort: "Das erste Element ist **vorläufig** das beste. Dann wird jedes Element geprüft, ob es besser ist als das bisher beste. Wenn ja, merkt man es sich."
  },
  {
    thema: "Lineare Suche",
    frage: "Bei der Suche nach dem größten Element beginnt man mit `best = a[0]`. Warum nicht mit `best = 0`?",
    antwort: "Bei einer Liste mit lauter negativen Zahlen käme sonst 0 heraus, obwohl 0 gar nicht in der Liste steht. Bei `[-8, -2, -15]` z. B. 0 statt -2."
  },
  {
    thema: "Lineare Suche",
    frage: "Schreibe Code, der mit linearer Suche das kleinste Element der Liste `a` findet und ausgibt, ohne `min()` zu verwenden.",
    antwort: "```\nbest = a[0]\nfor x in a:\n    if x < best:\n        best = x\nprint(best)\n```"
  },
  {
    thema: "Lineare Suche",
    frage: "Bei der linearen Suche nutzt man manchmal zwei Variablen `best` und `best_val`. Wann, und was speichert jede?",
    antwort: "Wenn das, was ein Element zum besten macht, **nicht sein eigener Wert** ist. `best` speichert das Element, `best_val` den Wert des Merkmals."
  },
  {
    thema: "Lineare Suche",
    frage: "Gesucht ist das Element der Liste `a` mit dem größten Rest bei der Division durch 5. Gib die zwei Zeilen vor der Schleife an, die `best` und `best_val` belegen.",
    antwort: "```\nbest = a[0]\nbest_val = a[0] % 5\n```"
  },
  {
    thema: "Lineare Suche",
    frage: "Gesucht ist das Element mit dem größten Rest bei der Division durch 5. Gib die if-Anweisung mit Rumpf in der Schleife `for x in a:` an.",
    antwort: "```\n    if x % 5 > best_val:\n        best_val = x % 5\n        best = x\n```"
  },
  {
    thema: "Lineare Suche",
    frage: "Welches Element der Liste `[8, 15, 22, 6, 19, 30]` hat den größten Rest bei der Division durch 5?",
    antwort: "**19**, mit Rest 4."
  },
  {
    thema: "Lineare Suche",
    frage: "Die lineare Suche mit `if x % 7 > best_val:` sucht in `[3, 4, 3, 8, 12, 52, 35, 17, 33]` das Element mit dem größten Rest bei der Division durch 7. Welches Element wird ausgegeben?",
    antwort: "**12**, mit Rest 5. Die 33 hat auch Rest 5, wird aber wegen `>` nicht übernommen."
  },
  {
    thema: "Lineare Suche",
    frage: "Gesucht ist das Element, das am nächsten an der Zahl 20 liegt. Gib einen Ausdruck an, der den Abstand von `x` zu 20 angibt.",
    antwort: "`abs(x - 20)`\nGesucht ist das Element, bei dem dieser Wert am **kleinsten** ist."
  },
  {
    thema: "Lineare Suche",
    frage: "Welches Element der Liste `[3, 27, 14, 8, 41, 19]` liegt am nächsten an der Zahl 20?",
    antwort: "**19**, mit Abstand 1."
  },
  {
    thema: "Lineare Suche",
    frage: "Die Suche nach dem größten Element soll auch dessen **Index** `best_index` liefern. Gib die Kopfzeile der for-Schleife an.",
    antwort: "`for i in range(len(a)):`\nMan braucht die Indizes, deshalb läuft die Schleife über `range`."
  },
  {
    thema: "Lineare Suche",
    frage: "Gib die if-Anweisung mit Rumpf in der Schleife `for i in range(len(a)):` an, die das größte Element `best` und seinen Index `best_index` aktualisiert.",
    antwort: "```\n    if a[i] > best:\n        best = a[i]\n        best_index = i\n```"
  },
  {
    thema: "Lineare Suche",
    frage: "Welchen Index hat das größte Element der Liste `[3, 4, 3, 8, 12, 52, 35, 17, 33]`?",
    antwort: "Den Index **5** (Element 52)."
  },
  {
    thema: "Bubblesort",
    frage: "Bubblesort ist ein einfacher Sortieralgorithmus. Beschreibe die Idee für eine aufsteigende Sortierung.",
    antwort: "Man geht die Liste von vorne nach hinten durch und vergleicht jedes Element mit seinem Nachfolger. Ist der Nachfolger kleiner, werden beide **vertauscht**. Das wiederholt man, bis in einem Durchgang **nichts mehr getauscht** wird."
  },
  {
    thema: "Bubblesort",
    frage: "Woher hat Bubblesort seinen Namen?",
    antwort: "Bei jedem Durchgang wandert das größte noch unsortierte Element ans Ende, wie eine Blase (bubble), die nach oben steigt."
  },
  {
    thema: "Bubblesort",
    frage: "Gib die Zeile an, mit der die Nachbarn `a[i]` und `a[i+1]` vertauscht werden.",
    antwort: "`a[i], a[i+1] = a[i+1], a[i]`"
  },
  {
    thema: "Bubblesort",
    frage: "Gib die Bedingung der if-Anweisung an, mit der Bubblesort **aufsteigend** sortiert.",
    antwort: "`if a[i] > a[i+1]:`"
  },
  {
    thema: "Bubblesort",
    frage: "Im Bubblesort-Code steht `while getauscht:`. Welchen Wert bekommt `getauscht` zu Beginn jedes Durchgangs, und warum?",
    antwort: "`getauscht = False`. Wird im Durchgang nichts getauscht, bleibt es False, und die while-Schleife endet."
  },
  {
    thema: "Bubblesort",
    frage: "Was muss im Bubblesort-Code nach einem Tausch mit der Variablen `getauscht` passieren, und warum?",
    antwort: "`getauscht = True`, damit noch ein weiterer Durchgang stattfindet."
  },
  {
    thema: "Bubblesort",
    frage: "Warum läuft die innere Schleife bei Bubblesort nur über `range(len(a)-1)`?",
    antwort: "Weil `a[i]` mit `a[i+1]` verglichen wird. Beim letzten Element gäbe es `a[i+1]` nicht, das wäre ein IndexError."
  },
  {
    thema: "Bubblesort",
    frage: "Die Liste `[6, 2, 5, 1]` wird mit Bubblesort aufsteigend sortiert. Gib die Liste nach dem **ersten** Durchgang an.",
    antwort: "`[2, 5, 1, 6]`"
  },
  {
    thema: "Bubblesort",
    frage: "Nach dem ersten Bubblesort-Durchgang ist die Liste `[2, 5, 1, 6]`. Gib die Liste nach dem **zweiten** Durchgang an.",
    antwort: "`[2, 1, 5, 6]`"
  },
  {
    thema: "Bubblesort",
    frage: "Wie viele Durchgänge der while-Schleife braucht Bubblesort für die Liste `[6, 2, 5, 1]`, und wie oft wird insgesamt getauscht?",
    antwort: "**4 Durchgänge**, insgesamt **5 Tausche**. Erst im 4. Durchgang wird nichts mehr getauscht, dann ist klar, dass die Liste sortiert ist."
  },
  {
    thema: "Bubblesort",
    frage: "Die Liste `[15, 23, 4, 42, 8, 16]` wird mit Bubblesort aufsteigend sortiert. Gib die Liste nach dem **ersten** Durchgang an.",
    antwort: "`[15, 4, 23, 8, 16, 42]`"
  },
  {
    thema: "Bubblesort",
    frage: "Wie viele Durchgänge der while-Schleife braucht Bubblesort für eine Liste, die schon sortiert ist?",
    antwort: "**Einen**. Es wird nichts getauscht, `getauscht` bleibt False, und die Schleife endet."
  }
]);
