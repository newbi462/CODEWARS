function multiply(a, b) {
  var asplit = a.split("");
  asplit.reverse();
  var bsplit = b.split("");
  bsplit.reverse();
  /* reverse to use array index count for place values
  [0] = no extra seros or 1
  [1] = 1 extra seros or 10
  and so on, where [1] === 3 [0] === 9, so 3 * 9 = 27 + "0", or 270 === 30*9 */
  var placevaluezeros = [];
  var loopawnser;
  var awnser = "0";
  var hold;

  for (let i = 0; i < asplit.length; i++) {
    for (let x = 0; x < bsplit.length; x++) {
      // strings to number
      //asplit[i] * bsplit[x]
      loopawnser = parseInt( asplit[i], 0 ) * parseInt( bsplit[x], 0 )
      // to string
      loopawnser.toString()
      ////console.log("loop:" + loopawnser);
      placevaluezeros.push(loopawnser);
      ////console.log(i+x);
      // add place value zeros to string
      for (let y = 0; y < i+x; y++) {
        placevaluezeros.push("0");
      }
      // set loopawnser = tpo this value as a "b" for add()
      loopawnser = placevaluezeros.join("")
      ////console.log("loop:" + loopawnser);
      placevaluezeros = [];
      // use add() to add "loopawnser" and "awnser"
      awnser = add(awnser, loopawnser);
      //console.log(awnser);
    }
  }
  // test for leading zeros
  var awnsersplit = awnser.split("");
  while (awnsersplit[0] === "0" && awnsersplit.length > 1) {
    awnsersplit.splice(0, 1);
  }
  awnser = awnsersplit.join("")


  return awnser;
}



//ADD LONG NUMBERS OF STRINGS
function add(a, b) {
  var asplit = a.split("");
  var bsplit = b.split("");
  var sum = 0;
  var carry = 0;
  var awnser = [];
  var hold;

//the logic of carry the one place value addition
  if (asplit.length === bsplit.length) {
    for (let i = asplit.length-1; i >= 0; i--) {
      sum = parseInt( asplit[i], 0 ) + parseInt( bsplit[i], 0 ) + carry;
      if (carry > 0) {
        carry = 0;
      }
      if (sum - 10 < 0) {
        awnser.push(sum.toString());
      }
      if (sum - 10 >= 0) {
        carry = 1;
        sum = sum - 10;
        awnser.push(sum.toString());
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
          awnser.push(sum.toString());
        }
        if (sum - 10 >= 0) {
          carry = 1;
          sum = sum - 10;
          awnser.push(sum.toString());
        }
      }
      if (i < bsplit.length-asplit.length) {
        sum = parseInt( bsplit[i], 0 ) + carry;
        if (carry > 0) {
          carry = 0;
        }
        if (sum - 10 < 0) {
          awnser.push(sum.toString());
        }
        if (sum - 10 >= 0) {
          carry = 1;
          sum = sum - 10;
          awnser.push(sum.toString());
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
          awnser.push(sum.toString());
        }
        if (sum - 10 >= 0) {
          carry = 1;
          sum = sum - 10;
          awnser.push(sum.toString());
        }
      }
      if (i < asplit.length-bsplit.length) {
        sum = parseInt( asplit[i], 0 ) + carry;
        if (carry > 0) {
          carry = 0;
        }
        if (sum - 10 < 0) {
          awnser.push(sum.toString());
        }
        if (sum - 10 >= 0) {
          carry = 1;
          sum = sum - 10;
          awnser.push(sum.toString());
        }
      }
    }
  }

// carry the one if left over for a value larger than the loop
  if (carry > 0) {awnser.push(carry.toString());}

  awnser.reverse();
  hold = awnser.join("");
  return hold;
}
