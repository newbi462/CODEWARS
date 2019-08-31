# Problem: [Find the missing letter](https://www.codewars.com/kata/5839edaa6754d6fec10000a2)

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get a valid array. And it will be always exactly one letter is missing. The length of the array will always be at least 2.

The array will always contain letters in only one case.

Example:
```
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
```
(Use the English alphabet with 26 letters!)

Have fun coding it...

[View on Codewars](https://www.codewars.com/kata/5839edaa6754d6fec10000a2)

## Solution:

This kata has some related logic to [Replace With Alphabet Position](https://www.codewars.com/kata/546f922b54af40e1e90001da) in that once again this is basically test against the index of ```var alphabet = "abcdefghijklmnopqrstuvwxyz";```.

Because the letters can be in Upper or Lower case ```.toLowerCase()``` and ```.toUpperCase()``` are useful:
```
arraytoconvert = array[i].toLowerCase();
```

Once the [input] matches the alphabet key to test against we want these values in a number value format so we can compare and test the order.
```
var arrayfornumb = [];
arrayfornumb.push(alphabet.indexOf(arraytoconvert));
```
NOTE: like all indexes this will start with ```0``` so all letters are technically one place off.

Now the logic of this is the letters should count by +1:
```
['a','b','c','d','f'] -> 'e'
```
is now
```
[0, 1, 2, 3, 5] -> 4
```  

So, we are looking for where ```arr[i]+1 != arr[i+1]```, but there is a catch; in that this condition is ```true``` 2 times:
* first, at the index we want
* next, when index+ exceeds ```arr.length```

So rather than test for ```!=``` we will indirectly test for it by doing nothing with "===".
```
if (arrayfornumb[i]+1 === arrayfornumb[i+1]) { }
```
and nothing when we will exceed ```.length```
```
else if (i + 2 > arrayfornumb.length) { }
```
and so return only the index we want
```
else { answer = alphabet[arrayfornumb[i]+1]; }
```

Now all that is left is to make sure the case of the value returned matches the original [input].
```
if (array[0] === array[0].toLowerCase()) { return answer; }
else { return answer.toUpperCase(); }
```
