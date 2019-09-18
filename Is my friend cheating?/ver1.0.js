function removeNb (n) {
  var sumalln = (n*(n+1))/2; // math to replace loop
  var b;
  var a;
  var awnser = [];

  for (let i = n; i > 0; i--) {
    b = i;
    a = (sumalln - b)/(b + 1);

    if (a < n && a % 1 === 0) {awnser.push([a,b]);}
  }
  return awnser;
}
