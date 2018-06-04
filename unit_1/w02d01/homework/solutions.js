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
