# Problem: [Multiplying numbers as strings: Part II](https://www.codewars.com/kata/multiplying-numbers-as-strings-part-ii/javascript)

This is the Part II of [Multiplying numbers as strings](https://www.codewars.com/kata/55911ef14065454c75000062).

## TODO
Multiply two numbers! Simple!

## Rules
* The arguments are passed as strings.
* The numbers will be very large
* The arguments can be negative, in decimals, and might have leading and trailing zeros. e.g. ```"-01.300"```
* Answer should be returned as string
* The returned answer should not have leading or trailing zeroes (when applicable) e.g. ```"0123"``` and ```"1.100"``` are wrong, they should be ```"123"``` and ```"1.1"```
* Zero should not be signed and ```"-0.0"``` should be simply returned as ```"0"```.

[View on Codewars](https://www.codewars.com/kata/multiplying-numbers-as-strings-part-ii/javascript)

## Solution
First, if you have not done [part one](https://www.codewars.com/kata/55911ef14065454c75000062) yet, you should, because that is what you will start with. I renamed my part one function to ```multiplyp1``` and called it to do most of the math:
```
multiplyp1(a, b);
```
Basically this part 2 tosses some extra points of failure at at the multiplication, so in no particular order here is how to deal with each one.

### Decimals
The first addition I corrected was the decimals. Because when the place value multiplying function is fed a ```"."``` it will try and do something like ```6 * .```, which will out put ```NaN```. The good news is like with place values decimals are easy enough put back in after the fact:
```
var nsplit = n.split("");
for (let i = 0; i < nsplit.length; i++) {
  if (nsplit[i] === ".") {
    dec = dec + nsplit.length - i - 1;
    nsplit.splice(i, 1);
    i = i-1;
    n = nsplit.join("");
  }
}
```
and
```
var osplit = o.split("");
for (let i = 0; i < osplit.length; i++) {
  if (osplit[i] === ".") {
    dec = dec + osplit.length - i - 1;
    osplit.splice(i, 1);
    i = i-1;
    o = osplit.join("");
  }
}
```
will let us keep track of the decimals by counting how many decimal places we have. For example: ```2.01 * 3.0000``` would have ```2 + 4``` decimals or ```6```. So ```201 * 30000``` === ```6030000```. And then we use that count to put the decimals back trick we all learned in grammar school, to count in 6 places.
```
if (dec > 0 && answer != "0") {
  answersplit.splice(answersplit.length - dec, 0, ".");
  answer = answersplit.join("")
}
```
to give us ```6.030000```.

### Trailing Zeros
Now we need to deal with these extra zeros. Which is easy enough to resolve with a loop and some logic:
```
answersplit = answer.split("");
while (answersplit[answersplit.length-1] === "0" && dec > 0 && answer != "0") {
    answersplit.splice(answersplit.length-1, 1);
    answer = answersplit.join("")
}
```
We just need to take care to address cases where there was no decimals, and we do not want to effect and answer of ```0``` to be null. So now we have ```6.03```.

### Negative Numbers
Now we need to address ```"-"``` because like ```"."``` this will give us a different answer than we want. The approach is more or less the same:
```
if (nsplit[i] === "-") {
  hold.push(nsplit[i]);
  nsplit.splice(i, 1);
  i = i-1;
  n = nsplit.join("");
}
```
and
```
if (osplit[i] === "-") {
  hold.push(osplit[i]);
  osplit.splice(i, 1);
  i = i-1;
  o = osplit.join("");
}
```
to take the "-" out of our numbers. And then at the end we put it back in based on if we had one or two of them, because ```- * -``` === ```+```.
```
answersplit = answer.split("");
if (hold[0] === "-" && hold.length === 1 && answer != "0") {
  answersplit.splice(0, 0, hold[0]);
  answer = answersplit.join("")
}
```

### Clean up the logic
There is some fine tuning to address such as:
* If the answer ends in a decimal:
```
if (answersplit[answersplit.length-1] === ".") {
  answersplit.splice(answersplit.length-1, 1);
```
and for order of operation logic leading zeros need to be addressed only after decimals are put back in:
```
while (answersplit[0] === "0" && answersplit.length > 1 && answersplit[1] != "." ) {
  answersplit.splice(0, 1);
```
Other wise numbers like ```0.00005``` and the like will be handled incorrectly.

But this Part 2 is basically add the logic to Part 1 to handle a more robust set of value failure points.
