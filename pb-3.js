function sortMaker(arr) {
  if (typeof arr[1] === 'number' && arr[1] > 0) {
    if (arr[0] === arr[1]) {
      return "equal";
    }
    return arr.sort(function (a, b) {
      return a - b;
    });
  } else {
    if (arr[0] < 0 || arr[1] < 0) {
      return "Invalid Input";
    }
  }
}
var array1 = [2, 3];
var array2 = [4, 2];
var array3 = [4, 4];
var array4 = [1, 2];
var array5 = [1, -2];
console.log(sortMaker(array1));
console.log(sortMaker(array2));
console.log(sortMaker(array3));
console.log(sortMaker(array4));
console.log(sortMaker(array5));
