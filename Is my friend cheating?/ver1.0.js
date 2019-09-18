function removeNb (n) {
  var sumalln = (n*(n+1))/2;
  var a;
  var answer = [];

  for (let i = n; i > 0; i--) {
    a = (sumalln - i)/(i + 1);
    if (a < n && a % 1 === 0) {answer.push([a,i]);}
  }
  return answer;
}
