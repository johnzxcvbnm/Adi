// Conceptual Questions
//
// 1. How do we assign a value to a variable? 5
// using the = operator during variable creation (let x = 27;)
//
// 2. How do we change the value of a variable? 5
// by using the = operator with the new value (x = 1337;)
//
// 3. How do we assign an existing variable to a new variable? 5
// declare a new variable and use the = operator with the existing variable (let x = y;)

//Strings Activity 1
let firstVariable = "Hello World";
firstVariable = 27;
let secondVariable = firstVariable;
secondVariable = "abCya!";
console.log(firstVariable);  //value is 27
console.log(secondVariable);  //value is abCya!

let yourName = "John Kusching";
let sentence = "Hello, my name is " + yourName;
console.log(sentence); //value is Hello, my name is John Kusching

// Booleans Activity

const a = 6;
const b = 100;
const c = -5;
const d = 3000;
const e = 'Jelly Bean';

// 1. a > b;
// 2. c < d;
// 3. 'Peanut' === 'Peanut';
// 4. a < b >= c;
// 5. a <= a <= d;
// 6. e === 'Jelly Bean';
// 7. 48 != '48';

console.log(a > b);
console.log(c < d);
console.log('Peanut' === 'Peanut');
console.log(a < b >= c);
console.log(a <= a <= d);
console.log(e === 'Jelly Bean');
console.log(48 !== '48');

//The Farm
let animal = "pig";
if(animal === "cow"){
  console.log("mooooo");
} else {
  console.log("Hey! You\'re not a cow.");
}

//Driver's Ed
let age = 10;
if(age >= 16){
  console.log("Here are the keys");
} else {
  console.log("Sorry, you\'re too young");
}

//Just Loop It
for(let i = 0; i < 11; i++) {
  console.log(i);
}

for(let i = 10; i < 4001; i++){
  console.log(i);
}

for(let i = 10; i <= 4000; i += 2){
  console.log(i);
}

//Let's get odd
for(let i = 1; i < 100; i++){
  if(i % 2 == 1){
    console.log(i + " is an odd number");
  }
}

//Give me Five
for(let i = 1; i < 100; i++){
  if(i % 5 == 0){
    console.log("I found a " + i + ". High five!");
  } else if(i % 3 == 0){
    console.log("I found a " + i + ". Three is a crowd!");
  }
}

//Savings account
let sum = 0;
for(let i = 1; i <= 100; i++){
  sum += i * 2;
}
console.log("Your account has " + sum + " in it.");

//Multiples of 3 and 5
sum = 0;
for(let i = 0; i < 1000; i++){
  if(i % 3 == 0 || i % 5 == 0){
    sum += i;
  }
}

console.log("The sum is " + sum);

//Tribonacci
let numOne = 0;
let numTwo = 0;
let numThree = 1;
let numSum = 0;

for(let i = 0; i < 10; i++){
  console.log("Pass Number: " + i);
  console.log(numOne + "-" + numTwo + "-" + numThree);

  numSum = numOne + numTwo + numThree;
  numOne = numTwo;
  numTwo = numThree;
  numThree = numSum;
}

//Credit Card Mask

let maskify = function(card){
  let newNumber = "";
  if(!isNaN(card)){
    card = card.toString();
  }

  for(let i = 0; i < card.length; i++){
    if(i < card.length - 4){
      newNumber += "#";
    } else {
      newNumber += card.charAt(i);
    }
  }
  return newNumber;
};

let cardNumber = 1234567890123456;
console.log("Your number is " + maskify(cardNumber));

//Get the Middle Character
let getMiddle = function(myWord){
  if(!isNaN(myWord)){
    myWord = myWord.toString();
  }
  if(myWord.length % 2 == 1){
    return myWord.charAt(myWord.length / 2);
  } else {
    return myWord.charAt((myWord.length / 2) - 1) + myWord.charAt(myWord.length / 2);
  }
}

let word = "testing";
console.log("Middle character(s) is " + getMiddle(word));
