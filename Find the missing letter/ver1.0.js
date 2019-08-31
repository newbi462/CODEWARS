function findMissingLetter(array) {
  var arraytoconvert;
  var arrayfornumb = [];
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var answer;

  for (var i = 0; i < array.length; i++){
    arraytoconvert = array[i].toLowerCase();
    if (alphabet.indexOf(arraytoconvert) !== -1){ arrayfornumb.push(alphabet.indexOf(arraytoconvert)); }
  }

  for (var i = 0; i < arrayfornumb.length; i++){
    if (arrayfornumb[i]+1 === arrayfornumb[i+1]) { }
    else if (i + 2 > arrayfornumb.length) { }
    else { answer = alphabet[arrayfornumb[i]+1]; }
  }

  if (array[0] === array[0].toLowerCase()) { return answer; }
  else { return answer.toUpperCase(); }
}
