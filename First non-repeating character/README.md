# Problem: [First non-repeating character](https://www.codewars.com/kata/52bc74d4ac05d0945d00054e)

Write a function named ```first_non_repeating_letter``` that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input ```'stress'```, the function should return ```'t'```, since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input ```'sTreSS'``` should return ```'T'```.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

[View on Codewars](https://www.codewars.com/kata/52bc74d4ac05d0945d00054e)

## Solution:

Basically we need to teach the function to count letters:
* First, we have our string ```'stress'```.
* And, we have our unique values for that string ```['s', 't', 'r', 'e']```
* We also have the twist of ```'T' == 't'```.

First, let us make ```'T' == 't'```:
```
var clone = s.toLowerCase().split("");
```
So now both ```'stress'``` and ```'sTreSS'``` === ```['s', 't', 'r', 'e', 's', 's']```.

Next, so we can compare them let us get the unique values:
```
var unique = [...new Set(clone)];
```

Now we need a way to find which of our unique values is the first one that does not repeat. We can do that by looping over them and counting how many times we find a match:
```
if (unique[i] === clone[x]) { count = count + 1; }
```
then only ```push()``` the non-repeating ones:
```
if (count === 1) { answer.push(unique[i]); }
```
So now we have an array ```['t', 'r', 'e']```. But we need to know if we want ```'T'``` or ```'t'```?

Once more we can loop over and compare this array with our original string ```s```.
```
if (s[i] === answer[x] || s[i] === answer[x].toUpperCase() ) {
  answer = [];
  answer.push(s[i]);
}
```
Now our array will be ```['T']``` or ```['t']``` based on what that value was in ```s```, and all that is left is to return that answer ```return answer.join("");```.
