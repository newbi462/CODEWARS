function removeZeros(array) {
  var holdzeros = [];

  // replace .length prototype use with logic
  var arrlength = 0;
  for (let i = 0; typeof array[i] !== 'undefined'; i++) {
    arrlength = arrlength + 1;
  }
  // arrlength === array.length

  for (let i = 0; i < arrlength; i++) {
    if ( array[i] === 0 || array[i] === "0" ) {
      holdzeros.push(array[i]);
      array.splice(i, 1);
      i--
    }
  }
  for (let i = 0; i < holdzeros.length; i++) {
    array.push(holdzeros[i]);
  }
  return array;
}
