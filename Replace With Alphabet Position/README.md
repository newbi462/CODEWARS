# Problem: Replace With Alphabet Position

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

```
"a" = 1, "b" = 2,
```
etc.

Example
```
alphabetPosition("The sunset sets at twelve o' clock.")
```
Should return
```
"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
```
(as a string)

[View on Codewars](https://www.codewars.com/kata/546f922b54af40e1e90001da)

## Solution:

This was basically a standard substitution where a key of the alphabet could be used.
```
var alphabet = "abcdefghijklmnopqrstuvwxyz";
```
in that
```
alphabet[0] === a, so a === 0
```
This solution has 2 problems:
* the values are all off by 1 in that z === 25 not 26 as it should due to the zeroth nature of indexes
* and UpperCase !== LowerCase, in that "a" in not the same as "A"

This case can be corrected using
```
.toLowerCase();
```
or if you prefer
```
.toUpperCase();
```
It would all depend on what case of letters you used for the alphabet, the point is you want them to match.

The first problem of simple +1 math is easy enough to do after the fact with a .map.
```
const plus1 = arrayfornumb.map(x => x + 1);
```
Then it is just a matter of return in the answer in the required string.
```
return (plus1.join(' '));
```
