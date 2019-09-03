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
