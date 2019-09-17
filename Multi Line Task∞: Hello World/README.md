# Problem: [Multi Line Task∞: Hello World](https://www.codewars.com/kata/59a421985eb5d4bb41000031)

You need to write a function ```f``` that returns the string ```Hello, world!```.

### Requirement:
* Every line must have at most 1 character
* total number of lines must be less than 145.

Hint: It's possible to complete this in 99 lines only.

Easier version: https://www.codewars.com/kata/5935558a32fb828aad001213

[View on Codewars](https://www.codewars.com/kata/59a421985eb5d4bb41000031)

## Solution:

First, you will use your solution to the [easier version](https://www.codewars.com/kata/5935558a32fb828aad001213) as a base for this kata, so if you have not solved that one yet, so you can refine it, you will want to do that first.

The twist in this version is that instead of 2 characters per line you now "Every line must have at most 1 character".

So we cant do:
```
[
'\
t\
r\
i\
m'
]
```
but instead must do:
```
[t+r+i+m]
```
or
```
[
t
+
r
+
i
+
m
]
```

So how do we get rid of the need for the ```\``` and ```'```, and the ```"``` for string in that version?

### First, re-order:
Starting with the function from that [easier version](https://www.codewars.com/kata/5935558a32fb828aad001213):
```
f = ""['trim']['bind']`Hello, world`
```
we need to re-order it to be more dividable:
```
f = ``['trim']['bind']("Hello, world!")
```

### Next, define them:
Now, what would happen if we tried to run ```f = ``['trim']['bind'](Hello, world!)```? We would get ```ReferenceError: Hello is not defined```.
The same would happen for ```[trim]``` you get ```ReferenceError: trim is not defined```. But, because computers are fast idiots that is how we solve this.

#### define the values so you can use them:
So what letters, symbols, and space do we need to make ```[trim][bind](Hello, world!)```, excluding duplicates?
```
trimbndHelo, w!
```
Now, let us define them:
```
[,Y, ,o, ,u, ,c, ,H, ,e, ,a, ,t, ,d, ,O, ,n, ,T, ,h, ,i, ,s,] = ` t r i m b n d H e l o ,   w ! `
```
This is basically
```
[,x, ,y, ,z,] = ` x  y  z `
```
, so that  ```x === "x", y === "y" and z === "z"```. I just used ```YoucHeatdOnThis``` as my key, because I have noticed that there are some comments about people cheating on Codewars Kata. And, my codewars git is public, and I do make readme files so people can follow the logic and learn if they are stuck.

#### Please, don't cheat:
For myself, I do not understand why you would "cheat" on Codewars, the whole point is to work the Kata/problem your self to better understand the code and "stretch" to work within the limits imposed. On some of these: 1kyu, 2kyu, 3kyu problems there is really only one solution because of the constraints. IMO, it is not wrong to look up "how do you make code do X?", because that is part of working most problems in practice. You may know how to solve it, you just need to reference how to code that logic for syntax because it is obscure. But, if all you are doing is copy/paste code with no understanding of it, well for things like Codewars you are really cheating your self in the end.

To that end, if you landed here looking for help on this problem: my suggestion would be to make your own key, and express your self. It will force you to recode most of this solution in a way that will force you to understand the code.

### Last, substitute for how we defined it:
So we had
```
f = ``['trim']['bind']("Hello, world!")
```
and
```
``
```
has been moved to be part of our key
```
[,Y, ,o, ,u, ,c, ,H, ,e, ,a, ,t, ,d, ,O, ,n, ,T, ,h, ,i, ,s,] = ` t r i m b n d H e l o ,   w ! `
```
So now ```""``` shifts over
```
f = ""[t+r+i+m][b+i+n+d](H+e+l+l+o+c+s+w+o+r+l+d+x)
```
and we use our key to match these letters, spaces, and symbols to what we defined them as:
```
f = ""[Y+o+u+c][H+u+e+a](t+d+O+O+n+T+h+i+n+o+O+a+s)
```
So in all we have
```
[,Y, ,o, ,u, ,c, ,H, ,e, ,a, ,t, ,d, ,O, ,n, ,T, ,h, ,i, ,s,] = ` t r i m b n d H e l o ,   w ! `
f = ""[Y+o+u+c][H+u+e+a](t+d+O+O+n+T+h+i+n+o+O+a+s)
```

#### fix the "" string:
There is one last problem here, ```""``` can not be split in its current form
```
[,Y, ,o, ,u, ,c, ,H, ,e, ,a, ,t, ,d, ,O, ,n, ,T, ,h, ,i, ,s,] = ` t r i m b n d H e l o ,   w ! `
f =
"
"
[Y+o+u+c][H+u+e+a](t+d+O+O+n+T+h+i+n+o+O+a+s)
```
Because we would get ```SyntaxError: Invalid or unexpected token``` but, as said it is more than ok to look up syntax. It turns out there is a way to express counter parts to much of JavaScript using an empty array ```[]``` and manipulation of if counting off from it to get the corresponding values. The value for string is ```([]+[])```.
* FYI, that is the nature of the IMO harder [(Without Letters) related version] of these 2 kata; for some reason that one is a 2kyu and this one is a 1kyu, not sure why that is.

So now we have
```
[,Y, ,o, ,u, ,c, ,H, ,e, ,a, ,t, ,d, ,O, ,n, ,T, ,h, ,i, ,s,] = ` t r i m b n d H e l o ,   w ! `
f = ([]+[])[Y+o+u+c][H+u+e+a](t+d+O+O+n+T+h+i+n+o+O+a+s)
```

Now this solution is 119 lines split out, according to this kata you can do this in 99 lines? So that means there is 20 lines or redundancy due either to approach or not needed. Not sure what the more optimal solution would be at this time... 
