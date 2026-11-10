// Lernkarten Listen, wird von lernkarten/index.html geladen
// Kleine Karten zu Datentypen, Listen, Zufall, Funktionen und Dateien, ohne Stift und Papier lösbar
// Formatierung in frage/antwort: **fett**, __unterstrichen__, `code`,
// Codeblock mit ``` ... ```, Tabellenzeilen | a | b |, Bild ![Beschreibung](datei.png), Zeilenumbruch mit \n

lernkarten("Listen", [
  // ---------- Datentypen ----------
  {
    thema: "Datentypen",
    frage: "Jeder Wert hat einen Datentyp. Nenne die vier Datentypen mit ihren Python-Namen, die wir bisher kennen.",
    antwort: "`int` (Ganzzahl), `float` (Gleitkommazahl), `str` (Zeichenkette), `bool` (Wahrheitswert)."
  },
  {
    thema: "Datentypen",
    frage: "Welche Funktion gibt den Datentyp eines Wertes aus?",
    antwort: "`type()`, zum Beispiel `print(type(5))`."
  },
  {
    thema: "Datentypen",
    frage: "Welchen Datentyp hat `x` nach `x = 2.5`?",
    antwort: "`float` (Gleitkommazahl)."
  },
  {
    thema: "Datentypen",
    frage: "Welchen Datentyp hat `s` nach `s = '5'`?",
    antwort: "`str` (Zeichenkette). Die Anführungszeichen machen die 5 zum Text."
  },
  {
    thema: "Datentypen",
    frage: "Welchen Datentyp hat `b` nach `b = True`?",
    antwort: "`bool` (Wahrheitswert)."
  },
  {
    thema: "Datentypen",
    frage: "Wozu braucht man die Typumwandlung zum Beispiel bei `input()`?",
    antwort: "`input()` liefert immer einen **String**. Will man damit rechnen, muss man ihn mit `int()` oder `float()` in eine Zahl umwandeln."
  },
  {
    thema: "Datentypen",
    frage: "Wandle den String `s = '42'` in eine Ganzzahl um und weise sie der Variablen `n` zu.",
    antwort: "`n = int(s)`"
  },
  {
    thema: "Datentypen",
    frage: "Wandle die Ganzzahl `n = 42` in einen String um und weise ihn der Variablen `s` zu.",
    antwort: "`s = str(n)`"
  },
  {
    thema: "Datentypen",
    frage: "Was ergibt `float('3.14')`, und welchen Datentyp hat das Ergebnis?",
    antwort: "`3.14`, Datentyp `float`."
  },
  {
    thema: "Datentypen",
    frage: "Was ergibt `int(3.9)`?",
    antwort: "`3`. Die Nachkommastellen werden **abgeschnitten**, es wird nicht gerundet."
  },
  {
    thema: "Datentypen",
    frage: "Was passiert bei `int('Hallo')`?",
    antwort: "Das Programm bricht mit einem **ValueError** ab, weil sich der String nicht in eine Zahl umwandeln lässt."
  },
  {
    thema: "Datentypen",
    frage: "Was ergibt `str(42) + '!'`?",
    antwort: "Den String `'42!'`."
  },

  // ---------- Listen ----------
  {
    thema: "Listen",
    frage: "Wozu dient eine Liste, und wie schreibt man sie in Python?",
    antwort: "In einer Liste speichert man **mehrere Werte unter einem Namen**. Die Werte heißen Elemente, sie stehen in eckigen Klammern, durch Kommas getrennt: `a = [1, 2, 3]`"
  },
  {
    thema: "Listen",
    frage: "Wie erzeugt man eine leere Liste `a`?",
    antwort: "`a = []`"
  },
  {
    thema: "Listen",
    frage: "Welche Funktion liefert die Anzahl der Elemente einer Liste `a`?",
    antwort: "`len(a)`"
  },
  {
    thema: "Listen",
    frage: "Was gibt `print(len(a))` nach `a = ['Montag', 'Dienstag', 'Mittwoch']` aus?",
    antwort: "`3`"
  },
  {
    thema: "Listen",
    frage: "Was gibt `print(type(a))` nach `a = [3, 5, 8]` aus?",
    antwort: "`<class 'list'>` – die Liste ist ein eigener Datentyp."
  },
  {
    thema: "Listen",
    frage: "Hänge die Zahl 8 am Ende der Liste `a` an.",
    antwort: "`a.append(8)`"
  },
  {
    thema: "Listen",
    frage: "Was gibt der Code aus?\n```\na = [3, 4, 5]\na.append(8)\nprint(a)\n```",
    antwort: "`[3, 4, 5, 8]`"
  },
  {
    thema: "Listen",
    frage: "Was gibt der Code aus?\n```\na = []\nfor i in range(5):\n    a.append(i)\nprint(a)\n```",
    antwort: "`[0, 1, 2, 3, 4]`"
  },

  // ---------- Indexing ----------
  {
    thema: "Indexing",
    frage: "Mit welcher Zahl beginnt der Index von vorne gezählt, und mit welcher von hinten gezählt?",
    antwort: "Von vorne mit `0`, von hinten mit `-1`."
  },
  {
    thema: "Indexing",
    frage: "Wie spricht man `a[4]`?",
    antwort: "„a an der Stelle 4“."
  },
  {
    thema: "Indexing",
    frage: "Gegeben `a = [7, 12, 1, 5, 0, 3, 5]`. Was ergibt `a[1]`?",
    antwort: "`12`, das zweite Element."
  },
  {
    thema: "Indexing",
    frage: "Gegeben `a = [7, 12, 1, 5, 0, 3, 5]`. Was ergibt `a[-2]`?",
    antwort: "`3`, das vorletzte Element."
  },
  {
    thema: "Indexing",
    frage: "Gegeben `a = [7, 12, 1, 5, 0, 3, 5]`. Was ergibt `a[1:3]`?",
    antwort: "`[12, 1]`. Slicing: Start bei Index 1, Ende bei Index 3 (ausschließlich)."
  },
  {
    thema: "Indexing",
    frage: "Gib zwei Ausdrücke an, die das letzte Element der Liste `a` liefern, ohne dass die Länge als konkrete Zahl bekannt ist.",
    antwort: "`a[-1]` und `a[len(a)-1]`"
  },
  {
    thema: "Indexing",
    frage: "Gegeben `a = [4, 6, 10, 2, 7, 18]`. Gib zwei Ausdrücke an, die das dritte Element liefern.",
    antwort: "`a[2]` und `a[-4]` (beide ergeben `10`)."
  },
  {
    thema: "Indexing",
    frage: "Welchen größten Index hat eine Liste mit 6 Elementen?",
    antwort: "`5`, allgemein `len(a)-1`."
  },
  {
    thema: "Indexing",
    frage: "Was ist der Unterschied zwischen Liste und String beim Verändern einzelner Elemente?",
    antwort: "Bei einer **Liste** kann man ein Element über den Index ändern (`a[0] = 9`), bei einem **String** nicht."
  },
  {
    thema: "Indexing",
    frage: "Setze das erste Element der Liste `a` auf 9.",
    antwort: "`a[0] = 9`"
  },
  {
    thema: "Indexing",
    frage: "Was gibt der Code aus?\n```\na = [7, 12, 1]\na[0] = 9\na.append(4)\nprint(a)\n```",
    antwort: "`[9, 12, 1, 4]`"
  },

  // ---------- Schleifen ----------
  {
    thema: "Schleifen über Listen",
    frage: "Gegeben die Liste `a`. Schreibe eine Schleife, deren Laufvariable `i` die Indizes durchläuft und dabei `a[i]` ausgibt.",
    antwort: "```\nfor i in range(len(a)):\n    print(a[i])\n```"
  },
  {
    thema: "Schleifen über Listen",
    frage: "Gegeben die Liste `a`. Schreibe eine Schleife, deren Laufvariable `k` direkt die Elemente durchläuft und sie ausgibt.",
    antwort: "```\nfor k in a:\n    print(k)\n```"
  },
  {
    thema: "Schleifen über Listen",
    frage: "Welche Zahlen nimmt `i` in `for i in range(len(a))` an, wenn `a` 5 Elemente hat?",
    antwort: "`0, 1, 2, 3, 4`"
  },
  {
    thema: "Schleifen über Listen",
    frage: "Welche Schleifenart braucht man, wenn man Elemente der Liste verändern will, und warum?",
    antwort: "Die Schleife über den **Index**, weil man zum Verändern `a[i] = ...` schreiben muss. Bei der Schleife über die Elemente kennt man den Index nicht."
  },
  {
    thema: "Schleifen über Listen",
    frage: "Welche Schleifenart ist einfacher, wenn man die Werte nur lesen will?",
    antwort: "Die Schleife über die **Elemente**: `for k in a:`. Sie ist kürzer."
  },
  {
    thema: "Schleifen über Listen",
    frage: "Erhöhe jedes Element der Liste `a` um 1.",
    antwort: "```\nfor i in range(len(a)):\n    a[i] = a[i] + 1\n```"
  },
  {
    thema: "Schleifen über Listen",
    frage: "Was gibt der Code aus?\n```\ns = 'Hund'\nfor c in s:\n    print(c)\n```",
    antwort: "Die Zeichen untereinander:\n```\nH\nu\nn\nd\n```"
  },
  {
    thema: "Schleifen über Listen",
    frage: "Berechne die Summe `summe` aller Elemente der Liste `a`.",
    antwort: "```\nsumme = 0\nfor x in a:\n    summe += x\n```"
  },
  {
    thema: "Schleifen über Listen",
    frage: "Zähle in der Variable `anzahl`, wie viele Elemente der Liste `a` negativ sind.",
    antwort: "```\nanzahl = 0\nfor x in a:\n    if x < 0:\n        anzahl += 1\n```"
  },
  {
    thema: "Schleifen über Listen",
    frage: "Was gibt der Code aus?\n```\na = [2, 4, 9]\nb = []\nt = 0\nfor x in a:\n    t += x\n    b.append(t)\nprint(b)\n```",
    antwort: "`[2, 6, 15]`\n\nb enthält die laufende Summe."
  },

  // ---------- Zufall ----------
  {
    thema: "Zufall",
    frage: "Wie lädt man das Modul für Zufallszahlen, und wie ruft man danach seine Funktionen auf?",
    antwort: "Mit `import random`. Aufruf mit `random.` davor, z. B. `random.random()`."
  },
  {
    thema: "Zufall",
    frage: "Was liefert `random.random()`?",
    antwort: "Eine Dezimalzahl x mit 0 ≤ x < 1."
  },
  {
    thema: "Zufall",
    frage: "Was liefert `random.randint(a, b)`, und welche Besonderheit gilt für die obere Grenze?",
    antwort: "Eine ganze Zahl n mit a ≤ n ≤ b. Anders als bei `range()` ist die obere Grenze **eingeschlossen**."
  },
  {
    thema: "Zufall",
    frage: "Was liefert `random.uniform(2, 10)`?",
    antwort: "Eine Dezimalzahl x mit 2 ≤ x ≤ 10."
  },
  {
    thema: "Zufall",
    frage: "Simuliere einen Würfelwurf und weise das Ergebnis der Variablen `wurf` zu.",
    antwort: "`wurf = random.randint(1, 6)`"
  },
  {
    thema: "Zufall",
    frage: "Gib 5 ganze Zufallszahlen zwischen 1 und 100 aus.",
    antwort: "```\nfor i in range(5):\n    print(random.randint(1, 100))\n```"
  },
  {
    thema: "Zufall",
    frage: "Was sind Pseudozufallszahlen?",
    antwort: "Zahlen, die von einem **Rechenverfahren** erzeugt werden. Sie sehen zufällig aus, die Folge wiederholt sich aber irgendwann."
  },
  {
    thema: "Zufall",
    frage: "Was bewirkt `random.seed(12)`?",
    antwort: "Es legt den **Startwert** des Zufallsgenerators fest. Bei jedem Programmlauf entsteht dann **dieselbe Zahlenfolge**."
  },
  {
    thema: "Zufall",
    frage: "Wozu ist `random.seed(...)` beim Testen praktisch?",
    antwort: "Ein Fehler, der bei bestimmten Zufallszahlen auftritt, lässt sich so **wiederholen**."
  },

  // ---------- Funktionen ----------
  {
    thema: "Funktionen",
    frage: "Wozu dienen Funktionen?",
    antwort: "Man fasst Codeabschnitte zu einer Einheit zusammen. Man schreibt sie **einmal** und kann sie beliebig oft **aufrufen**."
  },
  {
    thema: "Funktionen",
    frage: "Was bewirkt `return` in einer Funktion?",
    antwort: "Es gibt das Ergebnis zurück, und die Funktion ist **sofort beendet**."
  },
  {
    thema: "Funktionen",
    frage: "Wann wird der Rumpf einer Funktion ausgeführt?",
    antwort: "Erst beim **Aufruf**. Die Definition allein bewirkt noch nichts."
  },
  {
    thema: "Funktionen",
    frage: "Gegeben `def calc(x, y):`. Welche Werte haben `x` und `y` beim Aufruf `calc(3, 5)`?",
    antwort: "`x` hat den Wert 3 und `y` den Wert 5."
  },
  {
    thema: "Funktionen",
    frage: "Was gibt der Code aus?\n```\ndef calc(x, y):\n    z = x + y\n    z = 3*z + 1\n    return z\n\nprint(calc(3, 5))\n```",
    antwort: "`25`\n\nz = 3 + 5 = 8, dann z = 3·8 + 1 = 25."
  },
  {
    thema: "Funktionen",
    frage: "Gegeben `def f(breite, hoehe):` und der Aufruf `f(4, 5)`. Wie heißen `breite, hoehe` und wie `4, 5`?",
    antwort: "`breite, hoehe` sind die **Parameter**, `4, 5` sind die **Argumente**."
  },
  {
    thema: "Funktionen",
    frage: "Wie heißt die erste Zeile `def f(x):` einer Funktion, und wie heißen die eingerückten Zeilen darunter?",
    antwort: "Die erste Zeile heißt **Kopf**, die eingerückten Zeilen heißen **Rumpf**."
  },
  {
    thema: "Funktionen",
    frage: "Schreibe eine Funktion `ist_gerade(zahl)`, die `True` zurückgibt, wenn `zahl` gerade ist, sonst `False`.",
    antwort: "```\ndef ist_gerade(zahl):\n    return zahl % 2 == 0\n```"
  },
  {
    thema: "Funktionen",
    frage: "Schreibe eine Funktion `maximum(a, b)`, die die größere von zwei Zahlen zurückgibt, ohne `max()` zu verwenden.",
    antwort: "```\ndef maximum(a, b):\n    if a > b:\n        return a\n    return b\n```"
  },

  // ---------- docstring ----------
  {
    thema: "docstring",
    frage: "Was beschreibt man in einem docstring?",
    antwort: "Wie die Funktion **aufgerufen** wird (Parameter) und was sie **zurückgibt**. Beispiele für Aufrufe mit ihren Ergebnissen machen ihn besonders verständlich."
  },
  {
    thema: "docstring",
    frage: "Wo steht der docstring, und wie wird er geschrieben?",
    antwort: "Direkt **unter dem Kopf** der Funktion, in dreifachen Anführungszeichen `'''...'''`."
  },
  {
    thema: "docstring",
    frage: "Wie lässt man sich den docstring einer Funktion `div` anzeigen?",
    antwort: "`help(div)`"
  },
  {
    thema: "docstring",
    frage: "Wie schreibt man im docstring einen Beispielaufruf `mittelwert(4, 8)` mit seinem Ergebnis?",
    antwort: "```\n>>> mittelwert(4, 8)\n6.0\n```"
  },

  // ---------- Dateien lesen ----------
  {
    thema: "Dateien lesen",
    frage: "Was muss man vor dem Lesen aus einer Datei tun, und was danach?",
    antwort: "Vorher mit `open()` **öffnen**, danach mit `close()` **schließen**."
  },
  {
    thema: "Dateien lesen",
    frage: "Öffne die Datei `input1.txt` zum Lesen und weise sie der Variablen `f` zu.",
    antwort: "`f = open('input1.txt')`"
  },
  {
    thema: "Dateien lesen",
    frage: "Wenn wir unter `f` eine Datei geöffnet haben, wie liest man dann die erste Zeile, und welche Zeile liest man beim nächsten Aufruf?",
    antwort: "Mit `f.readline()`. Der nächste Aufruf liest die **nächste Zeile**."
  },
  {
    thema: "Dateien lesen",
    frage: "Was wird bei `readline()` am Ende der Zeile mitgelesen, und wie entfernt man es?",
    antwort: "Der **Zeilenvorschub**. Man entfernt ihn mit `strip()`: `s = f.readline().strip()`"
  },
  {
    thema: "Dateien lesen",
    frage: "Lies die nächste Zeile von `f` als ganze Zahl in `x` ein.",
    antwort: "`x = int(f.readline())`\n\n`int()` entfernt den Zeilenvorschub automatisch."
  },
  {
    thema: "Dateien lesen",
    frage: "Was kann man tun, wenn beim Lesen aus einer Datei Umlaute oder ß falsch dargestellt werden?",
    antwort: "Beim `open()` den Parameter `encoding='utf-8'` angeben: `f = open('input2.txt', encoding='utf-8')`"
  },

  // ---------- Dateien schreiben ----------
  {
    thema: "Dateien schreiben",
    frage: "Öffne die Datei `output.txt` zum Schreiben (mit Umlauten) und weise sie der Variablen `f` zu.",
    antwort: "`f = open('output.txt', encoding='utf-8', mode='w')`"
  },
  {
    thema: "Dateien schreiben",
    frage: "Was passiert mit `mode='w'`, wenn die Datei schon existiert, und was, wenn sie noch nicht existiert?",
    antwort: "Eine vorhandene Datei wird **überschrieben**. Eine noch nicht vorhandene Datei wird **angelegt**."
  },
  {
    thema: "Dateien schreiben",
    frage: "Schreibe den Text `Hallo` mit `print` in die geöffnete Datei `f`.",
    antwort: "`print('Hallo', file=f)`"
  },
  {
    thema: "Dateien schreiben",
    frage: "Warum muss man eine Datei nach dem Schreiben mit `close()` schließen?",
    antwort: "Erst dann ist sichergestellt, dass alles in der Datei **gespeichert** ist."
  },
  {
    thema: "Dateien schreiben",
    frage: "Was steht in der Datei, wenn `x = 5` und `y = 10` ist?\n```\nprint(f'Die Summe von {x} und {y} ist {x+y}.', file=f)\n```",
    antwort: "`Die Summe von 5 und 10 ist 15.`"
  }
]);
