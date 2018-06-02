// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

const calculateCube = (num) => {
  return (num * num * num);
}

// console.log(calculateCube(5));

// Write a function isAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.

const isAVowel = (char) => {
  switch(char){
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
    case "a":
    case "e":
    case "i":
    case "o":
    case "u": return true;
  }
  return false;
}

// console.log(isAVowel("a"));
// console.log(isAVowel("E"));
// console.log(isAVowel("w"));

//Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
const getTwoLengths = (word1, word2) => {
  // let temp = [word1.length, word2.length];
  return [word1.length, word2.length];
}

// console.log(getTwoLengths("Hank", "Hippopopalous"));


// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
const getMultipleLengths = (myArray) => {
  const temp = [];
  for(let i = 0; i < myArray.length; i++){
    temp.push(myArray[i].length);
  }
  return temp;
}

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
const maxOfThree = (num1, num2, num3) => {
  if(num1 > num2){
    if(num1 > num3){
      return num1;
    }
  } else if (num2 > num3) {
    return num2;
  }
  return num3;
}

// console.log(maxOfThree(6, 9, 1));
// console.log(maxOfThree(9, 9, 1));
// console.log(maxOfThree(6, 9, 9));
// console.log(maxOfThree(9, 6, 1));
// console.log(maxOfThree(6, 6, 9));

//Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
const printLongestWord = (myArray) => {
  let temp = "";
  for(let i = 0; i < myArray.length; i++){
    if(myArray[i].length > temp.length){
      temp = myArray[i];
    }
  }
  return temp;
}

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

//Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
const transmogrify = (num1, num2, num3) => {
  return Math.pow((num1 * num2), num3);
}

// console.log(transmogrify(5, 3, 2));

// Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.
// Adjust the function to push the even numbered values into an array.
// Adjust the function to return the summed value of the array.
// Find the sum of the even numbered values that do not exceed four million.

const fibonacci = (limit) => {
  let num1 = 1;
  let num2 = 2;
  let swap = 0;
  let myArray = [];

  while(num1 < limit){
    if(num1 % 2 === 0){
      myArray.push(num1);
    }
    swap = num1 + num2;
    num1 = num2;
    num2 = swap;
  }

  let sum = 0;
  for(let i = 0; i < myArray.length; i++){
    sum += myArray[i];
  }
  return sum;
}

console.log(fibonacci(4000000));
