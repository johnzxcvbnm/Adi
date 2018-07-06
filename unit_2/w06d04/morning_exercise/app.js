const sumProb = (num1, num2, num3, num4, num5) => {
  const myArray = [];

  myArray.push(num1, num2, num3, num4, num5);
  myArray.sort();

  const sum1 = myArray[0] + myArray[1] + myArray[2] + myArray[3];
  const sum2 = myArray[4] + myArray[1] + myArray[2] + myArray[3];

  console.log(`${sum1} ${sum2}`);
}

sumProb(5, 2, 3, 4, 1);
