//---Verbal questions---//

// Write answers to the following questions as comments. As a reminder you can highlight your code and type command + / to turn your code into a comment.
//
// What is the difference between a parameter and an argument?
// a parameter is a variable that is passed to a function.  The parameter is created withe the function declaration.  An argument is the variable that is passed TO the function during the function call.

// Within a function, what is the difference between return and console.log?
// the return statement is used to return a value and immediately exits the function.
// console.log is an actual funcion and doesn't return any value.


//---Palindrome---//
// Write a function checkPalindrome that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.
const checkPalindrome = (word) => {
  let tempWord = "";
  word = word.toLowerCase();
  for(let i = word.length - 1; i >= 0; i--){
    tempWord += word.charAt(i);
  }
  return tempWord == word;
}

console.log(checkPalindrome("Radar"));
// => true

console.log(checkPalindrome("Borscht"));
// => false


//---Digit Sum---//
// Write a function sumDigits that accepts a number and returns the sum of its digits.
const sumDigits = (num) => {
  let temp = num.toString();
  let sum = 0;

  for(let i = 0; i < temp.length; i++){
    sum += parseInt(temp[i]);
  }
  return sum;
}

console.log(sumDigits(42));
// => 6

//---Pythagoras---//
// Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.
//
// hint: discover the Pythagorean Theorem on a website called google.com
// hint: checkout the Math methods in javascript
const calculateSide = (num1, num2) => {
  return Math.sqrt((num1 * num1) + (num2 * num2));
}
console.log(calculateSide(8, 6));
// => 10

//---Sum Array---//
// Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. Use a for loop within the function to iterate over the array and sum the contents. Use a variable such as
//
// let sum = 0;
// that will accumulate value within the loop. Expected result:
const sumArray = (myArray) => {
  let sum = 0;
  for(let i = 0; i < myArray.length; i++){
    sum += myArray[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
// => 21

//---Triangle---//
// Write a loop that console logs a right isosceles triangle made of '#' that has the height and length of the argument.

//Recursive function that prints a triangle to the console with a base length of 'number'
const printTriangle = (number) => {

  //Breaks out of the recursive function
  if(number == 0){
    return;
  }

  //Sets base to the legth of number
  let base = "";
  for(let i = 0; i < number; i++){
    base += "#";
  }

  //Calls the THIS function with the number less one until the base case happens (when number == 0)
  //Reversing these two statements will make an upside down triangle
  printTriangle(number - 1);
  console.log(base);
}

printTriangle(10);


//---Prime Numbers---//
// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.
//
// Step One
// Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.
//
// Hint: Check every number up to the square root. To do this, try a for loop.
const checkPrime = (num) => {
  for(let i = 2; i < Math.sqrt(num); i++){
    if(num % i == 0){
      return false;
    }
  }

  return true;
}

console.log("40 is prime.  " + checkPrime(40));

// Step Two
// Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97.
//
// This function can call on the previous checkPrime function.

const printPrimes = (num) => {
  for(let i = 0; i <= num; i++) {
    if(checkPrime(i)){
      console.log(i);
    }
  }
}

printPrimes(97);
