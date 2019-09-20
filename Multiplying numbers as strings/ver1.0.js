function multiply(a, b) {
  var asplit = a.split("").reverse();
  var bsplit = b.split("").reverse();
  var placevaluezeros = [];
  var loopanswer;
  var hold = 0;
  var tonextplace = 0;
  var answer = [];

  for (let i = 0; i < asplit.length; i++) {
    for (let x = 0; x < bsplit.length; x++) {
      loopanswer = parseInt( asplit[i], 0 ) * parseInt( bsplit[x], 0 );
      if (placevaluezeros[x+i] > 0) { hold = placevaluezeros[x+i]; }
      placevaluezeros[x+i] = loopanswer + hold;
      hold = 0;
    }
  }

  for (var i = 0; i < placevaluezeros.length; i++) {
    hold = placevaluezeros[i] % 10;
    tonextplace = (placevaluezeros[i]-(hold)) / 10;
    answer.push(hold);
    if (placevaluezeros[i+1] >= 0) {
      hold = placevaluezeros[i+1];
      placevaluezeros[i+1] = tonextplace + hold;
    } else { answer.push(tonextplace); }
  }

  var answersplit = answer.reverse();
  while (answersplit[0] === 0 && answersplit.length > 1) { answersplit.splice(0, 1); }
return answersplit.join("");  }
