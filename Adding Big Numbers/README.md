# Problem: [Adding Big Numbers](https://www.codewars.com/kata/525f4206b73515bffb000b21)

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

### Example
```
add("123", "321"); -> "444"
add("11", "99"); -> "110"
```
### Notes
* The input numbers are big.
* The input is a string of only digits
* The numbers are positives

[View on Codewars](https://www.codewars.com/kata/525f4206b73515bffb000b21)

## Solution:

Unfortunately, this is not as simple as ```a + b```. For those who do not know after so many digests like most languages JavaScript will truncate to scientific notation.

### For example:
```
var test = 123548692515198151513154854846315165845151854586 + 7854691156321871451258996521148512159862174;
console.log(test);
```
Will give us ```1.2355654720635448e+47```, when what we want is the whole number:
```
'123556547206354473384606113842836314357311716760'
```
Now, in most cases the fact that we tend not to deal with numbers larger than the quadrillions makes this irrelevant; but, for this problem we need to do the math by hand. In short what is the logic of addition?

Well let us add two numbers using pseudo code logic: ```add("11", "99");```
* STEP 1: 9 ones + 1 one = 10 ones
* STEP 2: 10 ones === 1 ten
* STEP 3: (carry the one, or regroup if you learned math common core)
* 10 ones - 1 ten = 0 ones to the answer; add 1 ten to the tens (aka carry the one)
* STEP 4: 1 ten carried + 9 tens + 1 tens = 11 tens
* STEP 5: 10 tens === 1 hundred
* STEP 6: 11 tens - 1 hundred = 1 tens to the answer; add 1 hundred to the hundreds (aka carry the one)
* STEP 7: answer = 1 hundred + 1 tens + 0 ones === 110
I will admit that I did combine some steps the 2nd time we carried the one, but hay I am not a computer. So let us code the fast idiot to do these steps quickly for us no matter how many place values there are.

The solution to this problem is to teach the function to do the steps of carry the one addition so it can do every ```a+b``` to give us the full answer, even for long large numbers.
```
sum = a + b + carry;
```
and
```
if (carry > 0) {
  carry = 0;
}
if (sum - 10 < 0) {
  answer.push(sum.toString());
}
if (sum - 10 >= 0) {
  carry = 1;
  sum = sum - 10;
  answer.push(sum.toString());
}
```
at its most basic.

But, we need to break ```a``` and ```b``` into place values:
```
var asplit = a.split("");
var bsplit = b.split("");
```
so that ```"11"``` becomes ```["1", "1"]``` and ```"99"``` becomes ```["9", "9"]```.

Now, we just need to loop over this:
```
for (let i = asplit.length-1; i >= 0; i--)
```
and use ```parseInt()```
```
sum = parseInt( asplit[i], 0 ) + parseInt( bsplit[i], 0 ) + carry;
```
then carry the last place value
```
if (carry > 0) { answer.push(carry.toString()); }
```
and we get ```["0", "1", "1"]```, but we can fix that with ```answer.reverse();``` to get ```["1", "1", "0"]```, so ```answer.join("");``` and we are done, right? "NOPE!!!"
* What if ```a = "1"``` and ```b = "99"```? We would get ```[""]```.
* What if ```a = "11"``` and ```b = "9"```? We would get ```[""]``` because ```bsplit[asplit.length-1]``` is undefined.

So we have three conditions to test for that change the relationship of the indexes of ```asplit``` and ```bsplit```:
* ```asplit.length === bsplit.length```
* ```asplit.length < bsplit.length```
* ```asplit.length > bsplit.length```

Now, the order of operations will matter for this:
### ver1.0
IMO, this was me doing this wrong:
```
if (asplit.length === bsplit.length) {
  for (let i = asplit.length-1; i >= 0; i--) {
```
and
```
if (asplit.length < bsplit.length) {
  for (let i = bsplit.length-1; i >= 0; i--) {
```
and last
```
if (asplit.length > bsplit.length) {
  for (let i = asplit.length-1; i >= 0; i--) {
```
Yes, we do need to test that the loop runs for the ```.length``` of the longer number, and yes depending if ```a``` or ```b``` is that number the logic of how the place values sum changes slightly. But, there was a much more efficient way to do both.

### ver1.1
First, fixing the for loop so it is only one loop:
```
for (let i = Math.max(asplit.length, bsplit.length)-1; i >= 0; i--) {
```
Rather than have all three conditions ```===```,```<```,```>``` use of ```Math.max()``` is a single solution that works for all three cases.

Next, the only thing that changes with the three cases is how the sum is done.
So the nested if logic can be combined to put those three cases inside the loop:
```
if (asplit.length === bsplit.length) { sum = parseInt( asplit[i], 0 ) + parseInt( bsplit[i], 0 ) + carry; }
if (asplit.length < bsplit.length) {
  if (i >= bsplit.length-asplit.length) {
    var x = bsplit.length-asplit.length;
    sum = parseInt( bsplit[i], 0 ) + carry + parseInt( asplit[i-x], 0 )
  }
  if (i < bsplit.length-asplit.length) { sum = parseInt( bsplit[i], 0 ) + carry; }
}
if (asplit.length > bsplit.length) {
  if (i >= asplit.length-bsplit.length) {
    var x = asplit.length-bsplit.length;
    sum = parseInt( asplit[i], 0 ) + carry + parseInt( bsplit[i-x], 0 )
  }
  if (i < asplit.length-bsplit.length) { sum = parseInt( asplit[i], 0 ) + carry; }
}
```

In short, from time to time you will mess up and go down the wrong path or logic with your code. Part of me considered not even pushing this error to this git, but honestly it is a good example of tunnel vision created bad code. And, it is not wrong to first solve a problem, and then refine your solution.

In practice these would be one file, and you would use Git to track the changes and refinement. But as part of the point of this git is for people learning to code to get documentation on these solutions I pushed them up as two separate files so it is easy for people less familiar with git to glance at the two versions. Line for line they are the exact same code logic, the difference is the order of operations removes redundancy and duplication in ver1.1.
