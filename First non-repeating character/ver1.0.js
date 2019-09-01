function firstNonRepeatingLetter(s) {
  var count = 0;
  var answer = [];
  var clone = s.toLowerCase().split("");
  var unique = [...new Set(clone)];

  for (let i = 0; i < unique.length; i++) {
    for (let x = 0; x < clone.length; x++) {
      if (unique[i] === clone[x]) { count = count + 1; }
    }
    if (count === 1) { answer.push(unique[i]); }
    count = 0;
  }

  for (let i = 0; i < s.length; i++) {
    for (let x = 0; x < answer.length; x++) {
      if (s[i] === answer[x] || s[i] === answer[x].toUpperCase() ) {
        answer = [];
        answer.push(s[i]);
      }
    }
  }
  return answer.join("");
}
