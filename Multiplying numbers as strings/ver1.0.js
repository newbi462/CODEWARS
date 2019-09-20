function multiply(a, b) {
  var asplit = a.split("");
  asplit.reverse();
  var bsplit = b.split("");
  bsplit.reverse();
  /* reverse to use array index count for place values
  [0] = no extra zeros or 1
  [1] = 1 extra zeros or 10
  and so on, where [1] === 3 [0] === 9, so 3 * 9 = 27 + "0", or 270 === 30*9 */
  var placevaluezeros = [];
  var loopanswer;
  var answer = "0";
  var hold;

  for (let i = 0; i < asplit.length; i++) {
    for (let x = 0; x < bsplit.length; x++) {
      // strings to number
      //asplit[i] * bsplit[x]
      loopanswer = parseInt( asplit[i], 0 ) * parseInt( bsplit[x], 0 )
      // to string
      loopanswer.toString()
      ////console.log("loop:" + loopanswer);
      placevaluezeros.push(loopanswer);
      ////console.log(i+x);
      // add place value zeros to string
      for (let y = 0; y < i+x; y++) {
        placevaluezeros.push("0");
      }
      // set loopanswer = tpo this value as a "b" for add()
      loopanswer = placevaluezeros.join("")
      ////console.log("loop:" + loopanswer);
      placevaluezeros = [];
      // use add() to add "loopanswer" and "answer"
      answer = add(answer, loopanswer);
      //console.log(answer);
    }
  }
  // test for leading zeros
  var answersplit = answer.split("");
  while (answersplit[0] === "0" && answersplit.length > 1) {
    answersplit.splice(0, 1);
  }
  answer = answersplit.join("")


  return answer;
}


//ADD LONG NUMBERS OF STRINGS
function add(a, b) {
  var asplit = a.split("");
  var bsplit = b.split("");
  var sum = 0;
  var carry = 0;
  var answer = [];
  var hold;

//the logic of carry the one place value addition
  if (asplit.length === bsplit.length) {
    for (let i = asplit.length-1; i >= 0; i--) {
      sum = parseInt( asplit[i], 0 ) + parseInt( bsplit[i], 0 ) + carry;
      if (carry > 0) {
        carry = 0;
      }
      if (sum - 10 < 0) {
        answer.push(sum.toString());
      }
      if (sum - 10 >= 0) {
        carry = 1;
        sum = sum - 10;
        answer.push(sum.toString());
      }
    }
  }
  if (asplit.length < bsplit.length) { // loops for if one number is longer than the other
    for (let i = bsplit.length-1; i >= 0; i--) {
      if (i >= bsplit.length-asplit.length) {
        var x = bsplit.length-asplit.length;
        sum = parseInt( bsplit[i], 0 ) + carry + parseInt( asplit[i-x], 0 )
        if (carry > 0) {
          carry = 0;
        }
        if (sum - 10 < 0) {
          answer.push(sum.toString());
        }
        if (sum - 10 >= 0) {
          carry = 1;
          sum = sum - 10;
          answer.push(sum.toString());
        }
      }
      if (i < bsplit.length-asplit.length) {
        sum = parseInt( bsplit[i], 0 ) + carry;
        if (carry > 0) {
          carry = 0;
        }
        if (sum - 10 < 0) {
          answer.push(sum.toString());
        }
        if (sum - 10 >= 0) {
          carry = 1;
          sum = sum - 10;
          answer.push(sum.toString());
        }
      }
    }
  }
  if (asplit.length > bsplit.length) {
    for (let i = asplit.length-1; i >= 0; i--) {
      if (i >= asplit.length-bsplit.length) {
        var x = asplit.length-bsplit.length;
        sum = parseInt( asplit[i], 0 ) + carry + parseInt( bsplit[i-x], 0 )
        if (carry > 0) {
          carry = 0;
        }
        if (sum - 10 < 0) {
          answer.push(sum.toString());
        }
        if (sum - 10 >= 0) {
          carry = 1;
          sum = sum - 10;
          answer.push(sum.toString());
        }
      }
      if (i < asplit.length-bsplit.length) {
        sum = parseInt( asplit[i], 0 ) + carry;
        if (carry > 0) {
          carry = 0;
        }
        if (sum - 10 < 0) {
          answer.push(sum.toString());
        }
        if (sum - 10 >= 0) {
          carry = 1;
          sum = sum - 10;
          answer.push(sum.toString());
        }
      }
    }
  }

// carry the one if left over for a value larger than the loop
  if (carry > 0) {answer.push(carry.toString());}

  answer.reverse();
  hold = answer.join("");
  return hold;
}
