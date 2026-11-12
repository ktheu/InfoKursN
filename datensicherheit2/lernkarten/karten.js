// Lernkarten Datensicherheit2, wird von lernkarten/index.html geladen
// Kleine Karten zu den Inhalten und Aufgabentypen aus aufgaben/aufgaben.pdf, ohne Stift und Papier lösbar
// Formatierung in frage/antwort: **fett**, __unterstrichen__, `code`,
// Codeblock mit ``` ... ```, Tabellenzeilen | a | b |, Bild ![Beschreibung](datei.png), Zeilenumbruch mit \n

lernkarten("Datensicherheit2", [
  {
    thema: "Sicherheitsziele",
    frage: "Kryptografische Verfahren sollen bestimmte Sicherheitsziele erreichen. Nenne die vier Sicherheitsziele.",
    antwort: "**Vertraulichkeit**, **Integrität**, **Authentizität** und **Verbindlichkeit**."
  },
  {
    thema: "Sicherheitsziele",
    frage: "Erkläre, was das Sicherheitsziel **Integrität** bedeutet.",
    antwort: "Die Nachricht ist unterwegs **nicht verändert** worden."
  },
  {
    thema: "Sicherheitsziele",
    frage: "Erkläre, was das Sicherheitsziel **Verbindlichkeit** bedeutet.",
    antwort: "Der Absender kann später **nicht abstreiten**, die Nachricht geschickt zu haben."
  },
  {
    thema: "Sicherheitsziele",
    frage: "Erkläre, was das Sicherheitsziel **Authentizität** bedeutet.",
    antwort: "Die Nachricht stammt wirklich von dem **angegebenen Absender**."
  },
  {
    thema: "Sicherheitsziele",
    frage: "Eve liest eine unverschlüsselte E-Mail von Alice an Bob mit. Welches Sicherheitsziel ist verletzt?",
    antwort: "**Vertraulichkeit**."
  },
  {
    thema: "Sicherheitsziele",
    frage: "Mallory fängt eine Überweisung ab und ändert den Empfänger. Welches Sicherheitsziel ist verletzt?",
    antwort: "**Integrität**."
  },
  {
    thema: "Sicherheitsziele",
    frage: "Mallory schickt Bob eine Bestellung, die scheinbar von Alice stammt. Welches Sicherheitsziel ist verletzt?",
    antwort: "**Authentizität**."
  },
  {
    thema: "Sicherheitsziele",
    frage: "Alice bestreitet nachträglich, einen von ihr verschickten Vertrag verfasst zu haben. Welches Sicherheitsziel ist verletzt?",
    antwort: "**Verbindlichkeit**."
  },
  {
    thema: "Sicherheitsziele",
    frage: "Mit welcher Methode erreicht man **Vertraulichkeit**?",
    antwort: "Mit **Verschlüsselung** (symmetrisch, asymmetrisch oder hybrid)."
  },
  {
    thema: "Sicherheitsziele",
    frage: "Mit welcher Methode erreicht man **Integrität**, **Authentizität** und **Verbindlichkeit**?",
    antwort: "Mit einer **digitalen Signatur** (zusammen mit einer Hashfunktion). Für die Authentizität des öffentlichen Schlüssels braucht man zusätzlich **Zertifikate**."
  },
  {
    thema: "Symmetrisch und asymmetrisch",
    frage: "Erkläre, was ein **symmetrisches** Verschlüsselungsverfahren ist.",
    antwort: "Sender und Empfänger benutzen **denselben geheimen Schlüssel** zum Ver- und Entschlüsseln."
  },
  {
    thema: "Symmetrisch und asymmetrisch",
    frage: "Erkläre, was ein **asymmetrisches** Verschlüsselungsverfahren ist.",
    antwort: "Jede Person hat ein **Schlüsselpaar**: einen **öffentlichen** Schlüssel zum Verschlüsseln und einen **privaten** Schlüssel zum Entschlüsseln."
  },
  {
    thema: "Symmetrisch und asymmetrisch",
    frage: "Alice will Bob asymmetrisch verschlüsselt schreiben. Mit welchem Schlüssel verschlüsselt Alice, mit welchem entschlüsselt Bob?",
    antwort: "Alice verschlüsselt mit **Bobs öffentlichem** Schlüssel.\nBob entschlüsselt mit **seinem privaten** Schlüssel."
  },
  {
    thema: "Symmetrisch und asymmetrisch",
    frage: "Nenne die zwei Probleme symmetrischer Verfahren.",
    antwort: "**Schlüsseltausch:** Der Schlüssel muss vorher auf einem sicheren Weg ausgetauscht werden.\n**Anzahl der Schlüssel:** Jedes Paar von Personen braucht einen eigenen Schlüssel."
  },
  {
    thema: "Symmetrisch und asymmetrisch",
    frage: "Wie viele symmetrische Schlüssel braucht man, damit sich n Personen paarweise vertraulich austauschen können?",
    antwort: "n · (n − 1) / 2 Schlüssel."
  },
  {
    thema: "Symmetrisch und asymmetrisch",
    frage: "Wie viele symmetrische Schlüssel braucht man, damit sich 5 Personen paarweise vertraulich austauschen können?",
    antwort: "5 · 4 / 2 = **10** Schlüssel."
  },
  {
    thema: "Symmetrisch und asymmetrisch",
    frage: "Wie viele Schlüsselpaare braucht man beim asymmetrischen Verfahren, damit sich n Personen paarweise vertraulich austauschen können?",
    antwort: "n Schlüsselpaare, für jede Person genau eins."
  },
  {
    thema: "Symmetrisch und asymmetrisch",
    frage: "Vergleiche symmetrische und asymmetrische Verfahren in der **Geschwindigkeit**.",
    antwort: "Symmetrische Verfahren sind **sehr schnell**. Asymmetrische sind rechenaufwendig, etwa 100- bis 1000-mal langsamer."
  },
  {
    thema: "Symmetrisch und asymmetrisch",
    frage: "Warum braucht man beim asymmetrischen Verfahren keinen geheimen Kanal für den Schlüsseltausch?",
    antwort: "Der **öffentliche** Schlüssel darf jeder kennen und kann offen verteilt werden. Mit ihm kann man nur verschlüsseln, nicht entschlüsseln."
  },
  {
    thema: "Symmetrisch und asymmetrisch",
    frage: "Du willst deine Festplatte verschlüsseln. Würdest du ein symmetrisches oder ein asymmetrisches Verfahren wählen? Begründe.",
    antwort: "**Symmetrisch.** Es ist schnell, und ein Schlüsseltausch ist nicht nötig, weil Sender und Empfänger dieselbe Person sind."
  },
  {
    thema: "Symmetrisch und asymmetrisch",
    frage: "Ein Webmaster soll den öffentlichen Schlüssel eines Vereins auf dessen Homepage veröffentlichen und hat Zugriff auf den Mailserver. Wie kann er die Nachrichten an den Verein manipulieren?",
    antwort: "Er veröffentlicht **seinen eigenen** öffentlichen Schlüssel. Er fängt die Mails ab, entschlüsselt sie mit seinem privaten Schlüssel, ändert sie und verschlüsselt sie mit dem echten Schlüssel des Vereins weiter (**Man-in-the-middle**)."
  },
  {
    thema: "AES",
    frage: "Wofür steht **AES**, und ist es ein symmetrisches oder ein asymmetrisches Verfahren?",
    antwort: "**Advanced Encryption Standard**, ein **symmetrisches** Verfahren."
  },
  {
    thema: "AES",
    frage: "Nenne zwei Einsatzbereiche von AES.",
    antwort: "Zum Beispiel Festplattenverschlüsselung, WLAN (WPA2/WPA3), HTTPS für die eigentlichen Nutzdaten."
  },
  {
    thema: "AES",
    frage: "AES ist eine **Blockchiffre**. Erkläre, was das bedeutet.",
    antwort: "Die Daten werden in feste **Blöcke** aufgeteilt und blockweise verschlüsselt."
  },
  {
    thema: "AES",
    frage: "Was passiert mit einem Datenblock bei AES in den **Runden**?",
    antwort: "Er durchläuft je nach Schlüssellänge 10, 12 oder 14 Runden, in denen die Bytes mehrfach ersetzt, vertauscht, verschoben und gemischt werden."
  },
  {
    thema: "Hybride Verschlüsselung",
    frage: "Beschreibe die drei Schritte der **hybriden Verschlüsselung**.",
    antwort: "1. Zufälligen **symmetrischen Sitzungsschlüssel** erzeugen.\n2. Sitzungsschlüssel **asymmetrisch** verschlüsselt übertragen.\n3. Nachricht **symmetrisch** mit dem Sitzungsschlüssel verschlüsseln."
  },
  {
    thema: "Hybride Verschlüsselung",
    frage: "Welche Vorteile verbindet die hybride Verschlüsselung?",
    antwort: "Den **einfachen Schlüsseltausch** der asymmetrischen Verfahren mit der **Geschwindigkeit** der symmetrischen."
  },
  {
    thema: "Hybride Verschlüsselung",
    frage: "Nenne zwei Anwendungen, in denen hybride Verschlüsselung eingesetzt wird.",
    antwort: "Zum Beispiel HTTPS, Messenger, E-Mail-Verschlüsselung."
  },
  {
    thema: "Vigenère",
    frage: "Ein Text wird mit Vigenère erst mit dem Schlüssel `GEHEIM` und dann mit dem Schlüssel `ABI` verschlüsselt. Erhöht das die Sicherheit? Begründe.",
    antwort: "**Nein.** 6 ist ein Vielfaches von 3. Das wirkt wie ein einziger Schlüssel der Länge 6 (`GFPEJU`)."
  },
  {
    thema: "Vigenère",
    frage: "Wann bringt es bei Vigenère etwas, mit zwei Schlüsselwörtern nacheinander zu verschlüsseln?",
    antwort: "Wenn die Längen **teilerfremd** sind. Längen 3 und 7 wirken wie ein Schlüssel der Länge **21**."
  },
  {
    thema: "Rechnen modulo n",
    frage: "Teilen wir eine ganze Zahl a durch n, gilt a = q · n + r. In welchem Bereich liegt der Rest r?",
    antwort: "0 ≤ r < n. Der Rest ist **nie negativ**."
  },
  {
    thema: "Rechnen modulo n",
    frage: "Berechne den Rest von −5 bei der Division durch 7.",
    antwort: "**2**, denn −5 = (−1) · 7 + 2."
  },
  {
    thema: "Rechnen modulo n",
    frage: "Was gibt `print(-13 % 7)` aus?",
    antwort: "`1`, denn −13 = (−2) · 7 + 1."
  },
  {
    thema: "Rechnen modulo n",
    frage: "Berechne 4 − 6 in ℤ₇.",
    antwort: "−2 = **5** in ℤ₇."
  },
  {
    thema: "Rechnen modulo n",
    frage: "Berechne 4 · 3 in ℤ₇.",
    antwort: "12 = **5** in ℤ₇."
  },
  {
    thema: "Rechnen modulo n",
    frage: "Wann heißen zwei Zahlen **kongruent** modulo n?",
    antwort: "Wenn sie bei der Division durch n **denselben Rest** lassen, also in derselben **Restklasse** liegen."
  },
  {
    thema: "Kehrwerte",
    frage: "Was ist der Kehrwert 1/k in ℤₙ?",
    antwort: "Die Zahl x mit k · x = 1 in ℤₙ."
  },
  {
    thema: "Kehrwerte",
    frage: "Berechne 1/5 in ℤ₇.",
    antwort: "**3**, denn 5 · 3 = 15 = 1 in ℤ₇."
  },
  {
    thema: "Kehrwerte",
    frage: "Berechne 1/2 in ℤ₁₁.",
    antwort: "**6**, denn 2 · 6 = 12 = 1 in ℤ₁₁."
  },
  {
    thema: "Kehrwerte",
    frage: "Warum gibt es 1/2 in ℤ₈ nicht?",
    antwort: "2 · x ist immer gerade, der Rest bei Division durch 8 also auch. Er kann nie 1 sein."
  },
  {
    thema: "Kehrwerte",
    frage: "Wann gibt es den Kehrwert 1/k in ℤₙ?",
    antwort: "Genau dann, wenn **ggT(k, n) = 1** ist."
  },
  {
    thema: "Kehrwerte",
    frage: "In welchen ℤₙ kann man durch jede Zahl außer 0 teilen?",
    antwort: "Wenn n eine **Primzahl** ist."
  },
  {
    thema: "Kehrwerte",
    frage: "Mit welchem Verfahren berechnet man Kehrwerte in ℤₙ für große Zahlen?",
    antwort: "Mit dem **erweiterten euklidischen Algorithmus**."
  },
  {
    thema: "Kehrwerte",
    frage: "Was berechnet der erweiterte euklidische Algorithmus für zwei natürliche Zahlen a und b?",
    antwort: "Den ggT(a, b) und ganze Zahlen x und y mit a · x + b · y = ggT(a, b)."
  },
  {
    thema: "Kehrwerte",
    frage: "Der erweiterte euklidische Algorithmus liefert n · x + k · y = 1. Warum ist y der Kehrwert von k in ℤₙ?",
    antwort: "n · x ist ein Vielfaches von n, also 0 in ℤₙ. Es bleibt k · y = 1."
  },
  {
    thema: "Potenzen",
    frage: "Berechne 4² in ℤ₇.",
    antwort: "16 = **2** in ℤ₇."
  },
  {
    thema: "Potenzen",
    frage: "Gesucht ist x mit 4ˣ = 2 in ℤ₇. Wie heißt ein solches x?",
    antwort: "**Diskreter Logarithmus** von 2 zur Basis 4."
  },
  {
    thema: "Potenzen",
    frage: "Wann heißt k eine **Primitivwurzel** in ℤₚ?",
    antwort: "Wenn man durch Potenzieren von k **alle** Zahlen in ℤₚ außer der 0 erreicht."
  },
  {
    thema: "Potenzen",
    frage: "Ist 2 eine Primitivwurzel in ℤ₇? Begründe.",
    antwort: "**Nein.** Die Potenzen von 2 sind 2, 4, 1, 2, 4, 1. Sie erreichen nur 1, 2 und 4."
  },
  {
    thema: "Potenzen",
    frage: "Was ist kᵖ⁻¹ in ℤₚ, wenn p eine Primzahl ist und k ≠ 0?",
    antwort: "**1** (kleiner Satz von Fermat)."
  },
  {
    thema: "Potenzen",
    frage: "Beim Powermod-Verfahren berechnen wir 19¹²³ in ℤ₇. Was darf man modulo 7 reduzieren, was nicht?",
    antwort: "Die **Basis** darf man reduzieren (19 = 5), den **Exponenten** nicht."
  },
  {
    thema: "Potenzen",
    frage: "Beim Powermod-Verfahren wird 56²³ berechnet. Welche Potenzen 56¹, 56², 56⁴, 56⁸, 56¹⁶ werden multipliziert?",
    antwort: "23 = (10111)₂ = 16 + 4 + 2 + 1, also **56¹ · 56² · 56⁴ · 56¹⁶**."
  },
  {
    thema: "Potenzen",
    frage: "Wie berechnet man beim Powermod-Verfahren die Potenzen 5¹, 5², 5⁴, 5⁸, … nacheinander?",
    antwort: "Durch **fortgesetztes Quadrieren**: Jede Potenz ist das Quadrat der vorigen."
  },
  {
    thema: "Potenzen",
    frage: "Welcher Python-Aufruf berechnet 19¹²³ in ℤ₇ mit dem Powermod-Verfahren?",
    antwort: "`pow(19, 123, 7)`"
  },
  {
    thema: "Diffie-Hellman",
    frage: "Wozu dient der **Diffie-Hellman-Schlüsselaustausch**?",
    antwort: "Alice und Bob **vereinbaren** einen gemeinsamen geheimen Schlüssel, obwohl jeder mitlesen kann. Der Schlüssel selbst wird **nie übertragen**."
  },
  {
    thema: "Diffie-Hellman",
    frage: "Alice und Bob haben beim Diffie-Hellman-Verfahren öffentlich eine Primzahl p und eine Basis g vereinbart. Alice wählt die geheime Zahl a. Welche Zahl A schickt sie an Bob?",
    antwort: "A = gᵃ in ℤₚ."
  },
  {
    thema: "Diffie-Hellman",
    frage: "Alice und Bob haben beim Diffie-Hellman-Verfahren öffentlich eine Primzahl p und eine Basis g vereinbart. Alice hat die geheime Zahl a und bekommt von Bob die Zahl B. Wie berechnet sie den Schlüssel K?",
    antwort: "K = Bᵃ in ℤₚ. Das ist (gᵇ)ᵃ = gᵃᵇ."
  },
  {
    thema: "Diffie-Hellman",
    frage: "Welche Zahlen sind beim Diffie-Hellman-Verfahren **öffentlich**? Nenne sie mit ihren üblichen Bezeichnungen.",
    antwort: "Die Primzahl **p**, die Basis **g**, Alices Zahl **A** = gᵃ und Bobs Zahl **B** = gᵇ.\nGeheim bleiben nur a (Alice) und b (Bob)."
  },
  {
    thema: "Diffie-Hellman",
    frage: "Diffie-Hellman mit p = 5, g = 2, a = 3. Berechne A.",
    antwort: "A = 2³ = 8 = **3** in ℤ₅."
  },
  {
    thema: "Diffie-Hellman",
    frage: "Diffie-Hellman mit p = 5, g = 2, b = 2. Berechne B.",
    antwort: "B = 2² = **4** in ℤ₅."
  },
  {
    thema: "Diffie-Hellman",
    frage: "Diffie-Hellman mit p = 5. Alice hat a = 3 und bekommt B = 4. Berechne den gemeinsamen Schlüssel K.",
    antwort: "K = 4³ = 64 = **4** in ℤ₅."
  },
  {
    thema: "Diffie-Hellman",
    frage: "Diffie-Hellman mit p = 7, g = 3, a = 2. Berechne A.",
    antwort: "A = 3² = 9 = **2** in ℤ₇."
  },
  {
    thema: "Diffie-Hellman",
    frage: "Welche Rechnung müsste Eve beim Diffie-Hellman-Verfahren lösen, um a aus A zu bestimmen, und warum ist das schwer?",
    antwort: "gˣ = A nach x auflösen, also einen **diskreten Logarithmus** berechnen. Dafür ist kein effizientes Verfahren bekannt."
  },
  {
    thema: "Diffie-Hellman",
    frage: "Beschreibe den Man-in-the-middle-Angriff auf Diffie-Hellman.",
    antwort: "Mallory fängt A und B ab und schickt beiden sein eigenes M = gᵐ. Er vereinbart mit Alice und mit Bob je einen Schlüssel, entschlüsselt alle Nachrichten, liest mit, ändert sie ggf. und leitet sie weiter."
  },
  {
    thema: "Diffie-Hellman",
    frage: "Wie schützt man Diffie-Hellman gegen den Man-in-the-middle-Angriff?",
    antwort: "Alice und Bob versehen A und B mit einer **digitalen Signatur**."
  },
  {
    thema: "Diffie-Hellman",
    frage: "Welches Python-Modul verwendet man für Zufallszahlen in der Kryptografie, und warum nicht `random`?",
    antwort: "`secrets`. Seine Zufallszahlen sind **nicht vorhersagbar**."
  },
  {
    thema: "RSA",
    frage: "RSA: Alice wählt p = 7 und q = 13. Berechne den RSA-Modul m und m̃.",
    antwort: "m = 7 · 13 = **91**, m̃ = 6 · 12 = **72**."
  },
  {
    thema: "RSA",
    frage: "RSA mit m̃ = 72. Warum ist e = 11 ein zulässiger Verschlüsselungsexponent?",
    antwort: "Weil **ggT(11, 72) = 1** ist. Dann gibt es den Kehrwert 1/11 in ℤ₇₂."
  },
  {
    thema: "RSA",
    frage: "RSA mit m̃ = 72. Warum ist e = 6 **kein** zulässiger Verschlüsselungsexponent?",
    antwort: "ggT(6, 72) = 6 ≠ 1. Den Kehrwert 1/6 in ℤ₇₂ gibt es nicht."
  },
  {
    thema: "RSA",
    frage: "Wie berechnet man beim RSA-Verfahren den Entschlüsselungsexponenten d?",
    antwort: "d = 1/e in ℤₘ̃, mit dem erweiterten euklidischen Algorithmus."
  },
  {
    thema: "RSA",
    frage: "RSA mit m = 91, e = 11, d = 59. Gib den öffentlichen und den privaten Schlüssel an.",
    antwort: "Öffentlich: **(91, 11)**\nPrivat: **(91, 59)**"
  },
  {
    thema: "RSA",
    frage: "RSA mit p = 3, q = 11, e = 3. Berechne m, m̃ und d.",
    antwort: "m = 33, m̃ = 20, d = **7**, denn 3 · 7 = 21 = 1 in ℤ₂₀."
  },
  {
    thema: "RSA",
    frage: "Wie wird beim RSA-Verfahren die Nachricht n mit dem öffentlichen Schlüssel (m, e) verschlüsselt?",
    antwort: "N = nᵉ in ℤₘ."
  },
  {
    thema: "RSA",
    frage: "Wie wird beim RSA-Verfahren der Geheimtext N mit dem privaten Schlüssel (m, d) entschlüsselt?",
    antwort: "n = Nᵈ in ℤₘ."
  },
  {
    thema: "RSA",
    frage: "Bob hat den öffentlichen RSA-Schlüssel (33, 3). Verschlüssle die Nachricht 2.",
    antwort: "2³ = **8** in ℤ₃₃."
  },
  {
    thema: "RSA",
    frage: "Welche Zahlen muss Alice beim RSA-Verfahren außer d geheim halten?",
    antwort: "p, q und m̃."
  },
  {
    thema: "Einwegfunktionen",
    frage: "Erkläre, was eine **Einwegfunktion** ist.",
    antwort: "Eine Funktion, die in eine Richtung **leicht** zu berechnen ist, deren Umkehrung aber praktisch nicht in vertretbarer Zeit gelingt."
  },
  {
    thema: "Einwegfunktionen",
    frage: "Welche Einwegfunktion nutzt das RSA-Verfahren?",
    antwort: "Leicht: zwei Primzahlen multiplizieren, p · q = m.\nSchwer: m in die Primfaktoren zerlegen (**Faktorisieren**)."
  },
  {
    thema: "Einwegfunktionen",
    frage: "Welche Einwegfunktion nutzt das Diffie-Hellman-Verfahren?",
    antwort: "Leicht: potenzieren, gᵃ in ℤₚ.\nSchwer: aus gᵃ den Exponenten a bestimmen (**diskreter Logarithmus**)."
  },
  {
    thema: "Einwegfunktionen",
    frage: "Ein Angreifer kennt den öffentlichen RSA-Schlüssel (m, e). Was müsste er können, um d zu berechnen?",
    antwort: "Er müsste m in p und q **zerlegen**. Dann könnte er m̃ = (p − 1)(q − 1) und d = 1/e in ℤₘ̃ berechnen."
  },
  {
    thema: "Einwegfunktionen",
    frage: "Wie wächst der Aufwand der bekannten Angriffe auf RSA (Faktorisieren von m) und Diffie-Hellman (diskreter Logarithmus in ℤₚ) mit der Stellenzahl von m bzw. p?",
    antwort: "**Exponentiell**, also viel stärker als polynomiell."
  },
  {
    thema: "Einwegfunktionen",
    frage: "Ist bewiesen, dass man große Zahlen nicht schnell faktorisieren kann?",
    antwort: "**Nein.** Man kennt bisher nur kein schnelles Verfahren."
  },
  {
    thema: "Einwegfunktionen",
    frage: "Warum werden die empfohlenen RSA-Schlüssel mit der Zeit länger?",
    antwort: "Computer werden schneller, und die Angriffsverfahren werden besser. 512 Bit wurden 1999 geknackt, heute sind mindestens 2048 Bit üblich."
  },
  {
    thema: "Einwegfunktionen",
    frage: "Welche zukünftige Technik könnte RSA und Diffie-Hellman brechen, und wie reagiert man darauf?",
    antwort: "**Quantencomputer.** Man führt bereits Verfahren der **Post-Quanten-Kryptografie** ein."
  },
  {
    thema: "Hashfunktionen",
    frage: "Eine Hashfunktion liefert einen Hashwert. Was ist das Besondere an seiner Länge?",
    antwort: "Er hat immer eine **feste Länge**, egal wie lang die Eingabe ist. SHA-256 liefert immer 256 Bit."
  },
  {
    thema: "Hashfunktionen",
    frage: "Ein SHA-256-Hashwert wird mit 64 Hexadezimalziffern geschrieben. Wie viele Bit sind das?",
    antwort: "64 · 4 = **256 Bit**. Jede Hexziffer steht für 4 Bit."
  },
  {
    thema: "Hashfunktionen",
    frage: "Nenne die drei Eigenschaften einer **kryptographischen** Hashfunktion.",
    antwort: "**Einwegfunktion**, **kollisionsresistent**, **Lawineneffekt**."
  },
  {
    thema: "Hashfunktionen",
    frage: "Erkläre, was **kollisionsresistent** bei einer Hashfunktion bedeutet.",
    antwort: "Es ist praktisch unmöglich, zwei verschiedene Eingaben mit **demselben Hashwert** zu finden."
  },
  {
    thema: "Hashfunktionen",
    frage: "Erkläre den **Lawineneffekt** einer Hashfunktion.",
    antwort: "Schon eine winzige Änderung der Eingabe, z. B. ein angehängtes Ausrufezeichen, ergibt einen **völlig anderen** Hashwert."
  },
  {
    thema: "Hashfunktionen",
    frage: "Warum speichern Webseiten von Passwörtern nur den Hashwert?",
    antwort: "Aus dem Hashwert lässt sich das Passwort nicht zurückrechnen. Beim Anmelden vergleicht man die Hashwerte."
  },
  {
    thema: "Digitale Signatur",
    frage: "Mit welchem Schlüssel **signiert** Alice eine Nachricht, und mit welchem **prüft** Bob die Signatur?",
    antwort: "Alice signiert mit **ihrem privaten** Schlüssel.\nBob prüft mit **Alices öffentlichem** Schlüssel."
  },
  {
    thema: "Digitale Signatur",
    frage: "Beschreibe, wie Alice die Signatur zu einer Nachricht erzeugt.",
    antwort: "Sie berechnet den **Hashwert** der Nachricht und rechnet ihn mit ihrem **privaten** Schlüssel um. Nachricht und Signatur schickt sie an Bob."
  },
  {
    thema: "Digitale Signatur",
    frage: "Beschreibe, wie Bob eine Signatur von Alice prüft.",
    antwort: "Er rechnet die Signatur mit Alices **öffentlichem** Schlüssel zurück und vergleicht das Ergebnis mit dem selbst berechneten **Hashwert** der Nachricht. Stimmen sie überein, ist die Signatur gültig."
  },
  {
    thema: "Digitale Signatur",
    frage: "Warum signiert man den Hashwert und nicht die ganze Nachricht?",
    antwort: "Der Hashwert ist **kurz**. Die lange Nachricht müsste man aufwendig asymmetrisch umrechnen."
  },
  {
    thema: "Digitale Signatur",
    frage: "Ein Angreifer ändert eine signierte Nachricht. Warum bemerkt Bob das?",
    antwort: "Der Hashwert der geänderten Nachricht passt nicht mehr zur Signatur (**Integrität**)."
  },
  {
    thema: "Digitale Signatur",
    frage: "Warum kann ein Angreifer keine neue Nachricht im Namen von Alice signieren?",
    antwort: "Er kennt Alices **privaten** Schlüssel nicht (**Authentizität**, **Verbindlichkeit**)."
  },
  {
    thema: "Digitale Signatur",
    frage: "Welches Sicherheitsziel erreicht eine digitale Signatur **nicht**?",
    antwort: "**Vertraulichkeit.** Die Nachricht wird unverschlüsselt verschickt."
  },
  {
    thema: "Digitale Signatur",
    frage: "Was muss Bob voraussetzen, damit seine Prüfung der Signatur von Alice etwas aussagt?",
    antwort: "Dass er den **richtigen** öffentlichen Schlüssel von Alice hat."
  },
  {
    thema: "PKI",
    frage: "Welches Problem löst ein **Zertifikat** bei asymmetrischen Verfahren?",
    antwort: "Es bestätigt, dass ein öffentlicher Schlüssel wirklich zu der Person oder dem Server gehört (**Authentizität des öffentlichen Schlüssels**)."
  },
  {
    thema: "PKI",
    frage: "Wie stellt ein **Trust-Center** ein Zertifikat aus?",
    antwort: "Es prüft die **Identität** des Antragstellers und **signiert** dessen öffentlichen Schlüssel zusammen mit den Inhaberdaten mit seinem eigenen privaten Schlüssel."
  },
  {
    thema: "PKI",
    frage: "Woher kennt ein Browser die öffentlichen Schlüssel der Trust-Center?",
    antwort: "Browser und Betriebssysteme bringen eine Liste vertrauenswürdiger **Wurzelzertifikate** mit."
  },
  {
    thema: "PKI",
    frage: "Erkläre, was eine **Zertifikatskette** ist.",
    antwort: "Ein Zertifikat ist von einer Zwischenstelle signiert, deren Zertifikat wieder von einer Wurzelstelle signiert ist (**hierarchisches Vertrauensmodell**)."
  },
  {
    thema: "PKI",
    frage: "Nenne drei Anwendungsbereiche von Public-Key-Infrastrukturen.",
    antwort: "**Transportverschlüsselung** (HTTPS, TLS), **Mailverschlüsselung** (S/MIME), **digitaler Personalausweis** (eID)."
  },
  {
    thema: "PKI",
    frage: "Was passiert, wenn der private Schlüssel eines Trust-Centers in falsche Hände gerät?",
    antwort: "Der Angreifer kann **gefälschte Zertifikate** ausstellen und sich als beliebige Stelle ausgeben. Alle Zertifikate des Trust-Centers müssen zurückgezogen werden (2011 bei DigiNotar)."
  },
  {
    thema: "PKI",
    frage: "Eine Phishing-Seite hat ein gültiges Zertifikat. Wie ist das möglich?",
    antwort: "Ein Zertifikat bestätigt nur die **Identität** (die Adresse), nicht die **Seriosität**. Die Seite hat es für ihre eigene, ähnlich klingende Adresse."
  },
  {
    thema: "Datensicherheit und Datenschutz",
    frage: "Erkläre, was **Datensicherheit** bedeutet.",
    antwort: "Schutz von **Daten** vor Verlust, Manipulation und unbefugtem Zugriff, egal um welche Daten es sich handelt."
  },
  {
    thema: "Datensicherheit und Datenschutz",
    frage: "Erkläre, was **Datenschutz** bedeutet.",
    antwort: "Schutz des Rechts der Personen auf **informationelle Selbstbestimmung**. Nur nötige personenbezogene Daten für einen festgelegten Zweck dürfen erhoben und verarbeitet werden."
  },
  {
    thema: "Datensicherheit und Datenschutz",
    frage: "Nenne drei Grundsätze des Datenschutzes.",
    antwort: "**Datensparsamkeit**, **Zweckbindung**, **Einwilligung**."
  },
  {
    thema: "Datensicherheit und Datenschutz",
    frage: "Eine Firma sichert die Baupläne eines neuen Produkts gegen Diebstahl. Geht es um Datensicherheit, Datenschutz oder beides?",
    antwort: "Nur **Datensicherheit**. Es sind keine personenbezogenen Daten."
  },
  {
    thema: "Datensicherheit und Datenschutz",
    frage: "Ein Online-Shop schützt die Kundenadressen vor Hackern und verwendet sie nur zur Bestellabwicklung. Geht es um Datensicherheit, Datenschutz oder beides?",
    antwort: "**Beides.** Schutz vor Hackern ist Datensicherheit, die Zweckbindung ist Datenschutz."
  },
  {
    thema: "Datensicherheit und Datenschutz",
    frage: "Eine Schule speichert die Fingerabdrücke aller Schüler in einer sehr gut gesicherten Datenbank. Ist der Datenschutz damit erfüllt?",
    antwort: "**Nicht unbedingt.** Die Datensicherheit ist erfüllt, aber die Erhebung der Fingerabdrücke ist vielleicht gar nicht zulässig."
  },
  {
    thema: "Datensicherheit und Datenschutz",
    frage: "Begründe: Datensicherheit ist eine Voraussetzung für Datenschutz, aber allein nicht ausreichend.",
    antwort: "Ohne Sicherung können Daten abfließen. Aber auch gut gesicherte Daten verletzen den Datenschutz, wenn sie ohne Einwilligung oder Zweck erhoben oder weitergegeben werden."
  },
  {
    thema: "Datensicherheit und Datenschutz",
    frage: "Nenne zwei **technische** Maßnahmen für die Datensicherheit eines Schulsystems mit Noten.",
    antwort: "Zum Beispiel verschlüsselte Speicherung und Übertragung (HTTPS), persönliche Konten mit starken Passwörtern und Mehrfaktorauthentifizierung, Backups, Sicherheitsupdates."
  },
  {
    thema: "Datensicherheit und Datenschutz",
    frage: "Nenne zwei **organisatorische** Maßnahmen für die Datensicherheit eines Schulsystems mit Noten.",
    antwort: "Zum Beispiel Rollen- und Rechtekonzept, Schulung der Mitarbeitenden, Regeln zur Weitergabe und Löschung, Protokollierung der Zugriffe."
  },
  {
    thema: "Massenhafte Datenverarbeitung",
    frage: "Warum können auch scheinbar harmlose Einzeldaten wie Standort und Nutzungszeiten problematisch sein?",
    antwort: "Durch **Zusammenführen** und Auswerten entstehen genaue Profile: Wohnort, Arbeitsplatz, Tagesablauf, Gesundheitszustand."
  },
  {
    thema: "Massenhafte Datenverarbeitung",
    frage: "Nenne zwei Risiken, wenn eine Fitness-App dauerhaft Standort, Puls und Schlafzeiten zentral speichert.",
    antwort: "Zum Beispiel Bewegungsprofile, Weitergabe der Gesundheitsdaten an Versicherungen oder Arbeitgeber, Missbrauch bei einem **Datenleck**, spätere **Zweckänderung**."
  },
  {
    thema: "Massenhafte Datenverarbeitung",
    frage: "Beurteile das Geschäftsmodell „kostenlose App gegen Daten“.",
    antwort: "Die App ist nur scheinbar kostenlos. Man bezahlt mit **persönlichen Daten**, deren Wert und spätere Verwendung man nicht überblickt."
  },
  {
    thema: "Massenhafte Datenverarbeitung",
    frage: "Nenne zwei Maßnahmen, mit denen eine App ihre Datenverarbeitung datensparsamer gestalten kann.",
    antwort: "Zum Beispiel nur nötige Daten erheben, Auswertung **lokal** auf dem Gerät, frühe Löschung, echte Einwilligung mit klarer Zweckbindung."
  }
]);
