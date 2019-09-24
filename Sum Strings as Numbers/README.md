# Problem: [Sum Strings as Numbers](https://www.codewars.com/kata/5324945e2ece5e1f32000370)

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:
```
sumStrings('1','2') // => '3'
```
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

[View on Codewars](https://www.codewars.com/kata/5324945e2ece5e1f32000370)

## Solution:

This kata is very similar to another one [Adding Big Numbers](https://www.codewars.com/kata/525f4206b73515bffb000b21) which I had already done, so I stated by importing my function from that kata ```add(a, b);```.
```
var answer = add(a, b
```

The twist with this version is it will pass ```a``` or ```b``` with leading zeros ```00000025```. That was easy enough to address with a loop to remove those leading zeros:
```
var answersplit = answer.split("");
while (answersplit[0] === "0" && answersplit.length > 1) { answersplit.splice(0, 1); }
return answersplit.join("");
```

Which we can combine and further refine to be:
```
var answer = add(a, b).split("");
while (answer[0] === "0" && answer.length > 1) { answer.splice(0, 1); }
return answer.join("");
```

To a degree this felt like cheating, as this was a 4kyu, but this is not uncommon in development; after you solve enough problems you end up with a code library where at times it occurs to you "I already have code that will do that" that at times to work fast you will splice it in and refine for the current problem's use.
