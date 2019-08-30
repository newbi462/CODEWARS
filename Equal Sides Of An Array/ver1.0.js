function findEvenIndex(arr) {
  var totalvalue = 0;
  var prei = 0;
  var n = 0;

  for (let i = 0; i < arr.length; i++) {
    totalvalue = totalvalue + arr[i];
  }

  for (let i = 0; prei != totalvalue - prei - arr[i] && i < 1000; i++) {
    if (i < arr.length) {
      prei = prei + arr[i];
      n = i+1;
    }
    else if (i > arr.length) { n = -1; }
  }
return n;}
