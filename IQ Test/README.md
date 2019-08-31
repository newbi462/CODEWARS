# Problem: [IQ Test](https://www.codewars.com/kata/552c028c030765286c00007d)

Bob is preparing to pass IQ test. The most frequent task in this test ```is to find out which one of the given numbers differs from the others```. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from ```1 (not 0)```

### Examples :
```
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
```
[View on Codewars](https://www.codewars.com/kata/552c028c030765286c00007d)

## Solution:

Basically, this problem is asking you to find the odd value out which can be ```even``` or ```odd```. The song "one of these things is not like the other" got stuck in my head.

Now, initially the values are not in a friendly format ```"2 4 7 8 10"```, but we can convert them to an array easy enough using ```var arr = numbers.split(" ");``` and use those spaces ```" "``` between them as the key for what should be the indexes of our array.

Testing for ```even``` or ```odd``` is easy enough using the ```%``` remainder:
```
arr[i] % 2 === 1;
arr[i] % 2 === 0;
```
In that there will either be an odd ```1``` left over dividing by 2 or there will not.

But, how do we know if we are looking for ```even``` or ```odd```? Well, indirectly the problem gives us a conditional constraint to test for:
* We know that the ```even``` or ```odd``` will be different.
* In other words ```x y x```, where x is ```even``` or ```odd```, or y is ```even``` or ```odd```, but not both.

So, if 2 of the 3 values given are ```even``` or ```odd```, the value we are seeking must be the opposite of those 2.

This is easy enough to test for:
```
if (arr[0] % 2 === 0 && arr[1] % 2 === 0 ||
    arr[0] % 2 === 0 && arr[2] % 2 === 0 ||
    arr[2] % 2 === 0 && arr[1] % 2 === 0 )
```
and
```
if (arr[0] % 2 !== 0 && arr[1] % 2 !== 0 ||
    arr[0] % 2 !== 0 && arr[2] % 2 !== 0 ||
    arr[2] % 2 !== 0 && arr[1] % 2 !== 0 )
```
Even if the first 3 values of our set of given values are ```x x x```, this conditional test of 2 of them matching will tell us if we are looking for ```even``` or ```odd```.

From there it is easy enough to test if ```arr[i]``` is ```even``` or ```odd``` and then ```return (i+1);``` to satisfy "..indexes of the elements start from ```1 (not 0)```".
