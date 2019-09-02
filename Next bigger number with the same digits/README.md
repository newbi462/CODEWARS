# Problem: [Next bigger number with the same digits](https://www.codewars.com/kata/55983863da40caa2c900004e)

You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:
```
12 ==> 21
513 ==> 531
2017 ==> 2071
```
If no bigger number can be composed using those digits, return -1:
```
9 ==> -1
111 ==> -1
531 ==> -1
```
[View on Codewars](https://www.codewars.com/kata/55983863da40caa2c900004e)

## Solution:

This problem is essentially about trying to find a midpoint where the number must change to return the next biggest number formed by the same digits. ```old start + new midpoint + new order of remaining numbers```.
To that end we have three things to do:
* Define the numbers to the left of the midpoint that will be the same.
* Define the midpoint, or number that must change value to make the next biggest number formed by the same digits.
* Define the new order for the remaining numbers to the right of the midpoint.

To define the midpoint is easy enough. We just need to test the relationship of each place value. To this we need the number place values in an array.
```
var clone = n.toString().split("");
```
So, now ```2017``` is ```[2,0,1,7]```.

If we start at the end (ones place) and compare ```7``` to ```1``` we can see that 7 is larger, so we know if the values place value order were changed the number would become larger.
```
for (let i = clone.length-1; i > 0; i--) {
  if (clone[i] > clone[i-1])
```
But what about compare ```1``` to ```0```? We want only the first match, as we can have only one midpoint. If we add a way to kill this loop once it finds a match it will only return the first one.
```
for (let i = clone.length-1; i > 0 && kill !== 1; i--) {
  if (clone[i] > clone[i-1]) {
    mid = i-1;
    kill = 1;
  }
```
From this point on it is best to think of the number in three parts
* start ```[2,0]```
* midpoint
* new end of number
But, we need to define the number values for the midpoint and the new end; and set the start to a value we can work with.

First, the start:
```
for (let i = 0; i < mid; i++) {
  start.push(clone[i]);
}
```

Next the end, which will also contain our value for the new midpoint for now:
```
for (let i = mid; i < clone.length; i++) {
  end.push(clone[i]);
}// get the rest
```
To make finding the midpoint easy we will sort this ```end.sort((a, b) => a - b);``` so the numbers are in order by size.

Next, it is time to find that new midpoint value:
```
for (let i = 0; clone[mid] >= end[i]; i++) {
  printnewmid = end[i+1];
}
```
See the use of ```clone[mid] >= end[i]``` to compare the value of the old midpoint to the new one so we make sure the new one is the next largest value, not the largest value, because we only want the next biggest number.

Next, we need to make the new end by making sure we are only using the unused values and then ```newend.push(end[i]);``` the rest.

Last we need to assemble our new answer by putting these three values together:
```
answer.push(start.join(""));
answer.push(printnewmid);
answer.push(newend.join(""));
answer = parseInt( answer.join(""), 0 );
```

Now all we need to do is either return our new number, or if there is no bigger number that can be composed using the digits, return -1: ```if (answer > n) {return answer;} else {return -1;}```.
