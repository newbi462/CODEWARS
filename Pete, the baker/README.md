# Problem: [Pete, the baker](https://www.codewars.com/kata/525c65e51bf619685c000059)

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function ```cakes()```, which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

### Examples:
```
// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
```
[View on Codewars](https://www.codewars.com/kata/525c65e51bf619685c000059)

## Solution:

In short this problem is asking you to compare two sets of known values, and return the ratio of ```ingredients / recipe```.
To do this we need to do the following:
* Convert the objects to something that can easily be compared.
* Find the lowest common denominator that is true for all cases of ```recipe``` Vs ```available ingredients```.

First, as objects have no index to work with it would be useful to make this a set of arrays:
```
var recipekeys = Object.keys(recipe);
var recipevalues = Object.values(recipe);
var availablekeys = Object.keys(available);
var availablevalues = Object.values(available);
```
So that ```{flour: 500, sugar: 200, eggs: 1}``` Vs ```{flour: 1200, sugar: 1200, eggs: 5, milk: 200}``` is now:
```
[flour, sugar, eggs]
[500, 200, 1]
```
Vs
```
[flour, sugar, eggs, milk]
[1200, 1200, 5, 200]
```

Now, we need a way to know if the two values at an index in the value arrays correspond to the same keys, aka ```flower/flower```.
To do this we can loop over both sets:
```
for (let i = 0; i < recipekeys.length; i++) {
  for (let x = 0; x < availablekeys.length; x++) {
```
and compare that the keys match:
```
if (recipekeys[i] === availablekeys[x])
```
and then ```answer.push((availablevalues[x] - (availablevalues[x] % recipevalues[i])) / recipevalues[i]);``` to get the whole value ratio.

In this example this will give us ```[2, 6, 5]```: so we will sort it low to high ```answer.sort((a, b) => a - b);```. This way ```answer[0]``` is always the lowest ratio of ```ingratiates:recipe```.

But what about the other example?
```
{apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}
[apples, flour, sugar, milk, oil]
[3, 300, 150, 100, 100]

{sugar: 500, flour: 2000, milk: 2000}
[sugar, flour, milk]
[500, 2000, 2000]
```
While ```[6, 3, 20]``` to ```[3, 6, 20]``` is valid for the ingredients available, it is not the zero apples or zero oil. But, we can correct this error/oversight by comparing our results to the recipe need:
```
if (answer.length < recipekeys.length) {answer.push(0);}
```
In that the ```3``` ingredients we have a ratio for is ```<``` the ```5``` we would need to make this recipe.

So all that is left is to return our answer ```return answer[0];```.

### ver1.1
Now, there not a need to make the arrays a variable, so:
```
answer.push((availablevalues[x] - (availablevalues[x] % recipevalues[i])) / recipevalues[i]);
```
is the same as
```
answer.push((Object.values(available)[x] - (Object.values(available)[x] % Object.values(recipe)[i])) / Object.values(recipe)[i]);
```
Keep this in mind when you look at ver1.0 and ver1.1 which are the exact same solution to this problem. 
