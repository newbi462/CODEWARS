# Don't rely on luck.

The test fixture I use for this kata is pre-populated.

It will compare your guess to a random number generated using:

```
Math.floor(Math.random() * 100 + 1)
```

You can pass by relying on luck or skill but try not to rely on luck.

"The power to define the situation is the ultimate power." - Jerry Rubin

Good luck!

[View on Codewars](https://www.codewars.com/kata/dont-rely-on-luck/train/javascript)

## Solution:

Ok, this kata is a bit counter intuitive unless you think a bit out side the box.

In short you are being asked to "predict" what a sudo-random number will be.
```
Math.floor(Math.random() * 100 + 1)
```
You can set a guess
```
var guess = your guess;
```
and if your guess matches the random number you have solved this kata. In theory you could guess right by pure luck, but as the name suggested why rely on luck?

The problem gives both a good life philosophy and clue how to do this when it says "The power to define the situation is the ultimate power."

So what if we make the "random" not random, but instead define the situation so the answer is something we know? So let us look at what
```
Math.floor()
```
and
```
Math.random()
```
are?

They look an offal lot like and Object calling a method.
```
newObject.sayHiMethod();
```
and we know how to make that
```
const newObject = {
  sayHiMethod: function() {
    console.log(‘Hi Everyone!’);
  },
}
```

While in practice the fact that calling something the same name as something before it tends to create errors, in this case the fact that JavaScrip will use the last definition it is given as the one used works to help solve this kata. So if we create an Object called Math it will over write Math. We can then define the "methods" to be values we want.
```
var Math = {
	random: function(){
		//what do we want Math.random() to do?
	},
}
```
So now we can define what the number will be. For this Kata, defining Math.floor() is more useful, and because Math is hard coded now Math.random() must also have a value for
```
Math.floor(Math.random() * 100 + 1)
```
to run.

If you are game, there is a [HARDCORE](https://www.codewars.com/kata/dont-rely-on-luck-hardcore/train/javascript) version of this problem that requires digging far deeper in to what you manually hack to take control of in JavaScript. 
