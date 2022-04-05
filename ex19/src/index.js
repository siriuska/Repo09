function myDoWhile() {
  var myNumbers = "";
  let i = 0;
  do {
    i++;
    i === 9 ? (myNumbers += i) : (myNumbers += i + ", ");
  } while (i < 9);
  return myNumbers;
}

console.log(myDoWhile());

module.exports = myDoWhile;
