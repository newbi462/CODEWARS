# Problem: [One Line Task: Check Range](https://www.codewars.com/kata/one-line-task-check-range)

### Task
You're given an array of integers ```a``` and two integers ```x``` and ```y```. Count the number of elements in the array such that ```x ≤ a[i] ≤ y```, where ```i``` is the 0-based index of the element.

### Code Limit
Less than ```48``` characters.

### Example
```
For a = [2, 5, 6, 7, 1, 3, 4, 11, 56, 49], x = 1 and y = 7,
```
the output should be ```7```.

elements ```2, 5, 6, 7, 1, 3, 4``` should be counted.

[View on Codewars](https://www.codewars.com/kata/one-line-task-check-range)

## Solution:

The challenge in this problem is not the problem its self, but instead the limitation imposed on it.
### Code Limit
Less than ```48``` characters.

To count the number of elements in the array such that ```x ≤ a[i] ≤ y```, where ```i``` is the 0-based index of the element, can be done simple enough using at least 3 ways:
* a Loop and IF test
* .filter()
* .map()

### Loops and If
The most strait forward way to do this is with a for loop:
```
function test(a,x,y) {
  var count = 0;
  for(var i = 0;i < a.length;i++){
    if (x <= a[i] && a[i] <= y){count++;}
  }
  return count;
}
```
Which if we make all the variables one character, and remove every space we can(making it harder to read in the process) get:
```
checkRange=(a,x,y)=>{c=0;for(i=0;i<a.length;i++){if(x<=a[i]&&a[i]<=y){c++;}}return c;}
```
Sadly this is 86 characters, or 39 over the max we can use to solve this problem.

As a work around a while loop is a little better:
```
function test(a,x,y) {
  c=0;
  i=0;
  while (a[i]>0) {
    if (x <= a[i] && a[i] <= y){c++;}
    i++;
  }
  return c;
}
```
or
```
checkRange=(a,x,y)=>{c=0;i=0;while(a[i]>0){if(x<=a[i]&&a[i]<=y){c++;}i++;}return c;}
```
Down to 84 characters.

Basically unless we can cheat, a loop will never be short enough. But some times we can cheat, and that is the point of the Kata: let us test how smart its test is?
```
checkRange=(a,x,y)=>{return cheat(a,x,y)}

function cheat(a,x,y) {
  var c=0;
  var i=0;
  while (a[i]>0) {
    if (x <= a[i] && a[i] <= y){c++;}
    i++;
  }
  return c;
}
```
DARN!!! Well, if the test had only been testing line 1, which is now 41 characters long... but nope that failed spectacularly.


### .filter()
So ```.filter()``` like the name suggests will let us make a filter to only have the values we want.
In this case:
```
a.filter(i=>x<=i&&i<=y)
```
will give us ```[ 2, 5, 6, 7, 1, 3, 4 ]``` from ```[2, 5, 6, 7, 1, 3, 4, 11, 56, 49]```.
So ```checkRange=(a,x,y)=>a.filter(i=>x<=i&&i<=y).length``` will give us the count we want.

And, the frustrating part is this is 50 characters. So close. Is there any part of this we can do with less?
Well a closer look at ```x<=i&&i<=y``` shows we are doing two tests, can we do one instead?
```
x>i==i>y
```
would do the same job in that it compares for when both opposite conditions are ```false```, because in this case both can not be ```true```. It is mathematically imposable for a number to be both under and over a range of values at the same time.

So now we have ```checkRange=(a,x,y)=>a.filter(i=>x>i==i>y).length```

DARN!!! That is exactly 48 characters, and we want "less than ```48``` characters". Is there anything we can cut from that to get the one less character?

Maybe you can, but I could not find something to cut or shrink. Instead I went to get a coffee with plans to come back and see if I could do this another way.

### .map()
At its most basic ```.map()``` is a built in prototype that will loop over something to make the changes of the re-map. So in many ways this solution is very similar to the first attempts. If you get a little lost in the syntax keep that in mind, as it is the same logic in many ways.

So ```a.map(i=>c+=x>i==i>y,c=0)``` will count over our array ```a```:
```
[2, 5, 6, 7, 1, 3, 4, 11, 56, 49];
```
and seek matches to the ```x>i==i>y``` == ```x>a[i]==a[i]>y``` condition. In this case ```c + (true or false)```, where true is 1 and false is 0.
Then, it will map over the array with that count to give us:
```
[ 1, 2, 3, 4, 5, 6, 7, 7, 7, 7 ]
```

But how do we [output] this ```7``` count? Keep in mind ```checkRange=(a,x,y)=>a.map(i=>c+=x>i==i>y,c=0)``` is 45 of our max 47 characters. So how to do that in 2 characters or less?

Well the answer is ```|c```. But it is a little hard to explain why. In some ways this is a hack of the logic of [JavaScript Bitwise Operations](https://www.w3schools.com/js/js_bitwise.asp) in that this forces ```array|c```, and so will return ```c``` as a numeral value, which is what we want.
```
checkRange=(a,x,y)=>a.map(i=>c+=x>i==i>y,c=0)|c
```
which is exactingly the 47 characters we had to work with.
