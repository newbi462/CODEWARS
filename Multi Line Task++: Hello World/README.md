# Problem: [Multi Line Task++: Hello World](https://www.codewars.com/kata/5935558a32fb828aad001213)

You need to write a function ```f``` that returns the string ```Hello, world!```.

Requirement: Every line must have at most ```2``` characters, and total number of lines must be less than ```40```.

Hint: It's possible to complete this in ```28``` lines only.

(Even) harder verion: https://www.codewars.com/kata/59a421985eb5d4bb41000031

[View on Codewars](https://www.codewars.com/kata/5935558a32fb828aad001213)

## Solution:

This is basically a can you hack the ```typeof``` problem. Over all return the string ```Hello, world!``` is simple, but with the "Requirement: Every line must have at most ```2``` characters" you are forced to call a function without directly calling one.
```
f = function() {
  return "Hello, world!";
}
```
will reduce to
```
f=()=>"Hello, world!"
```
or
```
f=_=>"Hello, world!"
```
But that leaves us with
```
f=
_=> // 3 not 2 characters
""
```
I know of no way to split ```_=>``` over more than one line, and we need this to be a function.

So what we have is ```f="Hello, world!"``` and we need to make that ```typeof```=== function. Thankfully JavaScript has many built in methods and operations that change the type of things when used.
```
f="Hello, world!".trim()
console.log(typeof f);
```
will give us ```string```, but
```
f="Hello, world!"['trim']
console.log(typeof f);
```
will give us ```function```.

Now, this hack of the type in and of its self wont solve this problem, because it is still a string. So if we try and run this to get an ```[output]``` we will get ```TypeError: String.prototype.trim called on null or undefined```. But we can work around that.

The ```bind()``` method creates a new function that, when called, has its ```this``` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. And, it has a syntax of ```function.bind()```, so if we pass it our won't run string typeof function it should make a new function that will run.
```
f=""['trim'].bind("Hello, world!")
console.log(typeof f);
console.log(f());
```
So we get type === ```function``` and an [output] for ```f()``` === ```"Hello, world!"```.

### Every line must have at most ```2``` characters

Now, for the easy part. First: ```f=""['trim'].bind("Hello, world!")``` === ```f=""['trim']['bind']`Hello, world!\` ```.

Next, we make use of ```\``` to meet the every line must have at most ```2``` characters requirement.

```
f=
""
[
'\
t\
r\
i\
m\
']
[
'\
b\
i\
n\
d\
']
`\
H\
e\
l\
l\
o\
,\
 \
w\
o\
r\
l\
d\
!`
```

And there you have it, 30 lines, I missed the 28 lines first pass, it has to do with how you can combine the ```][``` and so on into one 2 character line. 
