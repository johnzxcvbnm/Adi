// const printBoo = () => {
//   console.log("======");
//   console.log("Boo!");
//   console.log("======");
// };
//
// // const printBoo2 = function() {
// //   console.log("======");
// //   console.log("Boo!");
// //   console.log("======");
// // };
//
// const printSum = () => {
//   console.log(10 + 10);
// }
//
// printBoo();
// printSum();


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

// printTriangle(10);

const minusOne = (number) => {
  console.log(number - 1);
}

// minusOne(10);
// minusOne(5);
// minusOne(-5);

const makeSentence = (wordOne, wordTwo, wordThree) => {
  console.log("Oh boy, do " + wordOne + " " + wordTwo + " " + wordThree + " or what?");
}

// makeSentence("I", "want", "chimichangas");

const getLastElement = (arr) => {
  console.log(arr[arr.length  - 1]);
}

// getLastElement([1, 2, 3, 4, 5, 6]);       // 6
// getLastElement(['a', 'b', 'c']);          // 'c'
// getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]

const divideThreeNums = (num1, num2, num3) => {
  console.log(num3 / (num2 / num1));
}

// divideThreeNums(10, 5, 2)   // 4
// divideThreeNums(30, 2, 9)   // 135

const isEqual = (word1, word2) => {
  if(word1 === word2){
    return true;
  }

  return false;
}

// console.log(isEqual("Dog", "Dog"));
// console.log(isEqual("Dog", "Puppy"));

const sumIs = (num1, num2, num3) => {
  let sum = (num1 + num2 + num3);
  // return ((num1 + num2 + num3).toString());
  String(sum);
  return sum;
}

// console.log(isNaN(sumIs(10, 15, 7)));
// console.log("10 + 15 + 7 = " + sumIs(10, 15, 7));
