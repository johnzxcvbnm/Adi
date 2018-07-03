const numsToSum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10 ];

const sumNumbers = (myArray, sum) => {
  sum = sum || 0;
  if( myArray.length === 0){
    return sum;
  }

  sum += myArray.shift();
  return sumNumbers( myArray, sum );
}

// console.log(sumNumbers(numsToSum));

const testCase1 = 11;

const isEven = ( num ) => {
  if( num === 0 ) {
    return "the number is even";
  }
  if( num === 1 ) {
    return "the number is odd";
  }
  return isEven( num - 2 );
}

// console.log(isEven(testCase1));

const factorial = ( num ) => {
  if(num === 1){
    return num;
  }
  return factorial( num - 1) * num;
}

// console.log(`Factorial of 5: ${factorial(5)}`);

const fibonacci = ( testNum, num1, num2 ) => {
  num1 = num1 || 1;
  num2 = num2 || 1;

  if(testNum === num2){ return true; }
  if(testNum < num2){ return false; }

  return ( fibonacci( testNum, num2, (num1 + num2) ) );
}

// console.log(`55 is fibonacci: ${fibonacci(57)}`);

const branch = (myNum) => {
  if(myNum === 1){
    return true;
  }

  if(myNum <= 0){
    return false;
  }

  if(myNum % 3 === 0){
    return branch(myNum / 3);
  }
  
  return branch(myNum - 5);
}

const myTestNumber = 17;
console.log(`Branching Numbers of ${myTestNumber}: ${branch(myTestNumber)}`);

// const stepCount = (myArray) => {
//   if(myArray[0])
// }
