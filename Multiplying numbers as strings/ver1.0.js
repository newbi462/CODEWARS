function multiply(a, b) {
  var asplit = a.split("").reverse();
  var bsplit = b.split("").reverse();
  /* reverse to use array index count for place values
  [0] = no extra seros or 1
  [1] = 1 extra seros or 10
  and so on, where [1] === 3 [0] === 9, so 3 * 9 = 27 + "0", or 270 === 30*9 */
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

/*USE PLACE VALUE treat 27,0 like 2,7,0 where 10 10s is 100s*/
  for (var i = 0; i < placevaluezeros.length; i++) {
    hold = placevaluezeros[i] % 10;//the remander is the corect value for this place value
    tonextplace = (placevaluezeros[i]-(hold)) / 10;
    answer.push(hold);
    if (placevaluezeros[i+1] >= 0) {
      hold = placevaluezeros[i+1];
      placevaluezeros[i+1] = tonextplace + hold;
    } else { answer.push(tonextplace); }
  }

// test for leading zeros
  var answersplit = answer.reverse();//.reverse() to put 1s place at end instead of front
  while (answersplit[0] === 0 && answersplit.length > 1) { answersplit.splice(0, 1); }
return answersplit.join("");  }
