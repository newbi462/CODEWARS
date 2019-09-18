var justify = function(str, len) {
  var wordon = [];
  var lenline = [];
  var awnser = [];
  var count = 0;
  var nextword = [];
  var spaces = 0;
  var holdlinewords = [];
  var eqspace = 0;
  var extraspace = 0;
  var kill = 0;
  var lastline;

// put string in areay of words to look at 1 by 1 for length
  var arrayofstr = str.split(" ");

// pull word
  for (let i = 0; i < arrayofstr.length; i++) {

    if (i+1 < arrayofstr.length) {
      nextword = arrayofstr[i+1].split("");
    }

    wordon = arrayofstr[i].split("");
    count = count + wordon.length;

    lenline.push(wordon.join(""));
    lenline.push(" ");
    count = count + 1;
    spaces = spaces + 1;
    lastline = lenline;

// is words + spaces over max?
    if (count + nextword.length > len) {
      spaces = spaces + (len - count);

      for (let x = 0; x < lenline.length; x++) {
        if (lenline[x] !== " ") {
          holdlinewords.push(lenline[x]);
        }

        eqspace = spaces / (holdlinewords.length-1);
        extraspace = spaces % (holdlinewords.length-1);
      }

      if (extraspace === 0) {
        for (let x = 0; x < holdlinewords.length-1; x++) {
          awnser.push(holdlinewords[x]);
          for (let a = 0; a < eqspace; a++) {
            awnser.push(" ");
          }
        }
        awnser.push(holdlinewords[holdlinewords.length-1]);
// is this the last line?
        if (i+1 < arrayofstr.length) {awnser.push('\n');}
        lenline = [];
        holdlinewords = [];
        spaces = 0;
        lastline = null;
      }
      else if (extraspace > 0) {
        for (let x = 0; x < holdlinewords.length-1; x++) {
          awnser.push(holdlinewords[x]);
          if (extraspace > kill) {
            awnser.push(" ");
            kill = kill + 1;
          }
          for (let a = 0; a < (eqspace-(eqspace % 1)); a++) {
            awnser.push(" ");
          }
        }
        awnser.push(holdlinewords[holdlinewords.length-1]);
        if (i+1 < arrayofstr.length) {awnser.push('\n');}
        lenline = [];
        holdlinewords = [];
        spaces = 0;
        kill = 0;
        lastline = null;
      }
      else {
        awnser.push(holdlinewords);
        if (i+1 < arrayofstr.length) {awnser.push('\n');}
        lenline = [];
        holdlinewords = [];
        spaces = 0;
        lastline = null;
      }

      count = 0;
    }


    nextword = [];
  }

// is there still uncleared words?
  if (lastline !== null) {
    for (let i = 0; i < lastline.length-1; i++) {
      awnser.push(lastline[i]);
    }
  }

  return awnser.join("");
};
