function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return false;
  }
  const sumOfNotes = changeArray.reduce((acc, note) => acc + note, 0);
  return sumOfNotes >= totalDue;
}

const changeArray = [1, 2, 5];
const totalDue = 10;
const result = canPay(changeArray, totalDue);
console.log(result);
