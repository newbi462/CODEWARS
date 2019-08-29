function nbYear(p0, percent, aug, p) {
    for (let i = 0; p > p0; i++) {
      p0 = p0 + (p0 * (percent / 100) + aug);
      var years = i+1;
    }
return years;}
