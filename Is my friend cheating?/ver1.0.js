function removeNb (n) {
  var arrayof1ton = [];
  var copyn = n;
  var a = 0;
  var b = 0;
  var prodab = 0;
  var sumof = 0;
  var arrayofa = [];
  var arrayofb = [];
  var answer = [];
  var sumall = (n*(n+1))/2;

  for (let i = 0; i < n; i++) {
    arrayof1ton.push(copyn);
    //sumall = sumall + copyn; //= (n*(n+1))/2
    copyn = copyn - 1;
  }

  for (let i = 0; i < arrayof1ton.length; i++) {
    a = arrayof1ton[i];
    for (let x = 1; x < arrayof1ton.length; x++) {
      b = arrayof1ton[x];
      prodab = a * b;
      sumof = sumall - a - b;

      if (prodab === sumof) {
        arrayofa.push(a);
        arrayofb.push(b);
      }
      sumof = 0;
    }
  }

  answer.push(arrayofa.reverse());
  answer.push(arrayofb.reverse());
  if (arrayofa.length > 0) {return answer;}
  else {
    answer = [];
    return answer;
  }
}

// algebra to replace most loops with math that finds the other var
/*(a * b) = sum - a - b
  (a * b) + a = sum - b
  (a * b) + (a * 1) = sum - b
  a(b + 1) = sum - b
  a = (sum - b)/(b + 1)*/
