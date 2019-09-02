function cakes(recipe, available) {
  var recipekeys = Object.keys(recipe);
  var recipevalues = Object.values(recipe);
  var availablekeys = Object.keys(available);
  var availablevalues = Object.values(available);
  var answer = [];

  // math for recipe Vs available
  for (let i = 0; i < recipekeys.length; i++) {
    for (let x = 0; x < availablekeys.length; x++) {
      if (recipekeys[i] === availablekeys[x]) {
        answer.push((availablevalues[x] - (availablevalues[x] % recipevalues[i])) / recipevalues[i]);
      }
    }
  }
  if (answer.length < recipekeys.length) {answer.push(0);}// 0 when there is a missing ingredient
  answer.sort((a, b) => a - b);


  return answer[0];
}
