function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
      return false;
    }
    const sumOfNotes = changeArray.reduce((accumulator, note) => accumulator + note, 0);
    return sumOfNotes >= totalDue;
  }

  const result1 = canPay([1, 2, 5], 10);
  console.log(result1);
  

  
  const result3 = canPay([], 10); 
  
  