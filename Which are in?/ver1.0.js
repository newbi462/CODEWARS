function inArray(array1,array2){
  var answer = [];

  for (let x = 0; x < array1.length; x++) {
    for (let i = 0; i < array2.length; i++) {
      if (array2[i].includes(array1[x])) { answer.push(array1[x]); }
    }
  }

  answer = [...new Set(answer)];
  return answer.sort();
}
