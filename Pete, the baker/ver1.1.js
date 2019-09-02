function cakes(recipe, available) {
  var answer = [];
  for (let i = 0; i < Object.keys(recipe).length; i++) {
    for (let x = 0; x < Object.keys(available).length; x++) {
      if (Object.keys(recipe)[i] === Object.keys(available)[x]) {
        answer.push((Object.values(available)[x] - (Object.values(available)[x] % Object.values(recipe)[i])) / Object.values(recipe)[i]);
      }
    }
  }
  if (answer.length < Object.keys(recipe).length) {answer.push(0);}
  answer.sort((a, b) => a - b);
return answer[0]; }
