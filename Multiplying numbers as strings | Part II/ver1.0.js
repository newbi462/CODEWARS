function multiply(n, o){;
  var answer;
  var answersplit = [];
  var hold = [];

  // teach to count decimals, and fix "-"
  var dec = 0;
  var nsplit = n.split("");
  for (let i = 0; i < nsplit.length; i++) {
    if (nsplit[i] === ".") {
      dec = dec + nsplit.length - i - 1;
      nsplit.splice(i, 1);
      i = i-1;
      n = nsplit.join("");
    }
    if (nsplit[i] === "-") {
      hold.push(nsplit[i]);
      nsplit.splice(i, 1);
      i = i-1;
      n = nsplit.join("");
    }
  }
  var osplit = o.split("");
  for (let i = 0; i < osplit.length; i++) {
    if (osplit[i] === ".") {
      dec = dec + osplit.length - i - 1;
      osplit.splice(i, 1);
      i = i-1;
      o = osplit.join("");
    }
    if (osplit[i] === "-") {
      hold.push(osplit[i]);
      osplit.splice(i, 1);
      i = i-1;
      o = osplit.join("");
    }
  }

  // teach to skip for "0"
  if (parseInt( n, 0 ) === 0 || parseInt( o, 0 ) === 0) { answer = "0"; }
  else { answer = multiplyp1(n, o); }

  answersplit = answer.split("");
  // put decimals back
  if (dec > 0 && answer != "0") { answersplit.splice(answersplit.length - dec, 0, "."); }
  // trailing zeros
  while (answersplit[answersplit.length-1] === "0" && dec > 0 && answer != "0") { answersplit.splice(answersplit.length-1, 1); }
  //fix ends in "."
  if (answersplit[answersplit.length-1] === ".") { answersplit.splice(answersplit.length-1, 1); }
  // move leading 0 until after decimals back in
  while (answersplit[0] === "0" && answersplit.length > 1 && answersplit[1] != "." ) { answersplit.splice(0, 1); answer = answersplit.join("") }
  // put "-" back
  if (hold[0] === "-" && hold.length === 1 && answer != "0") { answersplit.splice(0, 0, hold[0]); }
return answersplit.join("");}

function multiplyp1(a, b) {
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
  //while (answersplit[0] === 0 && answersplit.length > 1) { answersplit.splice(0, 1); }
return answersplit.join("");  }
