# tlwe2021-krypto-1

tech:lounge Winter Edition 2021 // Verschlüsselung: Von Cäsar bis zu AES

## Grundbegriffe

- Kryptografie = kryptos (geheim) + graphein (schreiben)
  - Abgrenzung von der Steganografie
- Nachricht (aka Botschaft)
  - Klartext (= plain text)
  - Geheimtext (= cipher text)
- Personen
  - Alice (Senderin)
  - Bob (Empfänger)
  - Eve (Angreiferin)
- Verschlüsselungsverfahren
  - Algorithmus + Schlüssel (Key)
  - Verschlüsseln: `e(p, k) => c`
  - Entschlüsseln: `d(c, k) => p`
  - Forderungen
    - `d(e(p, k), k) = p`
    - `d(e(p, k1), k2) != p`
- Auguste Kerckhoff, 1883: "Kerckhoff'sche Prinzip"
  - Die Sicherheit eines Verfahrens darf nur davon abhängen, dass der
    Schlüssel geheim ist, nicht davon, dass der Algorithmus geheim ist.

## Cäsar-Verschlüsselung

Plain text:   ABCDEFGHIJKLMNOPQRSTUVWXYZ
Cipher text: ABCDEFGHIJKLMNOPQRSTUVWXYZ

Algorithmus: Cäsar
Schlüssel:   +1

HALLO WELT => IBMMP XFMU

### Angriffsszenarien

- Schlüssel raten => Brute force
  - Schlüsselraumgröße: 25
- Häufigkeitsanalyse
  - Buchstaben zählen: H am häufigsten, Q am zweithäufigsten, …
  - Vermutung: H entspricht E (+3), Q entspricht N (+3), …
  - Muster bleiben erhalten

## Buchstaben durcheinander würfeln

Plain text:  ABCDEFGHIJKLMNOPQRSTUVWXYZ
Cipher text: TFKDVMAQ...

Schlüsselraumgröße:
  26 * 25 * 24 * ... * 3 * 2 * 1 =
  26! =
  403.000.000.000.000.000.000.000.000

=> 403 Quatrillionen Permutationen

### Angriffsszenarien

- Brute force => praktisch ausgeschlossen, zu viele Schlüssel
- Häufigkeitsanalyse => genauso (un)sicher wie Cäsar

## Vigenère-Verschlüsselung

ABCDEFGHIJKLMNOPQRSTUVWXYZ  <-- plainText-Zeile (definierte Spalte)
BCDEFGHIJKLMNOPQRSTUVWXYZA
CDEFGHIJKLMNOPQRSTUVWXYZAB
DEFGHIJKLMNOPQRSTUVWXYZABC
EFGHIJKLMNOPQRSTUVWXYZABCD
FGHIJKLMNOPQRSTUVWXYZABCDE
:
YZABCDEFGHIJKLMNOPQRSTUVWX
ZABCDEFGHIJKLMNOPQRSTUVWXY

plainText:  AFFENHAUS
key:        ABC (=> +0, +1, +2)
cipherText: AGHEOJAVU

- Polyalphabetische Verschlüsselung vs monoalphabetische Verschlüsselung

## Zufall

- Zufallszahlen erzeugen => Zufallszahlengenerator
  - Pseudo Random Number Generator (PRNG)

```javascript
const randomNumber = Math.random();
```

```python
import random;

randomNumber = random.randint(1, 10);
```

## Die perfekte Verschlüsselung

cipherText: T (mit Cäsar)
plainText:
- Unmöglich zu bestimmen ohne Kenntnis des Schlüssels
- Da die einzelnen Ergebnisse nicht voneinander zu unterscheiden sind

plainText:  HALLO WELT
key:        7343498623 <- Zufällig, genauso lang wie plainText, 1x verwenden
            3298463287
            5468765834

One-time pad (OTP)

- Vorteile
  - Einfach zu implementieren
  - Einfach zu benutzen
  - Schnell
  - Mathematisch nachweisbar 100% sicher
- Nachteile
  - Schlüssel sind sehr lang
  - Schlüsselaustausch schwierig

## Moderne Verfahren

- Veraltet
  - DES (Data Encryption Standard)
  - 3DES
- Zeitgemäß
  - AES (Advanced Encryption Standard)
    - Blockchiffre
    - Blocklängen 128 Bit, 192 Bit, 256 Bit
      - Nachrichten ggf mit Padding versehen, um auf Blocklänge aufzufüllen
    - Modus
      - ECB (Electronic Code Book): Block für Block verschlüsseln
      - CBC (Cipher Block Chaining): Block mit Ciphertext von Vorgänger kombinieren
        - Initialization Vector (IV): Zufällig

plainText               TI    CK    -T    RI CK -U ND -T RA CK
initializationVector VH
XOR                     TI^VH CK^SR -T^KL ...
cipherText              SR    KL    SE

- Empfehlung
  - AES-256-CBC

## Schlüsselaustauschproblem / Anzahl der Schlüssel

Alice <-----> Bob
  ^        /
  |       /
  v      /
Claire

2: 1
3: 3
4: 6
5: 10
6: 15
7: 21
8: 28
9: 36
10: 45
