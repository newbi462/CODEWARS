# Problem: [Which are in?](https://www.codewars.com/kata/550554fd08b86f84fe000a58)

Given two arrays of strings ```a1``` and ```a2``` return a sorted array ```r``` in lexicographical order of the strings of ```a1``` which are substrings of strings of ```a2```.

### Example 1:
```
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
```
returns ```["arp", "live", "strong"]```

### Example 2:
```
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
```
returns ```[]```

Notes:
* Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
* In Shell bash ```a1``` and ```a2``` are strings. The return is a string where words are separated by commas.

* Beware: ```r``` must be without duplicates.
* Don't mutate the inputs.

[View on Codewars](https://www.codewars.com/kata/550554fd08b86f84fe000a58)

## Solution:

First, you may need to look up "lexicographical".
* "In mathematics, the lexicographic or lexicographical order (also known as lexical order, dictionary order, alphabetical order or lexicographic(al) product) is a generalization of the way words are alphabetically ordered based on the alphabetical order of their component letters."
* So, verbose vocab ego aside, this is asking you to put the result in "alphabetical order".

So in short we have three tasks to do:
* First, compare if ```a1``` is a substring of ```a2```, such as ```"arp"``` can be found in ```"harp"``` and ```"sharp"```.
* Next, once we know our substrings, make sure there are no duplicates.
* Last, return them in the correct order.  

To compare if ```a1``` is a substring of ```a2``` I used a set of loops:
```
for (let x = 0; x < a1.length; x++) {
  for (let i = 0; i < a2.length; i++) {
    if (a2[i].includes(a1[x])) { answer.push(a1[x]); }
  }
}
```
where each ```a1[x]``` is compared to all ```a2[i]``` to see if it is is included.

Of course, this approach creates duplicates and will give us:
```
[ 'arp', 'arp', 'live', 'live', 'strong' ]
```
Now, we can address this two ways:
* We could loop over this new array looking if ```answer[i] === answer[i+1]``` and ```.splice(i, 1)``` out our duplicates. We would need to make sure to ```i-1``` when we do so we loop over all values as we do.
* Or, we can use ```answer = [...new Set(answer)];``` to get the unique values.

Now we still are not in "lexicographical" aka alphabetically ordered unless our ```a1``` just happens to be. Indirectly "lexicographical" is a clue how to sort these. In that by default ```.sort()``` sorts "lexicographical"; an array ```[1,2,3,4,10]``` sorted by ```array.sort()``` will then become ```[1,10,2,3,4]```. It will do the same for letters so ```return answer.sort();``` will now give us ```[ 'arp', 'live', 'strong' ]``` even if ```a1 = ["live", "arp", "strong"];```.
