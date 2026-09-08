### Fehler finden

Kattis: [Ovissa](https://open.kattis.com/problems/ovissa)

Der folgende Code liefert die falsche Antwort:
```python
s = input()
best = 0
angefangen = False
zaehl = 0
for i in range(len(s)):
    c = s[i]
    if c == 'u' and not angefangen:
        angefangen = True
        zaehl=1
    elif c == 'u' and angefangen:
        zaehl+=1
    elif c != 'u' and angefangen:
        angefangen = False        
        if zaehl > best:
            best = zaehl
print(best)
```