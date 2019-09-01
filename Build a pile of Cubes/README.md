# Problem: [Build a pile of Cubes](https://www.codewars.com/kata/5592e3bd57b64d00f3000047)

Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb ```(find_nb, find-nb, findNb)``` will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

### Examples:
```
findNb(1071225) --> 45
findNb(91716553919377) --> -1
```
```
mov rdi, 1071225
call find_nb            ; rax <-- 45

mov rdi, 91716553919377
call find_nb            ; rax <-- -1
```
[View on Codewars](https://www.codewars.com/kata/5592e3bd57b64d00f3000047)

## Solution:

This is basically can you do the math:
m = 1^3 + 2^3.... until you have m.

So m - 1^2 - 2^3.... until you have 0 is what we are looking for, which can best be done by a loop:
```
for (let i = 1; m > 0; i++)
```
and
```
m = m - Math.pow(i,3);
```
From there you just need to log the number of loops to give you n ```n = i;``` or in the case where no such n exists you would end up with ```m < 0```. So we would test for this to satisfy "-1 if there is no such n".
```
if (m < 0) {n = -1;}
```
And then return our result:
```
return n;
```
