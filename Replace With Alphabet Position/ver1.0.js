function alphabetPosition(text) {
  var stringtoconvert;
  var arrayfornumb = [];
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < text.length; i++){
    stringtoconvert = text[i].toLowerCase();

    if (alphabet.indexOf(stringtoconvert) !== -1){
      arrayfornumb.push(alphabet.indexOf(stringtoconvert));
    }
  }
  const plus1 = arrayfornumb.map(x => x + 1);
return (plus1.join(' '));}
