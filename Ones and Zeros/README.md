# Problem: [Ones and Zeros](https://www.codewars.com/kata/578553c3a1b8d5c40300037c)

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: ```[0, 0, 0, 1]``` is treated as ```0001``` which is the binary representation of ```1```.

Examples:
```
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
```
However, the arrays can have varying lengths, not just limited to ```4```.

[View on Codewars](https://www.codewars.com/kata/578553c3a1b8d5c40300037c)

## Solution:

This problem is related to the conversion needed for [Binary Addition](https://www.codewars.com/kata/551f37452ff852b7bd000139), only in reverse. So ```parseInt()``` is as useful here in the same way ```toString()``` was there.

In the like there is the built in base converter.
```
parseInt(value,2);
```  
but we want the whole value to converted. So ```arr.join('')``` will as defined treat ```[0, 0, 0, 1]``` as ```0001```.

ver1.0 is this logic done in steps where each step is a var, and then the result is returned to provide the [output], ver1.1 is the same code redone to be a single return of these steps in one line. 
