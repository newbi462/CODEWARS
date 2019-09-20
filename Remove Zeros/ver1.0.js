function removeZeros(array) {
  var holdzeros;
  var kill = 0;

  var arrlength = 0;
  for (let i = 0; typeof array[i] !== 'undefined'; i++) {
    arrlength = arrlength + 1;
  }

  for (let i = 0; i < arrlength; i++) {
    if ( (array[i] === 0 || array[i] === "0") && (i + kill < arrlength) ) {
      holdzeros = array[i];
      delete array[i];
      for (let x = i; x < arrlength && typeof array[x+1] !== 'undefined'; x++) {
        array[x] = array[x+1];
      }
      array[arrlength-1] = holdzeros;
      i--
      kill = kill + 1;
    }
  }
  return array;
}
