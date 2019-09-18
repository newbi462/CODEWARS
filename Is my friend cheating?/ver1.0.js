function removeNb (n) {
  var arrayof1ton = [];
  var copyn = n;
  var a = 0;
  var b = 0;
  var prodab = 0;
  var sumof = 0;
  var arrayofa = [];
  var arrayofb = [];
  var awnser = [];
  var sumall = 0;

  for (let i = 0; i < n; i++) {
    arrayof1ton.push(copyn);
    sumall = sumall + copyn;
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

  awnser.push(arrayofa.reverse());
  awnser.push(arrayofb.reverse());
  if (arrayofa.length > 0) {return awnser;}
  else {
    awnser = [];
    return awnser;
  }
}
