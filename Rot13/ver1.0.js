function rot13(message){
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var answer = [];

  for (let i = 0; i < message.length; i++) {
    for (let x = 0; x < alphabet.length; x++) {
      if (message[i] === alphabet[x]) {
        if (x+13 > 25) {answer.push(alphabet[x+13-26]);}
        else {answer.push(alphabet[x+13]);}
      }
      if (message[i] === alphabet[x].toUpperCase()) {
        if (x+13 > 25) {answer.push(alphabet[x+13-26].toUpperCase());}
        else {answer.push(alphabet[x+13].toUpperCase());}
      }
    }
    if (
      message[i] === "!" ||
      message[i] === "?" ||
      message[i] === ";" ||
      message[i] === ":" ||
      message[i] === " " ||
      message[i] === "," ||
      message[i] === "." ||
      message[i] === "0" ||
      message[i] === "1" ||
      message[i] === "2" ||
      message[i] === "3" ||
      message[i] === "4" ||
      message[i] === "5" ||
      message[i] === "6" ||
      message[i] === "7" ||
      message[i] === "8" ||
      message[i] === "9" ||
      message[i] === "/" ||
      message[i] === "*" ||
      message[i] === "-" ||
      message[i] === "+" ||
      message[i] === "@" ||
      message[i] === "#" ||
      message[i] === "$" ||
      message[i] === "%" ||
      message[i] === "^" ||
      message[i] === "&" ||
      message[i] === "*" ||
      message[i] === "(" ||
      message[i] === ")" ) {answer.push(message[i]);}
  }

  return answer.join("");
}
