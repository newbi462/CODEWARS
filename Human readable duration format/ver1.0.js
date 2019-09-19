function formatDuration (seconds) {
  var sec = seconds;
  var min = 0;
  var hour = 0;
  var days = 0;
  var years = 0;
  var answer = [];
  var forceand = [];

// convert sec to other units
  if (seconds === 0) {answer.push("now");}
  else{
    if (sec >= 60) { min = (seconds / 60); }
    if (min >= 60) { hour = (min / 60); }
    if (hour >= 24) { days = (hour / 24); }
    if (days >= 365 ) { years = (days / 365); }
  }

// reduce to carry only remainder to smaller place value
  if (years >= 1) {
    days = (years % 1) * 365;
    years = years - (years % 1);
    answer.push(years);
    if (years > 1) { answer.push(" years, "); }
    else {answer.push(" year, ");}
  }
  if (days >= 1) {
    hour = (days % 1) * 24;
    days = days - (days % 1);
    answer.push(days);
    if (days > 1) { answer.push(" days, "); }
    else {answer.push(" day, ");}
  }
  if (hour >= 1) {
    min = (hour % 1) * 60;
    hour = hour - (hour % 1);
    answer.push(hour);
    if (hour > 1) { answer.push(" hours, "); }
    else {answer.push(" hour, ");}
  }
  if (min >= 1) {
    sec = (min % 1) * 60;
    min = min - (min % 1);
    answer.push(min);
    if (min > 1) { answer.push(" minutes"); }
    else {answer.push(" minute");}
  }
// top down created a floting +/- sec from the math truncation
  if (sec > 0 && sec < 60) {
    sec = Math.round(sec);
    if (sec > 0) { answer.push(sec); }
    if (sec > 1) { answer.push(" seconds"); }
    else if (sec > 0) {answer.push(" second");}
  }

// no ending in a ,
  if (answer.length < 3) {
    if (answer[answer.length - 1] === " hours, ") { answer.splice(answer.length - 1, 1, " hours"); }
    if (answer[answer.length - 1] === " hour, ") { answer.splice(answer.length - 1, 1, " hour"); }
    if (answer[answer.length - 1] === " days, ") { answer.splice(answer.length - 1, 1, " days"); }
    if (answer[answer.length - 1] === " day, ") { answer.splice(answer.length - 1, 1, " day"); }
    if (answer[answer.length - 1] === " years, ") { answer.splice(answer.length - 1, 1, " years"); }
    if (answer[answer.length - 1] === " year, ") { answer.splice(answer.length - 1, 1, " year"); }
  }

// check that last startes with and not ,
  if (answer[answer.length - 3] === " and " || answer.length < 3) {
    return answer.join("");
  }
  else {
    for (let i = 0; i < answer.length - 3; i++) {
      forceand.push(answer[i]);
    }
    if (answer[answer.length - 3] === " minutes") { forceand.push(" minutes "); }
    if (answer[answer.length - 3] === " minute") { forceand.push(" minute "); }
    if (answer[answer.length - 3] === " hours, ") { forceand.push(" hours "); }
    if (answer[answer.length - 3] === " hour, ") { forceand.push(" hour "); }
    if (answer[answer.length - 3] === " days, ") { forceand.push(" days "); }
    if (answer[answer.length - 3] === " day, ") { forceand.push(" day "); }
    if (answer[answer.length - 3] === " years, ") { forceand.push(" years "); }
    if (answer[answer.length - 3] === " year, ") { forceand.push(" year "); }
    forceand.push("and ");
    for (let i = answer.length - 2; i < answer.length; i++) {
      forceand.push(answer[i]);
    }
  }

  if (forceand[forceand.length - 3] === "and ") {
    return forceand.join("");
  }
}
