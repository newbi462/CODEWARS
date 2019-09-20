function removeZeros(array) {
  var holdzeros;
  var kill = 0;

  // replace .length prototype use with logic
  var arrlength = 0;
  for (let i = 0; typeof array[i] !== 'undefined'; i++) {
    arrlength = arrlength + 1;
  }
  // arrlength === array.length

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
  /*for (let i = 0; i < holdzeros.length; i++) {
    array.push(holdzeros[i]);
  } replaced with kill count to stop loop over moved 0 or "0"*/
  return array;
}

/* replace .push prototype use with logic
    // 1) store array[i] 0 or "0" in holdzeros
    holdzeros = array[i];
    // 2) deposit stored 0 or "0" to end of array
    array[arrlength-1] = holdzeros;*/

/* replace .splice prototype use with logic
    // remove array[i] 0 or "0" from array
    delete array[i];
    // pull all values after array[i] up one
    for (let x = i; x < array.length && typeof array[x+1] !== 'undefined'; x++) {
      array[x] = array[x+1];
    }*/
