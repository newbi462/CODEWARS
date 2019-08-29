# Problem: Sum of two lowest positive integers

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like
```
[19, 5, 42, 2, 77],
```
the output should be 7.
```
[10, 343445353, 3453445, 3453545353453]
```
should return 3453455.

[View on Codewars](https://www.codewars.com/kata/558fc85d8fd1938afb000014)

## Solution:

The problem is simple enough, in that we need the array sorted. In this case from low to high would be ideal.
```
numbers.sort((a, b) => a - b);
```
Now that the numbers in the array are sorted low to high the first 2 indexes
```
numbers[0];
numbers[1];
```
would be the "two lowest positive integers" we seek.
```
return numbers[0] + numbers[1];
```
