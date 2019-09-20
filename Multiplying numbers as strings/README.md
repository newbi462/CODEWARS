# Problem: [Multiplying numbers as strings](https://www.codewars.com/kata/55911ef14065454c75000062)

This is the first part. You can solve the second part [here](https://www.codewars.com/kata/multiplying-numbers-as-strings-part-ii/javascript) when you are done with this. Multiply two numbers! Simple!

* The arguments are passed as strings.
* The numbers may be way very large
* Answer should be returned as a string
* The returned "number" should not start with zeros e.g. 0123 is invalid
Note: 100 randomly generated tests!

[View on Codewars](https://www.codewars.com/kata/55911ef14065454c75000062)

## Solution:

I hate to say it, but I more or less used a form of common core math to do this. But not at first.

### Why Simple Logical Multiplication Won't Work:
My first attempt at this works but is very inefficient in how it handles place values. To that end I will cover both, and why due to efficiency was forced to use a more common core like handling of place values.

### First, the Steps of Multiplication
So how would we do this long hand + code needs?
* strings to number
* a place value * b place value
* add place value zeros, or imply them in number placement
* sum current (a place value * b place value) + sum of other place values already computed

So at any one time we are doing ```1 number * 1 number```, then ```result + other results```. Where ```30 * 69``` would be:
* 0 * 9 = 0
* 0 * 6 = 0
* 9 * 3 = 27 + 0 + 0 for place value = 270
* 3 * 6 = 18 + 0 + 0 for place value = 1800
* 0 + 0 + 1800 + 270 = 2070

Now, I really just wanted to use my ```add(a,b)``` function from the [Adding Big Numbers](https://www.codewars.com/kata/525f4206b73515bffb000b21) kata, but that had a problem.

### Place Values
I decided to use the indexes of the arrays I stored the place values of the numbers in to also keep track of the place value:
```
var asplit = a.split("");
asplit.reverse();
var bsplit = b.split("");
bsplit.reverse();
```
This way if ```a``` === ```69```, we get ```[6, 9]``` and when we reverse it ```[9, 6]```; so ```9``` index ```[0]``` == 9 with 0 zeros or ```9```, and ```6``` index ```[1]``` == 6 with 1 zero or ```60```, and so on regardless of how many digest the number is. This way we can preserve the place value while still only working with one digit at a time.

The idea is sound, but my first implementation was to just add the ```0```s
```
for (let y = 0; y < i+x; y++) {
  placevaluezeros.push("0");
}
```
and then pass those values to my ```add(a, b)``` function
```
placevaluezeros.push(loopanswer);
for (let y = 0; y < i+x; y++) {
  placevaluezeros.push("0");
}
loopanswer = placevaluezeros.join("")
placevaluezeros = [];
answer = add(answer, loopanswer);
```
Which had an almost exponential flaw, in that the longer the number the more time it would spend looping over both creating these zeros and then adding ```0+0``` in the ```add(a, b)``` function. After trying every trick I could think of to speed up that process I realized it was only needed because I was trying to use the ```add(a, b)``` function. That, in fact. indirectly I already had all that info in my index place value set up. So if instead I did:
```
for (let i = 0; i < asplit.length; i++) {
    for (let x = 0; x < bsplit.length; x++) {
      loopanswer = parseInt( asplit[i], 0 ) * parseInt( bsplit[x], 0 );
      if (placevaluezeros[x+i] > 0) {
        hold = placevaluezeros[x+i];
      }
      //console.log(placevaluezeros)
      placevaluezeros[x+i] = loopanswer + hold;
      hold = 0;
      console.log(placevaluezeros);
    }
  }
```
That ```30 * 69``` would be:
```
[ 0 ]
[ 0, 0 ]
[ 0, 27 ]
[ 0, 27, 18 ]
```
or: 18 hundreds, 27 tens, and 0 ones. Basically, all the same numbers and place values from above.

### Convert back to base 10 values
While this is the answer it is not in base 10, 18 hundreds should be 1 thousand + 8 hundreds and so on. But, that is just a conversion:
```
for (var i = 0; i < placevaluezeros.length; i++) {
  hold = placevaluezeros[i] % 10; //the remainder is the correct value for this place value
  tonextplace = (placevaluezeros[i]-(hold)) / 10;
  answer.push(hold);
  if (placevaluezeros[i+1] >= 0) {
    hold = placevaluezeros[i+1];
    placevaluezeros[i+1] = tonextplace + hold;
  } else { answer.push(tonextplace); }
}
```
which will give us:
```
[ 0, 27, 18 ]
[ 0 ] // Base 10 answer by place
[ 0, 27, 20 ]
[ 0, 7 ] // Base 10 answer by place
[ 0, 27, 20 ]
[ 0, 7, 0, 2 ] // Base 10 answer by place
```

### Correct the Place Value Order
Now, the order is backwards, but ```.reverse()``` just like above fixes that no problem.
```
var answersplit = answer.reverse();//.reverse() to put 1s place at end instead of front
while (answersplit[0] === 0 && answersplit.length > 1) { answersplit.splice(0, 1); }
return answersplit.join("");
```
And while there should not be any, because our source ```[input]``` is a string, left the ```while()``` test for extra ```0```s just in case any of the strings passed are values like ```"0000030"```.

This kata while simple actually does a good job of enforcing the ```code no mote than you need to``` practice. Which no matter how long you have coded for is always something you can get tunnel vision on.
