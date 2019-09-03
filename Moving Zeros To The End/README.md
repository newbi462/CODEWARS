# Problem: [Moving Zeros To The End](https://www.codewars.com/kata/52597aa56021e91c93000cb0)

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
```
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
```
[View on Codewars](https://www.codewars.com/kata/52597aa56021e91c93000cb0)

## Solution:

This problem is basically test if the value is a ```0``` or not.

First, let us move all the non-zeros to our answer:
```
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {answer.push(arr[i]);}
}
```

Then, let us move the ```0```s:
```
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {answer.push(arr[i]);}
}
```

Now that they are in the right order all we need to do is return the answer ```return answer;```.

Note: there is a harder related version of this problem [Remove Zeros](https://www.codewars.com/kata/52aae14aa7fd03d57400058f).
