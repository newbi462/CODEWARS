function pigIt(str){
  var holdword = [];
  var awnser = [];
  var letterone;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {holdword.push(str[i]);}
    if (str[i] === ' ') {
      var clone = holdword.slice(0);
      for (let i = 0; i < clone.length; i++) {
        if (i === 0) {letterone = clone[i];}
        if (i > 0) {awnser.push(clone[i]);}
      }
      awnser.push(letterone);
      awnser.push('ay');
      awnser.push(str[i]);

      holdword = [];
      clone = [];
    }
    if (i === str.length-1 && str[i] !== '!' && str[i] !== '?' && str[i] !== '.') {
      var clone = holdword.slice(0);
      for (let i = 0; i < clone.length; i++) {
        if (i === 0) {letterone = clone[i];}
        if (i > 0) {awnser.push(clone[i]);}
      }
      awnser.push(letterone);
      awnser.push('ay');

      holdword = [];
      clone = [];
    }
    if (str[i] === '!' || str[i] === '?' || str[i] === '.' ) {awnser.push(str[i]);}
  }

return awnser.join("");
}
