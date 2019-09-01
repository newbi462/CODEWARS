function findNb(m) {
    var n;
    for (let i = 1; m > 0; i++) {
      m = m - Math.pow(i,3);
      n = i;
    }
    if (m < 0) {n = -1;}

    return n;
}
