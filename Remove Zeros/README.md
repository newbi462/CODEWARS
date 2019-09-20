# Problem: [Remove Zeros](https://www.codewars.com/kata/52aae14aa7fd03d57400058f)

Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array
```
[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]
```
is transformed into
```
[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
```
Zero elements are defined by either ```0``` or ```"0"```. Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any ```Array.prototype``` or ```Object.prototype``` methods.

[View on Codewars](https://www.codewars.com/kata/52aae14aa7fd03d57400058f)

## Solution:

Unlike the easier version [Moving Zeros To The End](https://www.codewars.com/kata/52597aa56021e91c93000cb0) of this problem, this one has some constraints.

### The simple way we would like to do this
```
var holdzeros = [];

for (let i = 0; i < array.length; i++) {
  if ( array[i] === 0 || array[i] === "0" ) {
    holdzeros.push(array[i]);
    array.splice(i, 1);
    i--
  }
}
for (let i = 0; i < holdzeros.length; i++) {
  array.push(holdzeros[i]);
}
return array;
```
But to do it this way violates the following constraints of this kata:
* We can't use a temporary array ```holdzeros = []``` to store the ```0```s or ```"0"```s like this.
* We can't use ```.push()``` or ```.splice()```, nor any other ```Array.prototype```.
* And, depending how strictly this is enforced ```.length``` may also need to be done manually.

So what we need to do is create code to manually manipulate the array in the same way these tools would, or that has the same net result.

### Replace .length with Logic
We can manually count the index to get this value
```
var arrlength = 0;
for (let i = 0; typeof array[i] !== 'undefined'; i++) {
  arrlength = arrlength + 1;
}
```
While we do not know how long the array is, we do know when we exceed the value ```.length``` would give us the value for that index will be ```undefined```.

### Replace .push() prototype use with Logic
So we wanted to use ```.push()``` two times:
* 1) ```holdzeros.push(array[i]);```  to store ```array[i]``` with a value ```0``` or ```"0"``` in ```holdzeros```.
* Which we can do using ```holdzeros = array[i];```.
* 2) ```array.push(holdzeros[i]);``` to deposit stored ```0```s or ```"0"```s to the end of the array.
* Which we can do using ```array[arrlength-1] = holdzeros;```.

### Replace .splice() prototype use with Logic
We also wanted to use ```.splice()``` to do two things:
* 1) ```array.splice(i, 1);``` to remove ```array[i]``` with a value ```0``` or ```"0"```.
* Which we can do using ```delete array[i];```.
* 2) ```array.splice(i, 1);``` would also pull all values after array[i] up one index.
* Which we can do using a loop ```for (let x = i; x < array.length && typeof array[x+1] !== 'undefined'; x++) { array[x] = array[x+1]; }```

### Replace Code with Code we can use
Now all we do is replace the parts of our original function with these modifications and we get.
```
for (let i = 0; i < arrlength; i++) {
  if ( (array[i] === 0 || array[i] === "0") && (i + kill < arrlength) ) {
    holdzeros = array[i];
    delete array[i];
    for (let x = i; x < arrlength && typeof array[x+1] !== 'undefined'; x++) {
      array[x] = array[x+1];
    }
    array[arrlength-1] = holdzeros;
    i--
    kill = kill + 1;
  }
}
return array;
```
Note the change in the order of operations, in that doing this move this way we must move each ```0``` or ```"0"```one at a time, and only after we shift all the values up one place.

So we don't really need to use ```Array.prototype``` or ```Object.prototype``` methods to do any of the things they do, but they are helpful.
