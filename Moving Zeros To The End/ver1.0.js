var moveZeros = function (arr) {
  var answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {answer.push(arr[i]);}
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {answer.push(arr[i]);}
  }
  return answer;
}
