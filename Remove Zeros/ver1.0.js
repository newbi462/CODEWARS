function removeZeros(array) {
  var holdzeros = [];

  for (let i = 0; i < array.length; i++) {
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
