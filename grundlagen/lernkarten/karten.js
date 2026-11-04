// Lernkarten Grundlagen, wird von lernkarten/index.html geladen
// Kleine Karten zu den Inhalten und Aufgabentypen aus aufgaben/aufgaben.pdf, ohne Stift und Papier lösbar
// Formatierung in frage/antwort: **fett**, __unterstrichen__, `code`,
// Codeblock mit ``` ... ```, Tabellenzeilen | a | b |, Bild ![Beschreibung](datei.png), Zeilenumbruch mit \n

lernkarten("Grundlagen", [
  // ---------- Variablen und Zuweisungen ----------
  {
    thema: "Variablen und Zuweisungen",
    frage: "Welche zwei Datentypen für Zahlen gibt es in Python?",
    antwort: "`int` und `float`"
  },
  {
    thema: "Variablen und Zuweisungen",
    frage: "Wie heißt in Python der Datentyp für **ganze Zahlen**?",
    antwort: "`int`, z. B. `8`, `-3`, `0`"
  },
  {
    thema: "Variablen und Zuweisungen",
    frage: "Wie heißt in Python der Datentyp für **Dezimalzahlen**?",
    antwort: "`float` (Gleitkommazahl), z. B. `3.2`, `-0.5`, `2.0`"
  },
  {
    thema: "Variablen und Zuweisungen",
    frage: "Wie schreibt man die Dezimalzahl drei Komma fünf in Python?",
    antwort: "`3.5`\n\nDezimalzahlen werden mit einem **Punkt** geschrieben, nicht mit einem Komma."
  },
  {
    thema: "Variablen und Zuweisungen",
    frage: "Welchen Datentyp hat der Wert `2.0`?",
    antwort: "`float`\n\nDer Punkt macht die Zahl zu einer Dezimalzahl, auch wenn nach dem Punkt nur eine 0 steht."
  },
  {
    thema: "Variablen und Zuweisungen",
    frage: "Was passiert bei der Zuweisung `x = 5`?",
    antwort: "Der Wert auf der **rechten** Seite (5) wird der Variablen auf der **linken** Seite (`x`) zugewiesen."
  },
  {
    thema: "Variablen und Zuweisungen",
    frage: "Was wird ausgegeben?\n```\nprint(3, 4, 5)\n```",
    antwort: "```\n3 4 5\n```\nMit Komma getrennte Werte gibt `print` durch ein Leerzeichen getrennt aus."
  },
  {
    thema: "Variablen und Zuweisungen",
    frage: "Was wird ausgegeben?\n```\nx = 5\nx = 8\nprint(x)\n```",
    antwort: "`8`\n\nDurch die erneute Zuweisung ist der alte Wert 5 verloren."
  },
  {
    thema: "Variablen und Zuweisungen",
    frage: "Was wird ausgegeben?\n```\nx = 5\nx = x + 1\nprint(x)\n```",
    antwort: "`6`\n\nRechts wird mit dem alten Wert gerechnet, das Ergebnis wird `x` zugewiesen."
  },
  {
    thema: "Variablen und Zuweisungen",
    frage: "Was wird ausgegeben?\n```\na = 1\nb = a + 2\na = 10\nprint(b)\n```",
    antwort: "`3`\n\n`b` erhält den Wert 3. Die spätere Änderung von `a` ändert `b` nicht mehr."
  },
  {
    thema: "Variablen und Zuweisungen",
    frage: "Schreibe die Anweisungen in Python:\n\nSetze x auf 4. Erhöhe x um 1. Gib x aus.",
    antwort: "```\nx = 4\nx = x + 1\nprint(x)\n```"
  },
  {
    thema: "Variablen und Zuweisungen",
    frage: "Wofür steht die Kurzform `x += 3`?",
    antwort: "`x = x + 3`"
  },
  {
    thema: "Variablen und Zuweisungen",
    frage: "Schreibe `y = y * 2` mit einer Kurzform.",
    antwort: "`y *= 2`"
  },
  {
    thema: "Variablen und Zuweisungen",
    frage: "Schreibe mit einer Kurzform: Erniedrige `b` um 5.",
    antwort: "`b -= 5`"
  },
  {
    thema: "Variablen und Zuweisungen",
    frage: "Schreibe mit einer Kurzform: Teile `a` ganzzahlig durch 3.",
    antwort: "`a //= 3`"
  },
  {
    thema: "Variablen und Zuweisungen",
    frage: "Was wird ausgegeben?\n```\na = 4\na *= 3\na -= 2\nprint(a)\n```",
    antwort: "`10`\n\n4 · 3 = 12, dann 12 − 2 = 10"
  },

  // ---------- Kommentare ----------
  {
    thema: "Kommentare",
    frage: "Wie schreibt man einen **einzeiligen** Kommentar?",
    antwort: "Mit `#`. Alles hinter dem `#` bis zum Zeilenende ist Kommentar.\n```\nz = 3   # auch dies ist ein Kommentar\n```"
  },
  {
    thema: "Kommentare",
    frage: "Wie schreibt man einen **mehrzeiligen** Kommentar?",
    antwort: "Zwischen drei Hochkommata am Anfang und am Ende:\n```\n'''\nDies ist ein\nmehrzeiliger Kommentar\n'''\n```"
  },

  // ---------- Variablennamen ----------
  {
    thema: "Variablennamen",
    frage: "Sind `anzahl` und `Anzahl` dieselbe Variable?",
    antwort: "Nein. Variablennamen sind **case-sensitiv**, Groß- und Kleinschreibung wird unterschieden."
  },
  {
    thema: "Variablennamen",
    frage: "Ist `2tore` ein erlaubter Variablenname?",
    antwort: "Nein. Das erste Zeichen muss ein **Buchstabe oder ein Unterstrich** sein, keine Ziffer.\n\n`tore2` wäre erlaubt."
  },
  {
    thema: "Variablennamen",
    frage: "Warum ist `anzahl-tore` kein erlaubter Variablenname?",
    antwort: "Das Zeichen `-` ist in Variablennamen nicht erlaubt.\n\nErlaubt wären `anzahlTore` oder `anzahl_tore`."
  },
  {
    thema: "Variablennamen",
    frage: "Warum darf eine Variable nicht `while` heißen?",
    antwort: "`while` ist ein **Schlüsselwort** der Sprache. Schlüsselwörter wie `if`, `for` oder `while` sind als Namen verboten."
  },
  {
    thema: "Variablennamen",
    frage: "Auf welche Zeichen beschränken wir uns bei Variablennamen?",
    antwort: "Auf den **Unterstrich**, die **Buchstaben des englischen Alphabets** und die **Ziffern**.\n\nAlso keine Umlaute, kein ß, keine Leerzeichen."
  },
  {
    thema: "Variablennamen",
    frage: "Schreibe den Variablennamen „anzahl der treffer“ in **camelCase**.",
    antwort: "`anzahlDerTreffer`"
  },
  {
    thema: "Variablennamen",
    frage: "Schreibe den Variablennamen „anzahl der treffer“ in **snake_case**.",
    antwort: "`anzahl_der_treffer`"
  },
  {
    thema: "Variablennamen",
    frage: "Warum entspricht `Durchmesser` nicht unserer Konvention?",
    antwort: "Variablennamen beginnen bei uns mit einem **kleinen Buchstaben**: `durchmesser`."
  },
  {
    thema: "Variablennamen",
    frage: "Warum entspricht `größe` nicht unserer Konvention?",
    antwort: "Der Name enthält einen **Umlaut** und ein **ß**. Besser: `groesse`."
  },
  {
    thema: "Variablennamen",
    frage: "Warum entspricht `entfernungzumhaus` nicht unserer Konvention?",
    antwort: "Er ist weder in camelCase noch in snake_case geschrieben.\n\nBesser: `entfernungZumHaus` oder `entfernung_zum_haus`."
  },
  {
    thema: "Variablennamen",
    frage: "Warum entspricht `punkteAm_ende` nicht unserer Konvention?",
    antwort: "camelCase und snake_case sind **gemischt**.\n\nBesser: `punkteAmEnde` oder `punkte_am_ende`."
  },

  // ---------- Arithmetische Operatoren ----------
  {
    thema: "Arithmetische Operatoren",
    frage: "Wie heißt der Operator `%`, und was liefert er?",
    antwort: "Das ist der **Modulo-Operator**. Er liefert den **Rest** bei der ganzzahligen Division."
  },
  {
    thema: "Arithmetische Operatoren",
    frage: "Was ergibt `11 // 3`?",
    antwort: "`3`\n\n`//` ist die ganzzahlige Division: 11 : 3 = 3 Rest 2"
  },
  {
    thema: "Arithmetische Operatoren",
    frage: "Was ergibt `11 % 3`?",
    antwort: "`2`\n\n11 : 3 = 3 Rest 2, denn 11 = 3 · 3 + 2"
  },
  {
    thema: "Arithmetische Operatoren",
    frage: "Was ergibt `17 // 5`?",
    antwort: "`3`\n\n17 : 5 = 3 Rest 2"
  },
  {
    thema: "Arithmetische Operatoren",
    frage: "Was ergibt `20 % 4`?",
    antwort: "`0`\n\n20 : 4 = 5 Rest 0"
  },
  {
    thema: "Arithmetische Operatoren",
    frage: "Was ergibt `47 % 10`?",
    antwort: "`7`\n\n47 : 10 = 4 Rest 7"
  },
  {
    thema: "Arithmetische Operatoren",
    frage: "Was ergibt `2 ** 3`?",
    antwort: "`8`\n\n`**` ist die Exponentation: 2 hoch 3 = 2 · 2 · 2"
  },
  {
    thema: "Arithmetische Operatoren",
    frage: "Was ergibt `6 / 2`?",
    antwort: "`3.0`\n\nDie Division `/` liefert immer einen `float`, auch wenn sie aufgeht."
  },
  {
    thema: "Arithmetische Operatoren",
    frage: "Was ergibt `2 + 3 * 4`?",
    antwort: "`14`\n\nPunktrechnung vor Strichrechnung: 3 · 4 = 12, dann 2 + 12"
  },
  {
    thema: "Arithmetische Operatoren",
    frage: "Was ergibt `2 * 3 ** 2`?",
    antwort: "`18`\n\nExponentation vor Punktrechnung: 3 hoch 2 = 9, dann 2 · 9"
  },
  {
    thema: "Arithmetische Operatoren",
    frage: "Was ergibt `10 - 4 / 2`?",
    antwort: "`8.0`\n\nZuerst 4 / 2 = 2.0, dann 10 − 2.0. Wegen `/` ist das Ergebnis ein `float`."
  },

  // ---------- Strings ----------
  {
    thema: "Strings",
    frage: "Wie kennzeichnet man in Python einen String?",
    antwort: "Mit einfachen oder doppelten Hochkommata: `'Hallo'` oder `\"Hallo\"`. Beide Schreibweisen sind gleichwertig."
  },
  {
    thema: "Strings",
    frage: "Was ergibt `len('Hallo Welt')`?",
    antwort: "`10`\n\nDas Leerzeichen zählt mit."
  },
  {
    thema: "Strings",
    frage: "Was ergibt `'Hallo' + 'Welt'`?",
    antwort: "`'HalloWelt'`\n\nBeim Konkatenieren wird kein Leerzeichen eingefügt."
  },
  {
    thema: "Strings",
    frage: "Was ergibt `'3' + '4'`?",
    antwort: "`'34'`\n\nStrings werden aneinandergehängt, nicht addiert."
  },
  {
    thema: "Strings",
    frage: "Was passiert bei `'Alter: ' + 15`?",
    antwort: "Ein **TypeError**. Einen String und eine Zahl kann man nicht mit `+` verbinden."
  },
  {
    thema: "Strings",
    frage: "Gegeben sind `a = 'Guten'` und `b = 'Tag'`. Bilde daraus mit `+` den String `'Guten Tag!'`.\n\nZwischen den beiden Wörtern steht ein **Leerzeichen**, am Ende ein Ausrufezeichen.",
    antwort: "```\na + ' ' + b + '!'\n```"
  },

  // ---------- Indexing ----------
  {
    thema: "Indexing",
    frage: "Mit einem Index greifen wir auf ein einzelnes Zeichen eines Strings zu.\n\nBei welchem Index beginnt man von vorne zu zählen, bei welchem von hinten?",
    antwort: "Von vorne bei **0**, von hinten bei **-1**.\n\n| Zeichen | H | a | b | i | c | h | t |\n| positiv | 0 | 1 | 2 | 3 | 4 | 5 | 6 |\n| negativ | -7 | -6 | -5 | -4 | -3 | -2 | -1 |"
  },
  {
    thema: "Indexing",
    frage: "`s = 'Habicht'`\n\nWelches Zeichen ist `s[0]`?",
    antwort: "`'H'`"
  },
  {
    thema: "Indexing",
    frage: "`s = 'Habicht'`\n\nWelches Zeichen ist `s[2]`?",
    antwort: "`'b'`\n\nH hat den Index 0, a den Index 1, b den Index 2."
  },
  {
    thema: "Indexing",
    frage: "`s = 'Habicht'`\n\nWelches Zeichen ist `s[-1]`?",
    antwort: "`'t'`, das letzte Zeichen"
  },
  {
    thema: "Indexing",
    frage: "`s = 'Habicht'`\n\nWelches Zeichen ist `s[-3]`?",
    antwort: "`'c'`\n\nt hat den Index -1, h den Index -2, c den Index -3."
  },
  {
    thema: "Indexing",
    frage: "Wie greift man mit einem **positiven** Index auf das letzte Zeichen eines Strings `s` zu?",
    antwort: "`s[len(s) - 1]`\n\nDer größte positive Index ist `len(s) - 1`."
  },
  {
    thema: "Indexing",
    frage: "`s = 'Habicht'`\n\nWas passiert bei `s[7]`?",
    antwort: "Ein **IndexError**. Der String hat 7 Zeichen, der größte positive Index ist 6."
  },
  {
    thema: "Indexing",
    frage: "`s = 'Feldberg'`\n\nMit welchem **positiven** Index erhält man das Zeichen `'d'`?",
    antwort: "`s[3]`\n\nF = 0, e = 1, l = 2, d = 3"
  },
  {
    thema: "Indexing",
    frage: "`s = 'Feldberg'`\n\nMit welchem **negativen** Index erhält man das Zeichen `'d'`?",
    antwort: "`s[-5]`\n\ng = -1, r = -2, e = -3, b = -4, d = -5"
  },

  // ---------- Slicing ----------
  {
    thema: "Slicing",
    frage: "Wird beim Slicing `s[von:bis]` das Zeichen mit dem Index `bis` mitgenommen?",
    antwort: "Nein. Die bis-Zahl wird **nicht** mitgenommen. Deshalb ist `bis - von` die Länge des Ergebnisses."
  },
  {
    thema: "Slicing",
    frage: "Was bedeutet es, wenn bei `s[von:bis]` die von-Zahl oder die bis-Zahl fehlt?",
    antwort: "Fehlt die von-Zahl, beginnt der Teilstring **am Anfang**.\nFehlt die bis-Zahl, reicht er **bis zum Ende**."
  },
  {
    thema: "Slicing",
    frage: "`s = 'Habicht'`\n\nWelcher Teilstring ist `s[:3]`?",
    antwort: "`'Hab'`, die ersten 3 Zeichen"
  },
  {
    thema: "Slicing",
    frage: "`s = 'Habicht'`\n\nWelcher Teilstring ist `s[-3:]`?",
    antwort: "`'cht'`, die letzten 3 Zeichen"
  },
  {
    thema: "Slicing",
    frage: "`s = 'Habicht'`\n\nWelcher Teilstring ist `s[2:]`?",
    antwort: "`'bicht'`, alles außer den ersten beiden Zeichen"
  },
  {
    thema: "Slicing",
    frage: "`s = 'Habicht'`\n\nWelcher Teilstring ist `s[:-2]`?",
    antwort: "`'Habic'`, alles außer den letzten beiden Zeichen"
  },
  {
    thema: "Slicing",
    frage: "`s = 'Habicht'`\n\nWelcher Teilstring ist `s[1:5]`?",
    antwort: "`'abic'`\n\nIndex 1 bis 4, der Index 5 wird nicht mitgenommen."
  },
  {
    thema: "Slicing",
    frage: "Wie lang ist der Teilstring `s[2:6]`, wenn `s` lang genug ist?",
    antwort: "**4** Zeichen, denn 6 − 2 = 4"
  },
  {
    thema: "Slicing",
    frage: "`s = 'Sonnenblume'`\n\nGib einen Slicing-Ausdruck an, der den Teilstring `'Sonne'` liefert.",
    antwort: "`s[:5]`"
  },
  {
    thema: "Slicing",
    frage: "`s = 'Sonnenblume'`\n\nGib einen Slicing-Ausdruck an, der den Teilstring `'blume'` liefert.",
    antwort: "`s[6:]` oder `s[-5:]`"
  },
  {
    thema: "Slicing",
    frage: "Gib einen Slicing-Ausdruck an, der alle Zeichen eines Strings `s` außer dem letzten liefert.",
    antwort: "`s[:-1]`"
  },

  // ---------- String-Methoden und Vergleiche ----------
  {
    thema: "String-Methoden und Vergleiche",
    frage: "`s = 'Habicht'`\n\nWas gibt `print(s.upper())` aus?",
    antwort: "`HABICHT`"
  },
  {
    thema: "String-Methoden und Vergleiche",
    frage: "Was wird ausgegeben?\n```\ns = 'Habicht'\ns.lower()\nprint(s)\n```",
    antwort: "`Habicht`\n\n`lower()` liefert einen **neuen** String. Der String `s` bleibt unverändert."
  },
  {
    thema: "String-Methoden und Vergleiche",
    frage: "Wie werden zwei Strings mit `<` verglichen?",
    antwort: "**Zeichen für Zeichen**, bis sich zwei Zeichen unterscheiden. Dabei gilt: **Großbuchstaben < Kleinbuchstaben**."
  },
  {
    thema: "String-Methoden und Vergleiche",
    frage: "Ist `'Apfel' < 'Birne'` True oder False?",
    antwort: "**True**\n\nA steht im Alphabet vor B."
  },
  {
    thema: "String-Methoden und Vergleiche",
    frage: "Ist `'Haus' < 'Hase'` True oder False?",
    antwort: "**False**\n\n`Ha` ist gleich, dann entscheidet das dritte Zeichen: s steht vor u."
  },
  {
    thema: "String-Methoden und Vergleiche",
    frage: "Ist `'a' < 'B'` True oder False?",
    antwort: "**False**\n\nGroßbuchstaben sind kleiner als Kleinbuchstaben, also gilt `'B' < 'a'`."
  },
  {
    thema: "String-Methoden und Vergleiche",
    frage: "Ist `'Zebra' < 'affe'` True oder False?",
    antwort: "**True**\n\nGroßbuchstaben sind kleiner als Kleinbuchstaben, also gilt `'Z' < 'a'`."
  },
  {
    thema: "String-Methoden und Vergleiche",
    frage: "Gib einen Ausdruck an, der genau dann True ist, wenn der String `a` alphabetisch vor dem String `b` steht, ohne auf Groß- und Kleinschreibung zu achten.",
    antwort: "`a.lower() < b.lower()`"
  },
  {
    thema: "String-Methoden und Vergleiche",
    frage: "Ist `'ich' in 'Habicht'` True oder False?",
    antwort: "**True**\n\n`in` prüft, ob ein Teilstring enthalten ist."
  },
  {
    thema: "String-Methoden und Vergleiche",
    frage: "Ist `'H' in 'habicht'` True oder False?",
    antwort: "**False**\n\nIn `'habicht'` kommt nur ein kleines h vor."
  },
  {
    thema: "String-Methoden und Vergleiche",
    frage: "Was liefert `'Habicht'.find('b')`?",
    antwort: "`2`, den Index des ersten Auftretens"
  },
  {
    thema: "String-Methoden und Vergleiche",
    frage: "Was liefert `'Habicht'.find('e')`?",
    antwort: "`-1`\n\n-1 heißt: Es wurde nichts gefunden."
  },
  {
    thema: "String-Methoden und Vergleiche",
    frage: "`s = 'Mississippi'`\n\nWas liefert `s.find('ss')`?",
    antwort: "`2`\n\nM = 0, i = 1, s = 2"
  },
  {
    thema: "String-Methoden und Vergleiche",
    frage: "`s = 'Mississippi'`\n\nWas liefert `s.find('ss', 3)`?",
    antwort: "`5`\n\nGesucht wird erst ab Index 3. Gefunden wird deshalb das zweite `'ss'`."
  },

  // ---------- input und f-Strings ----------
  {
    thema: "input und f-Strings",
    frage: "Welchen Datentyp liefert `input()`?",
    antwort: "**Immer einen String**, auch wenn Ziffern eingegeben werden."
  },
  {
    thema: "input und f-Strings",
    frage: "Lies eine ganze Zahl in die Variable `x` ein. Die Aufforderung soll `Bitte eine ganze Zahl eingeben:` lauten.",
    antwort: "```\nx = int(input('Bitte eine ganze Zahl eingeben: '))\n```\n`int()` wandelt den String in eine ganze Zahl um."
  },
  {
    thema: "input und f-Strings",
    frage: "Lies eine Dezimalzahl in die Variable `preis` ein. Die Aufforderung soll `Preis:` lauten.",
    antwort: "```\npreis = float(input('Preis: '))\n```"
  },
  {
    thema: "input und f-Strings",
    frage: "Der Benutzer gibt `5` ein. Was wird ausgegeben?\n```\ns = input()\nprint(s + s)\n```",
    antwort: "`55`\n\n`s` ist der String `'5'`. Strings werden aneinandergehängt."
  },
  {
    thema: "input und f-Strings",
    frage: "Der Benutzer gibt `5` ein. Was wird ausgegeben?\n```\nx = int(input())\nprint(x + x)\n```",
    antwort: "`10`\n\nDurch `int()` ist `x` eine Zahl."
  },
  {
    thema: "input und f-Strings",
    frage: "Woran erkennt man einen f-String, und wo stehen darin die Variablen?",
    antwort: "Vor dem Hochkomma steht ein **f**. Variablen und Ausdrücke stehen in **geschweiften Klammern**: `f'x ist {x}'`"
  },
  {
    thema: "input und f-Strings",
    frage: "Was wird ausgegeben?\n```\nx = 4\nprint(f'Das Doppelte von {x} ist {2*x}.')\n```",
    antwort: "`Das Doppelte von 4 ist 8.`"
  },
  {
    thema: "input und f-Strings",
    frage: "In `a` und `b` stehen ganze Zahlen. Gib mit einem f-String z. B. für `a = 14` und `b = 15` den Satz `Die Summe von 14 und 15 ist 29.` aus.",
    antwort: "```\nprint(f'Die Summe von {a} und {b} ist {a + b}.')\n```"
  },
  {
    thema: "input und f-Strings",
    frage: "Gib die Dezimalzahl in der Variablen `x` mit einem f-String auf zwei Nachkommastellen gerundet aus.",
    antwort: "```\nprint(f'{x:.2f}')\n```"
  },
  {
    thema: "input und f-Strings",
    frage: "Was wird ausgegeben?\n```\npi = 3.14159\nprint(f'{pi:.3f}')\n```",
    antwort: "`3.142`\n\n`.3f` heißt: auf drei Nachkommastellen gerundet."
  },
  {
    thema: "input und f-Strings",
    frage: "Wird der Wert der Variablen `pi` durch `print(f'{pi:.2f}')` verändert?",
    antwort: "Nein. Gerundet wird nur die **Ausgabe**, der Wert der Variablen bleibt unverändert."
  }
]);
