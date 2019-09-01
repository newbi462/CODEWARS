# Problem: [Simple Pig Latin](https://www.codewars.com/kata/520b9d2ad5c005041100000f)

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

### Examples
```
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
```
[View on Codewars](https://www.codewars.com/kata/520b9d2ad5c005041100000f)

## Solution:

OK, I can not speak it, but it was something that I could code :)

Like so many things, this is about thinking over the logic of how to break it into pieces and then do with those pieces what you need to. In this case converting the string ```'Pig latin is cool'``` to an array ```[Pig, latin, is, cool]``` so the needed changes to each word could be made.

Now, in practice it is not that simple and the actual array we get is per character ```[ 'P', 'i', 'g' ]```, but that is all we need.
```
if (str[i] !== ' ') {holdword.push(str[i]);}
```

We know a ```' '``` is the end of the word, so then we just need to assemble the new Pig Latin version of the word.

First, we need to split our word:
```
if (i === 0) {letterone = clone[i];}
if (i > 0) {awnser.push(clone[i]);}
```
Now, we can move the first letter ```letterone``` of the word to the end of it, then add the ```"ay"```, and add the ```' '```.
```
awnser.push(letterone);
awnser.push('ay');
awnser.push(str[i]);
```
To give us our ```['i', 'g', 'P', 'ay', ' ']```.

Per the rules we don't touch punctuation.
```
if (str[i] === '!' || str[i] === '?' || str[i] === '.' ) {awnser.push(str[i]);}
```
So at the end as we loop over string all that is left is to join the new result ```return awnser.join("");```.
