# Problem: [Is my friend cheating?](https://www.codewars.com/kata/5547cc7dcad755e480000004)

* A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
* Within that sequence, he chooses two numbers, a and b.
* He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
* Given a number n, could you tell me the numbers he excluded from the sequence?

The function takes the parameter: ```n``` (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:
```
[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
```
with all ```(a, b)``` which are the possible removed numbers in the sequence ```1 to n```.
```
[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or
```
...will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return ```nil```).

(See examples of returns for each language in "RUN SAMPLE TESTS")

Examples:
```
removNb(26) should return [(15, 21), (21, 15)]
```
or
```
removNb(26) should return { {15, 21}, {21, 15} }
```
or
```
removeNb(26) should return [[15, 21], [21, 15]]
```
or
```
removNb(26) should return [ {15, 21}, {21, 15} ]
```
or
```
removNb(26) should return "15 21, 21 15"
```
or
```
in C:
removNb(26) should return  **an array of pairs {{15, 21}{21, 15}}**
tested by way of strings.
```
[View on Codewars](https://www.codewars.com/kata/5547cc7dcad755e480000004)

## Solution:

This kata is a perfect example of "stop and pseudo code the logic or math" then code that. Because, if you do not, you will solve the problem in a way that can be very inefficient or redundant. The more simple the problem the more easy it is to over look this. So I will cover both, as I rushed and did both.

### The Loops
We are give ```n```, and we need ```a sequence of numbers from 1 to n```.
* So we need a place to store those numbers: ```var arrayof1ton = [];```
* And we need a way to get them from nothing but ```n```:
```
for (let i = 0; i < n; i++) {
  arrayof1ton.push(copyn);
  copyn = copyn - 1;
}
```
So there is our```sequence of numbers from 1 to n (where n > 0)```.

#### Products:
"..the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b."
* sum of all numbers in the sequence
* product of a and b === sum of all - a - b

As we are already looping over ```a sequence of numbers from 1 to n```, we can sum them as we go ```sumall = sumall + copyn;```:
```
for (let i = 0; i < n; i++) {
  arrayof1ton.push(copyn);
  sumall = sumall + copyn;
  copyn = copyn - 1;
}
```

Now, we can loop over all possible ```a``` and ```b``` to test if ```a * b === sumall - a - b```:
```
for (let i = 0; i < arrayof1ton.length; i++) {
  a = arrayof1ton[i];
  for (let x = 1; x < arrayof1ton.length; x++) {
    b = arrayof1ton[x];
    prodab = a * b;
    sumof = sumall - a - b;

    if (prodab === sumof) {
      arrayofa.push(a);
      arrayofb.push(b);
    }
    sumof = 0;
  }
}
```
And yes, you can refine this to:
```
for (let i = 0; i < arrayof1ton.length; i++) {
  a = arrayof1ton[i];
  for (let x = 1; x < arrayof1ton.length; x++) {
    b = arrayof1ton[x];
    if (a * b === sumall - a - b) {
      arrayofa.push(a);
      arrayofb.push(b);
    }
  }
}
```

Now, all we need to do is push out the results in reverse, and test for if there was not one:
```
answer.push(arrayofa.reverse());
answer.push(arrayofb.reverse());
if (arrayofa.length > 0) {return answer;}
else {
  answer = [];
  return answer;
}
```

So, there you have it problem solved. YA, NOPE!!! As said at the start "stop and pseudo code the logic or math". This solution while logically sound has 2 spots were it is very weak and inefficient.

#### Sum of all Numbers in the Sequence:
Now, in and of its self, there is nothing wrong with ```sumall = sumall + copyn;``` except the cost: if ```n = 26``` it will take 26 loops to get this value, if ```n = 1000``` it will take 1,000 loops to get this value, and so on. The bigger the number the longer it takes. But, "the math" can fix this.
```
var sumalln = (n*(n+1))/2
```
If before we code we do the math to get ```sum of all numbers in a sequence of numbers from 1 to n (where n > 0)``` === ```(n*(n+1))/2``` we then get this equation that has the same cost/time to run regardless of the value of ```n```.

#### "..the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b."
In the same, the whole of the logic is to evaluate IF a single equation is true or false:
```
(a * b) = sumalln - a - b
```
Again, "stop and pseudo code the logic or math":
```
          (a * b) = sumalln - a - b
      (a * b) + a = sumalln - b
(a * b) + (a * 1) = sumalln - b
         a(b + 1) = sumalln - b
                a = (sumalln - b)/(b + 1)
```
Now that we took the time to do the algebra, we can define both ```a``` and ```b``` in terms of ```n```; and we can do this in a single loop:
```
for (let i = n; i > 0; i--) {
  b = i;
  a = (sumalln - b)/(b + 1);

  if (a < n && a % 1 === 0) {answer.push([a,b]);}
}
```
Remember, we were testing IF ```(a * b) = sumalln - a - b``` is ```true```, where both ```a``` and ```b``` are numbers in ```a sequence of numbers from 1 to n```. That is where the ```a % 1 === 0``` comes in. If ```a``` divided by 1 has a remainder, then it is not in the ```sequence of numbers from 1 to n```.
