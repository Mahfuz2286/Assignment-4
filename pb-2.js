function matchFinder(string1, string2) {
  if (string1.includes(string2)) {
    return true;
  } else {
    return false;
  }
}
var string1 = "peter pranker";
var string2 = "pen";
var result = matchFinder(string1, string2);
console.log("Result:", result);
