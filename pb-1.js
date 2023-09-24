function cubeNumber(number) {
  if (typeof number === 'number') {
    const result = Math.pow(Number, 3);
    return result;
  }
  else {
    return "Invalid number";
  }
}
const Number = 3;


const result = cubeNumber(Number);
console.log(result);

const invalidInput = "NUm";
const invalidResult = cubeNumber(invalidInput);
console.log(invalidResult);
