function removeNb (n) {
  var sumalln = (n*(n+1))/2;
  var b;
  var a;
  var answer = [];

  for (let i = n; i > 0; i--) {
    b = i;
    a = (sumalln - b)/(b + 1);

    if (a < n && a % 1 === 0) {answer.push([a,b]);}
  }
  return answer;
}
