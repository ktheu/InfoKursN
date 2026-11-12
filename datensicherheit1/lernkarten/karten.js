// Lernkarten Datensicherheit, wird von lernkarten/index.html geladen
// Kleine Karten zu den Inhalten und Aufgabentypen aus aufgaben/aufgaben.pdf, ohne Stift und Papier lösbar
// Formatierung in frage/antwort: **fett**, __unterstrichen__, `code`,
// Codeblock mit ``` ... ```, Tabellenzeilen | a | b |, Bild ![Beschreibung](datei.png), Zeilenumbruch mit \n

lernkarten("Datensicherheit1", [
  // ---------- Grundbegriffe ----------
  {
    thema: "Grundbegriffe",
    frage: "Aus welchen zwei Teilen besteht die **Kryptologie**?",
    antwort:
      "**Kryptographie:** Wie erstellt man eine Chiffre, also ein Verschlüsselungsverfahren?\n**Kryptoanalyse:** Wie knackt man eine Chiffre?",
  },
  {
    thema: "Grundbegriffe",
    frage:
      "Was passiert bei der **Verschlüsselung**, was bei der **Entschlüsselung**?",
    antwort:
      "Verschlüsselung (Chiffrierung): Der **Klartext** wird mit einem **Schlüssel** in einen **Geheimtext** umgewandelt.\nEntschlüsselung (Dechiffrierung): Der Geheimtext wird mit dem Schlüssel wieder in den Klartext umgewandelt.",
  },
  {
    thema: "Grundbegriffe",
    frage: "Was will der Angreifer **Eve**, was will **Mallory**?",
    antwort:
      "**Eve** (eavesdropper, Lauscher) will die Nachricht **mitlesen**, ohne sie zu verändern.\n**Mallory** (malicious, bösartig) will die Nachricht **verändern** oder sich als jemand anderes ausgeben.",
  },
  {
    thema: "Grundbegriffe",
    frage: "Wann heißt ein Verschlüsselungsverfahren **symmetrisch**?",
    antwort:
      "Wenn Sender und Empfänger **denselben** Schlüssel zum Verschlüsseln und Entschlüsseln benutzen.",
  },

  // ---------- Sicherheitsziele ----------
  {
    thema: "Sicherheitsziele",
    frage:
      "Was bedeutet das Sicherheitsziel **Vertraulichkeit**? Wer greift es an?",
    antwort:
      "Niemand außer dem Empfänger kann die Nachricht lesen.\nAngreifer: **Eve** liest mit.",
  },
  {
    thema: "Sicherheitsziele",
    frage: "Was bedeutet das Sicherheitsziel **Integrität**? Wer greift es an?",
    antwort:
      "Die Nachricht ist unterwegs nicht verändert worden.\nAngreifer: **Mallory** verändert die Nachricht.",
  },
  {
    thema: "Sicherheitsziele",
    frage:
      "Was bedeutet das Sicherheitsziel **Authentizität**? Wer greift es an?",
    antwort:
      "Die Nachricht stammt wirklich von dem angegebenen Absender.\nAngreifer: **Mallory** gibt sich als Alice aus.",
  },
  {
    thema: "Sicherheitsziele",
    frage: "Was bedeutet das Sicherheitsziel **Verbindlichkeit**?",
    antwort:
      "Der Absender kann später nicht abstreiten, die Nachricht geschickt zu haben.",
  },
  {
    thema: "Sicherheitsziele",
    frage: "Für welches Sicherheitsziel sorgt Verschlüsselung vor allem?",
    antwort:
      "Für die **Vertraulichkeit**. Für die anderen Ziele gibt es weitere Techniken, z. B. digitale Signaturen.",
  },

  // ---------- Skytale ----------
  {
    thema: "Skytale",
    frage:
      "Was passiert bei einer **Transposition** mit den Buchstaben des Klartexts?",
    antwort:
      "Die Buchstaben bleiben erhalten, sie werden nur **anders angeordnet**.",
  },
  {
    thema: "Skytale",
    frage: "Was ist bei der **Skytale** der Schlüssel?",
    antwort:
      "Der **Umfang** des Stabs. In der Tabelle entspricht er der **Anzahl der Zeilen**.",
  },
  {
    thema: "Skytale",
    frage: "Wie verschlüsselt man mit der Skytale als Tabelle?",
    antwort:
      "1. Klartext **zeilenweise** in eine Tabelle mit der vereinbarten Zeilenzahl schreiben, freie Felder mit `X` auffüllen.\n2. Tabelle **spaltenweise** von oben nach unten auslesen. Das ist der Geheimtext.",
  },
  {
    thema: "Skytale",
    frage: "Wie entschlüsselt man mit der Skytale als Tabelle?",
    antwort:
      "Geheimtext **spaltenweise** in eine Tabelle mit der vereinbarten Zeilenzahl schreiben und **zeilenweise** lesen.",
  },
  {
    thema: "Skytale",
    frage: "Verschlüssele `GEHEIM` mit einer Skytale mit 2 Zeilen.",
    antwort: "```\nG E H\nE I M\n```\nSpaltenweise gelesen: `GEEIHM`",
  },
  {
    thema: "Skytale",
    frage:
      "Entschlüssele `HUAS`, verschlüsselt mit einer Skytale mit 2 Zeilen.",
    antwort: "```\nH A\nU S\n```\nZeilenweise gelesen: `HAUS`",
  },
  {
    thema: "Skytale",
    frage:
      "Ein Klartext hat 13 Buchstaben, die Skytale hat 3 Zeilen.\nWie viele Spalten braucht die Tabelle, und wie viele `X` werden aufgefüllt?",
    antwort: "**5 Spalten**, also 15 Felder. Es werden **2** `X` aufgefüllt.",
  },
  {
    thema: "Skytale",
    frage: "Warum ist die Skytale unsicher?",
    antwort:
      "Es gibt nur wenige sinnvolle Schlüssel. Ein Angreifer probiert einfach alle Zeilenzahlen aus (**Brute-Force-Angriff**). Der richtige Schlüssel ist der, bei dem ein lesbarer Text herauskommt.",
  },

  // ---------- Cäsar-Chiffre ----------
  {
    thema: "Cäsar-Chiffre",
    frage: "Was ist eine **monoalphabetische Substitution**?",
    antwort:
      "Jeder Klartextbuchstabe wird im ganzen Text **immer durch denselben** Geheimtextbuchstaben ersetzt.",
  },
  {
    thema: "Cäsar-Chiffre",
    frage: "Wie funktioniert die **Cäsar-Chiffre**?",
    antwort:
      "Jeder Buchstabe wird um einen festen Betrag im Alphabet verschoben. Der Betrag ist der Schlüssel. Nach `Z` geht es wieder bei `A` weiter.",
  },
  {
    thema: "Cäsar-Chiffre",
    frage: "Cäsar-Chiffre mit Schlüssel 3: Was wird aus `Y`?",
    antwort: "`B`\n\nY → Z → A → B",
  },
  {
    thema: "Cäsar-Chiffre",
    frage: "Verschlüssele `HUT` mit der Cäsar-Chiffre und Schlüssel 1.",
    antwort: "`IVU`",
  },
  {
    thema: "Cäsar-Chiffre",
    frage:
      "Mit `A` = 0, …, `Z` = 25: Wie berechnet man bei der Cäsar-Chiffre den Geheimbuchstaben?",
    antwort:
      "Geheimbuchstabe = (Klarbuchstabe + Schlüssel) mod 26\n\nEntschlüsseln: (Geheimbuchstabe − Schlüssel) mod 26",
  },
  {
    thema: "Cäsar-Chiffre",
    frage: "Wie viele sinnvolle Schlüssel hat die Cäsar-Chiffre?",
    antwort: "**25**. Eine Verschiebung um 0 oder 26 ändert nichts.",
  },
  {
    thema: "Cäsar-Chiffre",
    frage:
      "Wie kann ein Angreifer einen Cäsar-Geheimtext entschlüsseln, ohne den Schlüssel zu kennen?",
    antwort:
      "Er probiert alle 25 Schlüssel aus (**Brute-Force-Angriff**) und erkennt den Schlüssel daran, dass ein lesbarer Klartext herauskommt.",
  },
  {
    thema: "Cäsar-Chiffre",
    frage: "Was ist der **Schlüsselraum** eines Verfahrens?",
    antwort: "Die Menge aller möglichen Schlüssel.",
  },

  // ---------- Häufigkeitsanalyse ----------
  {
    thema: "Häufigkeitsanalyse",
    frage:
      "Was ist ein **Geheimalphabet**, und was hat es mit einer **Permutation** zu tun?",
    antwort:
      "Das Geheimalphabet ist die Zeile, die man unter das normale Alphabet schreibt: Jeder Buchstabe kommt **genau einmal** vor, nur in einer anderen Reihenfolge. Diese Vertauschung des Alphabets ist eine **Permutation**.\n```\nA B C D E F …\nQ W E R T Z …\n```\nDas Geheimalphabet ist der Schlüssel.",
  },
  {
    thema: "Häufigkeitsanalyse",
    frage:
      "Wie viele Schlüssel gibt es bei einer beliebigen Permutation des Alphabets?",
    antwort: "26 · 25 · 24 · … · 1 = **26!** (26 Fakultät), etwa 4 · 10²⁶",
  },
  {
    thema: "Häufigkeitsanalyse",
    frage:
      "Warum ist bei einer beliebigen Permutation des Alphabets kein Brute-Force-Angriff möglich?",
    antwort:
      "Es gibt viel zu viele Schlüssel, um sie alle auszuprobieren.",
  },
  {
    thema: "Häufigkeitsanalyse",
    frage: "Welcher Buchstabe ist in deutschen Texten am häufigsten?",
    antwort: "**E**",
  },
  {
    thema: "Häufigkeitsanalyse",
    frage:
      "Wie funktioniert die **Häufigkeitsanalyse** bei einer monoalphabetischen Substitution?",
    antwort:
      "Jedes `E` wird durch denselben Buchstaben ersetzt, der dann im Geheimtext genauso häufig ist. Man zählt die Buchstaben im Geheimtext und vergleicht mit den normalen Häufigkeiten im Deutschen.",
  },

  // ---------- Vigenère-Chiffre ----------
  {
    thema: "Vigenère-Chiffre",
    frage: "Was ist eine **polyalphabetische Substitution**?",
    antwort:
      "Derselbe Klartextbuchstabe kann durch **verschiedene** Geheimtextbuchstaben ersetzt werden, je nachdem, an welcher Stelle er im Text steht.",
  },
  {
    thema: "Vigenère-Chiffre",
    frage: "Wie funktioniert die **Vigenère-Chiffre**?",
    antwort:
      "Das Schlüsselwort wird so oft unter den Klartext geschrieben, bis es so lang ist wie der Klartext. Jeder Klartextbuchstabe wird um die Nummer des Schlüsselbuchstabens darunter verschoben (`A` = 0, `B` = 1, …).",
  },
  {
    thema: "Vigenère-Chiffre",
    frage:
      "`INFORMATIK` (Klartext)\n`CODECODECO` (Schlüssel)\n\nWie heißt das Schlüsselwort?",
    antwort: "`CODE`",
  },
  {
    thema: "Vigenère-Chiffre",
    frage:
      "Vigenère: Klartextbuchstabe `C`, Schlüsselbuchstabe `B`. Welcher Geheimtextbuchstabe entsteht?",
    antwort: "`D`\n\nC = 2, B = 1, 2 + 1 = 3 → D",
  },
  {
    thema: "Vigenère-Chiffre",
    frage:
      "Verschlüssele `TAG` mit der Vigenère-Chiffre und dem Schlüsselwort `BC`.",
    antwort: "`UCH`\n\nT + 1 → U, A + 2 → C, G + 1 → H",
  },
  {
    thema: "Vigenère-Chiffre",
    frage: "Wie liest man den Geheimtextbuchstaben im **Vigenère-Quadrat** ab?",
    antwort: "Zeile = Schlüsselbuchstabe, Spalte = Klartextbuchstabe",
  },
  {
    thema: "Vigenère-Chiffre",
    frage:
      "Warum funktioniert eine einfache Häufigkeitsanalyse über den ganzen Text bei Vigenère nicht?",
    antwort:
      "Derselbe Klartextbuchstabe wird je nach Position verschieden verschlüsselt. Die Häufigkeiten werden dadurch „verwischt“.",
  },
  {
    thema: "Vigenère-Chiffre",
    frage:
      "Transposition, monoalphabetische und polyalphabetische Substitution: Nenne jeweils einen Vor- und einen Nachteil.",
    antwort:
      "**Transposition:** einfach durchzuführen, aber leicht zu knacken\n**monoalphabetisch:** einfach anzuwenden, aber anfällig für die Häufigkeitsanalyse\n**polyalphabetisch:** sicherer gegen die Häufigkeitsanalyse, aber aufwendiger",
  },

  // ---------- Angriff auf Vigenère ----------
  {
    thema: "Angriff auf Vigenère",
    frage: "Was ist die Schwachstelle der Vigenère-Chiffre?",
    antwort:
      "Das Schlüsselwort **wiederholt sich**. Bei Schlüssellänge 5 werden der 1., 6., 11., … Buchstabe mit derselben Verschiebung verschlüsselt.",
  },
  {
    thema: "Angriff auf Vigenère",
    frage: "In welchen drei Schritten greift man die Vigenère-Chiffre an?",
    antwort:
      "1. **Schlüssellänge bestimmen** (Kasiski-Test)\n2. Geheimtext in **Teiltexte** zerlegen\n3. Jeden Teiltext mit einer **Häufigkeitsanalyse** knacken",
  },
  {
    thema: "Angriff auf Vigenère",
    frage: "Was ist die Grundidee des **Kasiski-Tests**?",
    antwort:
      "Gleiche Buchstabenfolgen im Klartext (z. B. DER, EIN) werden gleich verschlüsselt, wenn sie auf dieselbe Stelle im Schlüsselwort fallen. Der **Abstand** zweier gleicher Folgen im Geheimtext ist dann ein **Vielfaches der Schlüssellänge**.",
  },
  {
    thema: "Angriff auf Vigenère",
    frage:
      "Geheimtext: `HBWVHBWVHBWV`\n\nWelche Schlüssellänge ist wahrscheinlich?",
    antwort:
      "**4**\n\n`HBWV` wiederholt sich an den Positionen 1, 5 und 9. Die Abstände 4 und 8 haben den größten gemeinsamen Teiler 4.",
  },
  {
    thema: "Angriff auf Vigenère",
    frage:
      "Gleiche Buchstabenfolgen im Geheimtext haben die Abstände 12 und 18.\nWelche Schlüssellänge ist wahrscheinlich?",
    antwort:
      "**6**, der größte gemeinsame Teiler von 12 und 18 (möglich wären auch 2 oder 3).",
  },
  {
    thema: "Angriff auf Vigenère",
    frage:
      "Die Schlüssellänge ist 3. Welche Buchstaben des Geheimtexts kommen in den ersten Teiltext?",
    antwort: "Der 1., 4., 7., 10., … Buchstabe",
  },
  {
    thema: "Angriff auf Vigenère",
    frage: "Warum zerlegt man den Geheimtext in Teiltexte?",
    antwort:
      "Alle Buchstaben eines Teiltexts sind mit **derselben Verschiebung** verschlüsselt. Jeder Teiltext ist also eine Cäsar-Chiffre und kann mit einer Häufigkeitsanalyse geknackt werden.",
  },
  {
    thema: "Angriff auf Vigenère",
    frage:
      "Im ersten Teiltext ist `G` am häufigsten. Man nimmt an, dass `G` für `E` steht.\nWie groß ist die Verschiebung?",
    antwort: "**2**\n\nE = 4, G = 6, 6 − 4 = 2",
  },
  {
    thema: "Angriff auf Vigenère",
    frage:
      "Ein Teiltext ist um 3 verschoben. Welcher Buchstabe des Schlüsselworts gehört dazu?",
    antwort: "`D` (A = 0, B = 1, C = 2, D = 3)",
  },

  // ---------- One-Time-Pad ----------
  {
    thema: "One-Time-Pad",
    frage: "Welche drei Regeln gelten beim **One-Time-Pad** für den Schlüssel?",
    antwort:
      "1. Er ist **genauso lang** wie die Nachricht.\n2. Er ist **echt zufällig**.\n3. Er wird **nur ein einziges Mal** benutzt.",
  },
  {
    thema: "One-Time-Pad",
    frage: "Wie läuft die Ver- und Entschlüsselung beim One-Time-Pad ab?",
    antwort:
      "Wie bei Vigenère: Jedes Klartextzeichen wird mit dem Schlüsselzeichen an derselben Position verschlüsselt. Zum Entschlüsseln wird derselbe Schlüssel rückwärts angewendet.",
  },
  {
    thema: "One-Time-Pad",
    frage: "Warum ist das One-Time-Pad absolut sicher?",
    antwort:
      "Zu **jedem** Klartext gleicher Länge gibt es einen Schlüssel, der diesen Geheimtext erzeugt. Beim Ausprobieren kommen alle sinnvollen Texte heraus, z. B. HALLO, HILFE, LIEBE, und alle sind gleich wahrscheinlich. Der Geheimtext verrät **nichts** über den Klartext.",
  },
  {
    thema: "One-Time-Pad",
    frage:
      "Welche beiden Schwächen der Vigenère-Chiffre beseitigt das One-Time-Pad?",
    antwort:
      "Der Schlüssel **wiederholt sich nicht** und ist **kein sinnvolles Wort**, sondern zufällig.",
  },
  {
    thema: "One-Time-Pad",
    frage: "Warum wird das One-Time-Pad in der Praxis kaum eingesetzt?",
    antwort:
      "Für jede Nachricht braucht man einen neuen, gleich langen Schlüssel, der vorher auf einem **sicheren Weg** zum Empfänger gebracht werden muss. Dann könnte man oft gleich die Nachricht selbst übergeben.",
  },

  // ---------- Kerckhoffs' Prinzip ----------
  {
    thema: "Kerckhoffs' Prinzip",
    frage:
      "Aus welchen zwei Teilen besteht ein konkretes Verschlüsselungsverfahren?",
    antwort:
      "Aus dem **Algorithmus** (Rechenvorschrift, z. B. „verschiebe um k Stellen“) und dem **Schlüssel** (z. B. k = 3).",
  },
  {
    thema: "Kerckhoffs' Prinzip",
    frage: "Was besagt **Kerckhoffs' Prinzip**?",
    antwort:
      "Die Sicherheit eines Verschlüsselungsverfahrens darf **nur auf der Geheimhaltung des Schlüssels** beruhen, nicht auf der Geheimhaltung des Algorithmus.",
  },
  {
    thema: "Kerckhoffs' Prinzip",
    frage: "Warum lässt sich ein Algorithmus kaum geheim halten?",
    antwort:
      "Er steckt in jedem Gerät und jeder App. Man kann ihn durch Analyse der Software (Reverse Engineering), Spionage oder Verrat herausfinden.",
  },
  {
    thema: "Kerckhoffs' Prinzip",
    frage:
      "Ein Schlüssel wird bekannt, ein geheimer Algorithmus wird bekannt: Was sind jeweils die Folgen?",
    antwort:
      "Schlüssel bekannt: Man wählt einfach einen **neuen Schlüssel**.\nGeheimer Algorithmus bekannt: Das **ganze Verfahren** ist wertlos.",
  },
  {
    thema: "Kerckhoffs' Prinzip",
    frage:
      "Warum ist es ein Vorteil, wenn ein Verschlüsselungsverfahren öffentlich ist?",
    antwort:
      "Viele Fachleute können es prüfen. Schwachstellen werden gefunden, bevor Angreifer sie ausnutzen. AES wurde deshalb öffentlich ausgeschrieben und jahrelang untersucht.",
  },
  {
    thema: "Kerckhoffs' Prinzip",
    frage: "Was versteht man unter **Security by Obscurity**?",
    antwort:
      "Sicherheit durch Verschleierung: Man verlässt sich auf ein **geheimes Verfahren**. Das gilt als schlechte Praxis.",
  },
  {
    thema: "Kerckhoffs' Prinzip",
    frage:
      "Eine Firma sagt: „Unser Verfahren ist sicher, weil wir den Algorithmus nicht veröffentlichen.“\nNimm Stellung.",
    antwort:
      "Die Aussage widerspricht Kerckhoffs' Prinzip. Ein sicheres Verfahren muss auch dann sicher bleiben, wenn der Algorithmus bekannt ist. Die Sicherheit sollte nur von der Geheimhaltung des **Schlüssels** abhängen.",
  },

  // ---------- Asymmetrische Verschlüsselung ----------
  {
    thema: "Asymmetrisch",
    frage: "Welches Problem haben alle symmetrischen Verfahren?",
    antwort:
      "Den **Schlüsselaustausch**: Alice und Bob müssen den gemeinsamen Schlüssel vorher sicher austauschen, auch wenn sie sich nie persönlich treffen.",
  },
  {
    thema: "Asymmetrisch",
    frage:
      "Wie viele Schlüssel braucht man symmetrisch, wenn in einer Gruppe von 4 Personen jede mit jeder geheim kommunizieren will?",
    antwort: "**6**\n\nn · (n − 1) / 2 = 4 · 3 / 2 = 6",
  },
  {
    thema: "Asymmetrisch",
    frage: "Was ist der **öffentliche**, was der **private** Schlüssel?",
    antwort:
      "**Öffentlicher Schlüssel:** darf jeder kennen, damit verschlüsselt man Nachrichten an diese Person.\n**Privater Schlüssel:** bleibt geheim, nur damit kann man die Nachrichten entschlüsseln.",
  },
  {
    thema: "Asymmetrisch",
    frage:
      "Alice will Bob eine vertrauliche Nachricht schicken. Mit welchem Schlüssel verschlüsselt sie?",
    antwort: "Mit **Bobs öffentlichem** Schlüssel.",
  },
  {
    thema: "Asymmetrisch",
    frage:
      "Alice hat eine Nachricht für Bob verschlüsselt. Mit welchem Schlüssel entschlüsselt Bob sie?",
    antwort: "Mit **seinem privaten** Schlüssel.",
  },
  {
    thema: "Asymmetrisch",
    frage:
      "Eve kennt Bobs öffentlichen Schlüssel. Warum kann sie die Nachricht an Bob trotzdem nicht lesen?",
    antwort:
      "Mit dem öffentlichen Schlüssel kann man nur verschlüsseln. Zum Entschlüsseln braucht man den privaten Schlüssel, den nur Bob hat. Er lässt sich aus dem öffentlichen praktisch nicht berechnen.",
  },
  {
    thema: "Asymmetrisch",
    frage:
      "Asymmetrische Verschlüsselung als Vorhängeschloss: Was ist der öffentliche, was der private Schlüssel?",
    antwort:
      "Öffentlicher Schlüssel: die **offenen Vorhängeschlösser**, die Bob verteilt. Jeder kann damit eine Kiste verschließen.\nPrivater Schlüssel: der **Schlüssel zum Schloss**, mit dem nur Bob die Kiste öffnen kann.",
  },
  {
    thema: "Asymmetrisch",
    frage: "Auf welcher mathematischen Aufgabe beruht RSA?",
    antwort:
      "Auf der **Zerlegung in Primfaktoren**: Zwei große Primzahlen zu multiplizieren geht schnell, aus dem Produkt die Primzahlen zurückzugewinnen dauert sehr lange.",
  },
  {
    thema: "Asymmetrisch",
    frage:
      "Was ist schneller: symmetrische oder asymmetrische Verschlüsselung?",
    antwort:
      "**Symmetrische** Verschlüsselung. Asymmetrische Verfahren sind rechenaufwendig und deutlich langsamer.",
  },
  {
    thema: "Asymmetrisch",
    frage: "Wie funktioniert **hybride Verschlüsselung**?",
    antwort:
      "1. Ein kurzer, zufälliger **Sitzungsschlüssel** wird **asymmetrisch** übertragen.\n2. Die eigentliche Nachricht wird damit schnell **symmetrisch** verschlüsselt.",
  },

  // ---------- Verschlüsselung im Alltag ----------
  {
    thema: "Verschlüsselung im Alltag",
    frage: "Was schützt **HTTPS**, und wovor?",
    antwort:
      "Die Verbindung zwischen Browser und Server, z. B. Passwörter und Zahlungsdaten beim Online-Banking, vor dem **Mitlesen** und Verändern während der Übertragung.",
  },
  {
    thema: "Verschlüsselung im Alltag",
    frage: "Was bedeutet **Ende-zu-Ende-Verschlüsselung** bei Messengern?",
    antwort:
      "Nur die beteiligten Personen können die Nachrichten lesen, auch nicht der Anbieter des Dienstes.",
  },
  {
    thema: "Verschlüsselung im Alltag",
    frage:
      "Was schützt die Verschlüsselung eines WLANs mit **WPA2** oder **WPA3**?",
    antwort:
      "Den Datenverkehr zwischen Gerät und Router vor dem Mitlesen durch andere Personen in Reichweite des Funknetzes.",
  },
  {
    thema: "Verschlüsselung im Alltag",
    frage:
      "Wozu verschlüsselt man gespeicherte Daten auf Smartphone, Laptop oder USB-Stick?",
    antwort:
      "Damit die Daten bei **Verlust oder Diebstahl** des Geräts ohne den richtigen Schlüssel nicht gelesen werden können.",
  },

  // ---------- Cookies ----------
  {
    thema: "Cookies",
    frage: "Was sind **personenbezogene Daten**? Nenne Beispiele.",
    antwort:
      "Alle Informationen, die sich einer bestimmten Person zuordnen lassen: Name, Adresse, Geburtsdatum, aber auch Standort, IP-Adresse, Interessen oder Surfverhalten.",
  },
  {
    thema: "Cookies",
    frage: "Was sind **Cookies**?",
    antwort:
      "Kleine Textdateien, die eine Webseite im Browser speichert und bei einem erneuten Besuch wieder ausliest.",
  },
  {
    thema: "Cookies",
    frage: "Was kann eine Webseite in Cookies speichern?",
    antwort:
      "Login-Zustand, Spracheinstellungen, Warenkorb, besuchte Seiten und eine eindeutige **Nutzer-ID**, mit der der Browser wiedererkannt wird.",
  },
  {
    thema: "Cookies",
    frage:
      "Was ist der Unterschied zwischen **notwendigen Cookies** und **Tracking-Cookies**?",
    antwort:
      "**Notwendige Cookies** sind für die Grundfunktion der Seite nötig, z. B. eingeloggt bleiben oder Warenkorb.\n**Tracking-Cookies** verfolgen das Verhalten über **mehrere Webseiten** hinweg, meist von Drittanbietern wie Werbenetzwerken.",
  },
  {
    thema: "Cookies",
    frage:
      "Wie kann ein Werbenetzwerk mit Cookies verfolgen, welche Seiten jemand besucht?",
    antwort:
      "Es ist auf vielen Webseiten eingebunden. Beim ersten Besuch speichert es ein Cookie mit einer ID, auf jeder weiteren Seite liest es die ID wieder aus. So entsteht ein **Nutzungsprofil**.",
  },
  {
    thema: "Cookies",
    frage:
      "Ein Werbenetzwerk kennt von einem Profil nur die Cookie-ID. Wann kann es das Profil einer Person zuordnen?",
    antwort:
      "Sobald man sich auf **einer** der Seiten mit Namen oder E-Mail-Adresse anmeldet.",
  },
  {
    thema: "Cookies",
    frage: "Was ist **Fingerprinting**?",
    antwort:
      "Aus vielen Merkmalen des Geräts (Browser, Bildschirmgröße, installierte Schriftarten, …) wird ein „Fingerabdruck“ berechnet, der das Gerät auch **ohne Cookie** wiedererkennt.",
  },

  // ---------- Geodaten ----------
  {
    thema: "Geodaten",
    frage: "Wie bestimmt ein Smartphone seinen Standort?",
    antwort:
      "Über **GPS** (Satellitensignale), ersatzweise über nahe **WLAN-Netze** oder die Entfernung zu **Mobilfunkmasten**.",
  },
  {
    thema: "Geodaten",
    frage: "Nenne zwei legitime Gründe, warum eine App den Standort braucht.",
    antwort:
      "z. B. Navigations-App: Route berechnen; Wetter-App: Wetter am aktuellen Ort anzeigen (auch: Geschäfte in der Nähe finden, Fotos mit Ort markieren)",
  },
  {
    thema: "Geodaten",
    frage: "Was ist ein **Bewegungsprofil** und was lässt sich daraus ablesen?",
    antwort:
      "Über längere Zeit gesammelte Standortdaten. Daraus lassen sich Wohnort, Schule oder Arbeitsplatz, Tagesablauf und regelmäßig besuchte Orte ableiten.",
  },
  {
    thema: "Geodaten",
    frage:
      "Welches Risiko entsteht, wenn Geodaten lange gesammelt und mit anderen Daten verknüpft werden?",
    antwort:
      "Es lassen sich sehr persönliche Rückschlüsse ziehen. Betroffene können überwacht, erpresst oder gezielt beeinflusst werden, z. B. durch personalisierte Werbung.",
  },

  // ---------- Datenschutz ----------
  {
    thema: "Datenschutz",
    frage:
      "Wie kann man beim Surfen im Browser das Sammeln personenbezogener Daten einschränken?",
    antwort:
      "Nicht notwendige Cookies ablehnen, Tracking-Cookies blockieren, Tracking-Schutz oder Werbeblocker nutzen, anonymen Modus verwenden, datenschutzfreundliche Suchmaschine nutzen.",
  },
  {
    thema: "Datenschutz",
    frage:
      "Was ist mit der **Rechteverwaltung** (Berechtigungen) von Apps gemeint?",
    antwort:
      "Apps müssen für den Zugriff auf Kamera, Mikrofon, Kontakte oder Standort die **Erlaubnis** der Nutzerin oder des Nutzers einholen. Man entscheidet selbst, welche App worauf zugreifen darf, und kann das jederzeit ändern.",
  },
  {
    thema: "Datenschutz",
    frage:
      "Eine Taschenlampen-App will Zugriff auf Kontakte und Standort. Wie bewertest du das, und was solltest du tun?",
    antwort:
      "Für eine Taschenlampe sind diese Rechte **nicht nötig**. Die App will vermutlich Daten für andere Zwecke sammeln, z. B. Werbung. Die Rechte verweigern und notfalls eine andere App wählen.",
  },
  {
    thema: "Datenschutz",
    frage:
      "Wie kann man die Weitergabe des eigenen Standorts einschränken, außer über die App-Berechtigungen?",
    antwort:
      "Standortdienste ausschalten, wenn sie nicht gebraucht werden, oder den Standort nur „einmalig“ bzw. „während der Nutzung der App“ freigeben.",
  },
  {
    thema: "Datenschutz",
    frage:
      "Welche Grundregel gilt bei der Eingabe persönlicher Angaben in Apps und auf Webseiten?",
    antwort: "Nur die Angaben machen, die wirklich **notwendig** sind.",
  },
  {
    thema: "Anonymer Modus",
    frage:
      "Was passiert mit dem Verlauf und den Cookies, wenn man ein Fenster im anonymen Modus des Browsers schließt?",
    antwort:
      "Der Browser speichert **keinen Verlauf**, und die Cookies der Sitzung werden **gelöscht**.",
  },
  {
    thema: "Anonymer Modus",
    frage:
      "Wovor schützt der anonyme Modus des Browsers, wenn man einen Computer mit anderen teilt?",
    antwort:
      "Andere Personen, die denselben Computer benutzen, finden keine Spuren der Sitzung (Verlauf, Cookies, Logins).",
  },
  {
    thema: "Anonymer Modus",
    frage:
      "Warum kann eine Webseite einen Nutzer im anonymen Modus nicht über sein altes Cookie wiedererkennen?",
    antwort:
      "Im anonymen Fenster sind die Cookies aus früheren Sitzungen **nicht sichtbar**. Die Seite bekommt eine neue Sitzung ohne die alte Nutzer-ID.",
  },
  {
    thema: "Anonymer Modus",
    frage:
      "Ist man im anonymen Modus des Browsers anonym im Internet? Begründe deine Antwort.",
    antwort:
      "**Nein.** Webseiten sehen weiterhin die **IP-Adresse**, und auch Provider oder Schulnetz können den Datenverkehr sehen.",
  },
]);
