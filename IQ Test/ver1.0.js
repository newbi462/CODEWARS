function iqTest(numbers){
  var arrclone = numbers.split(" ");
  for (let i = 0; i < arrclone.length; i++) {
    if (arrclone[0] % 2 === 0 && arrclone[1] % 2 === 0 || arrclone[0] % 2 === 0 && arrclone[2] % 2 === 0 || arrclone[2] % 2 === 0 && arrclone[1] % 2 === 0 ) {
      if (arrclone[i] % 2 === 1) {return (i+1);}
    }
    else if (arrclone[0] % 2 !== 0 && arrclone[1] % 2 !== 0 || arrclone[0] % 2 !== 0 && arrclone[2] % 2 !== 0 || arrclone[2] % 2 !== 0 && arrclone[1] % 2 !== 0 ) {
      if (arrclone[i] % 2 === 0) {return (i+1);}
    }
  }
}
