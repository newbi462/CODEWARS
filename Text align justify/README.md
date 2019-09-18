# Problem: [Text align justify](https://www.codewars.com/kata/537e18b6147aa838f600001b)

Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. The longest word will never be greater than this width.

Here are the rules:

Use spaces to fill in the gaps between words.
Each line should contain as many words as possible.
Use '\n' to separate lines.
Gap between words can't differ by more than one space.
Lines should end with a word not a space.
'\n' is not included in the length of a line.
Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
Last line should not be justified, use only one space between words.
Last line should not contain '\n'
Strings with one word do not need gaps ('somelongword\n').
Example with width=30:
```
Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.
```
Also you can always take a look at how justification works in your text editor or directly in HTML (css: text-align: justify).

Have fun :)


[View on Codewars](https://www.codewars.com/kata/537e18b6147aa838f600001b)

## Solution:

My solution to this is far from elegant. It is basically just a set of if/else logic.

### First Get the Words
To start with, our text we want to justify is a single string, so we need to break it up into the individual words that we can work with.
```
var arrayofstr = str.split(" ");
```
Now each word is an index in our new array ```arrayofstr``` so we can call each word one by one.

### Pull Words, Count Spaces, if next word will put over End Line..
So the logic of this is simple enough:
* Pull a word
* Add it and spaces to the line
* If the word would exceed the max length for the line, end the line, and start the next line

#### Pull a Word:
```
for (let i = 0; i < arrayofstr.length; i++) {

  if (i+1 < arrayofstr.length) {
    nextword = arrayofstr[i+1].split("");
  }

  wordon = arrayofstr[i].split("");
  count = count + wordon.length;

  lenline.push(wordon.join(""));
  lenline.push(" ");
  count = count + 1;
  spaces = spaces + 1;
  lastline = lenline;
```
This way we can always look both at the current word ```wordon = arrayofstr[i].split("");```, and the weed that will be next ```nextword = arrayofstr[i+1].split(""); ``` to know if the next word would exceed the max length.

#### Make a Line:
We would start this when the next word would exceed the max length.
```
if (count + nextword.length > len) {
  spaces = spaces + (len - count);

  for (let x = 0; x < lenline.length; x++) {
    if (lenline[x] !== " ") {
      holdlinewords.push(lenline[x]);
    }

    eqspace = spaces / (holdlinewords.length-1);
    extraspace = spaces % (holdlinewords.length-1);
  }
```
Then we need to test which rule we want for the spaces we are adding:
```
if (extraspace === 0) {
  for (let x = 0; x < holdlinewords.length-1; x++) {
    answer.push(holdlinewords[x]);
    for (let a = 0; a < eqspace; a++) {
      answer.push(" ");
    }
  }
  answer.push(holdlinewords[holdlinewords.length-1]);
// is this the last line?
  if (i+1 < arrayofstr.length) {answer.push('\n');}
  lenline = [];
  holdlinewords = [];
  spaces = 0;
  lastline = null;
}
else if (extraspace > 0) {
  for (let x = 0; x < holdlinewords.length-1; x++) {
    answer.push(holdlinewords[x]);
    if (extraspace > kill) {
      answer.push(" ");
      kill = kill + 1;
    }
    for (let a = 0; a < (eqspace-(eqspace % 1)); a++) {
      answer.push(" ");
    }
  }
  answer.push(holdlinewords[holdlinewords.length-1]);
  if (i+1 < arrayofstr.length) {answer.push('\n');}
  lenline = [];
  holdlinewords = [];
  spaces = 0;
  kill = 0;
  lastline = null;
}
else {
  answer.push(holdlinewords);
  if (i+1 < arrayofstr.length) {answer.push('\n');}
  lenline = [];
  holdlinewords = [];
  spaces = 0;
  lastline = null;
}
```
Note the extra test for the last line which should not have a ```\n```, the rest is just: are the spaces the same each, or some more, and if so how many more?

#### Have we passed every word?
Now, when all is said and done, at the end this will either have passed all the words, or it will be holding some because they were not enough to make a whole line per the rules of this kata. So we need to test for these stranglers and if they exist add them under the different rules for the last unjustified line.
```
if (lastline !== null) {
  for (let i = 0; i < lastline.length-1; i++) {
    answer.push(lastline[i]);
  }
}
```

Now as said, this is sloppy code, more than one of these if/else stamens repeats the same thing. There is more than some room for refinement here.
