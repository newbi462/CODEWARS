# Problem: [Human readable duration format](https://www.codewars.com/kata/52742f58faf5485cae000b9a)

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns ```"now"```. Otherwise, the duration is expressed as a combination of ```years```, ```days```, ```hours```, ```minutes``` and ```seconds```.

It is much easier to understand with an example:
```
formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
```
### For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

### Detailed rules
The resulting expression is made of components like ```4 seconds```, ```1 year```, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (```", "```). Except the last component, which is separated by ```" and "```, just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, ```1 second and 1 year``` is not correct, but ```1 year and 1 second``` is.

Different components have different unit of times. So there is not repeated units like in ```5 seconds and 1 second```.

A component will not appear at all if its value happens to be zero. Hence, ```1 minute and 0 seconds``` is not valid, but it should be just ```1 minute```.

A unit of time must be used "as much as possible". It means that the function should not return ```61 seconds```, but ```1 minute and 1 second``` instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

[View on Codewars](https://www.codewars.com/kata/52742f58faf5485cae000b9a)

## Solution:

My solution to this is not elegant, but simply step by step doing the logic of the task.

### First, convert sec to years
Because the ```[output]``` will start with the largest qualifying unit of ```years```, ```days```, ```hours```, ```minutes``` and ```seconds``` I first converted the numbers of ```seconds``` given to that largest unit.
```
if (seconds === 0) {answer.push("now");}
else{
  if (sec >= 60) { min = (seconds / 60); }
  if (min >= 60) { hour = (min / 60); }
  if (hour >= 24) { days = (hour / 24); }
  if (days >= 365 ) { years = (days / 365); }
}
```
For example ```1235486251``` sec would convert to ```39.17701201801116``` years.

### Next, get the correct value for each unit
Now that we have the largest unit, we need to convert the ```value``` for that unit to the ```values``` for it and all smaller units
```
if (years >= 1) {
  days = (years % 1) * 365;
  years = years - (years % 1);
  answer.push(years);
  if (years > 1) { answer.push(" years, "); }
  else {answer.push(" year, ");}
}
```
To continue with the above example: we would now have ```39``` years, and and the ```0.17701201801116``` remainder would be converted to ```64.60938657407408``` days. The logic is repeated for ```days to hours```, ```hours to minute```, ```minute to sec``` to give the correct values for each unit.

### "hour," != "hour"
As the name suggests the output needs to be in plan English. There are some holes where we would get a comma at the end. For example: so far ```3600``` sec would give us ```'1 hour, '``` so we need to correct this error in grammar.
```
if (answer.length < 3) {
  if (answer[answer.length - 1] === " hours, ") { answer.splice(answer.length - 1, 1, " hours"); }
  if (answer[answer.length - 1] === " hour, ") { answer.splice(answer.length - 1, 1, " hour"); }
  if (answer[answer.length - 1] === " days, ") { answer.splice(answer.length - 1, 1, " days"); }
  if (answer[answer.length - 1] === " day, ") { answer.splice(answer.length - 1, 1, " day"); }
  if (answer[answer.length - 1] === " years, ") { answer.splice(answer.length - 1, 1, " years"); }
  if (answer[answer.length - 1] === " year, ") { answer.splice(answer.length - 1, 1, " year"); }
}
```

### End with "and" not ", "
This kata also wants the format to be ```"1 hour, 1 minute and 2 seconds"``` not ```"1 hour, 1 minute, 2 seconds"``` even if that would be ```"1 hour and 1 minute"```.

First, we need to test if we need an ```"and"``` to be added?
```
if (answer[answer.length - 3] === " and " || answer.length < 3) {
  return answer.join("");
}
```

Now, we can correct for when the last value is not second(s) and splice in our ```"and"```
```
else {
  for (let i = 0; i < answer.length - 3; i++) {
    forceand.push(answer[i]);
  }
  if (answer[answer.length - 3] === " minutes") { forceand.push(" minutes "); }
  if (answer[answer.length - 3] === " minute") { forceand.push(" minute "); }
  if (answer[answer.length - 3] === " hours, ") { forceand.push(" hours "); }
  if (answer[answer.length - 3] === " hour, ") { forceand.push(" hour "); }
  if (answer[answer.length - 3] === " days, ") { forceand.push(" days "); }
  if (answer[answer.length - 3] === " day, ") { forceand.push(" day "); }
  if (answer[answer.length - 3] === " years, ") { forceand.push(" years "); }
  if (answer[answer.length - 3] === " year, ") { forceand.push(" year "); }
  forceand.push("and ");
  for (let i = answer.length - 2; i < answer.length; i++) {
    forceand.push(answer[i]);
  }
}
```

All that is left is to return our modified answer
```
if (forceand[forceand.length - 3] === "and ") {
  return forceand.join("");
}
```

As said this solution is not elegant, there is room for refinement.
