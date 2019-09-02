function nextBigger(n){
  var clone = n.toString().split("");
  var mid;
  var kill;
  var start = [];
  var end = [];
  var printnewmid;
  var newend = [];
  var answer = [];

  for (let i = clone.length-1; i > 0 && kill !== 1; i--) {
    if (clone[i] > clone[i-1]) {
      mid = i-1;
      kill = 1;
    }
  }// get first point where number must change then kill loop

  for (let i = 0; i < mid; i++) {
    start.push(clone[i]);
  }// get up to change point

  for (let i = mid; i < clone.length; i++) {
    end.push(clone[i]);
  }// get the rest
  end.sort((a, b) => a - b);

  for (let i = 0; clone[mid] >= end[i]; i++) {
    printnewmid = end[i+1];
  }// get the new value of the change point

  kill = 0;
  for (let i = 0; i < end.length; i++) {
    if (end[i] !== printnewmid || kill === 1) {
      newend.push(end[i]);
    }
    else {kill = 1;}
  }// get new end and add a kill to deal with duplikits

  answer.push(start.join(""));
  answer.push(printnewmid);
  answer.push(newend.join(""));
  answer = parseInt( answer.join(""), 0 );

  if (answer > n) {return answer;} else {return -1;}
}
