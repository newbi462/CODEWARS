function sumStrings(a,b) {
  var answer = add(a, b);
  var answersplit = answer.split("");
  while (answersplit[0] === "0" && answersplit.length > 1) { answersplit.splice(0, 1); }
  return answersplit.join("");
}

function add(a, b) {
  var asplit = a.split("");
  var bsplit = b.split("");
  var sum = 0;
  var carry = 0;
  var answer = [];

  for (let i = Math.max(asplit.length, bsplit.length)-1; i >= 0; i--) {
    if (asplit.length === bsplit.length) { sum = parseInt( asplit[i], 0 ) + parseInt( bsplit[i], 0 ) + carry; }
    if (asplit.length < bsplit.length) {
      if (i >= bsplit.length-asplit.length) {
        var x = bsplit.length-asplit.length;
        sum = parseInt( bsplit[i], 0 ) + carry + parseInt( asplit[i-x], 0 )
      }
      if (i < bsplit.length-asplit.length) { sum = parseInt( bsplit[i], 0 ) + carry; }
    }
    if (asplit.length > bsplit.length) {
      if (i >= asplit.length-bsplit.length) {
        var x = asplit.length-bsplit.length;
        sum = parseInt( asplit[i], 0 ) + carry + parseInt( bsplit[i-x], 0 )
      }
      if (i < asplit.length-bsplit.length) { sum = parseInt( asplit[i], 0 ) + carry; }
    }
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
  if (carry > 0) { answer.push(carry.toString()); }

  return answer.reverse().join("");
}
