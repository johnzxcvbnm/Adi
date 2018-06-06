// const myFunction = (myPara) => {
//   myPara();
//   // console.log(myPara());
// }
//
// const mySecondFunction = () => {
//   console.log("Hi");
// }
//
// myFunction(mySecondFunction);

// const foo = (param, param2) => {
//     param(param2);
// }
//
// const bar = (param) => {
//     console.log(param);
// }
//
// foo(bar, 'hi'); // => hi

// const foo = (param, param2) => {
//     param(param2, 'hello');
// }
//
// const bar = (param, param2) => {
//     console.log(param2);
// }
//
// foo(bar, 'hi'); // => hello

const wordReverse = (myString) => {
  return myString.split(' ').reverse().join(' ');
}

const toUpperCase = (myString) => {
  return myString.toUpperCase();
}

const repMaster = (myInput, myFunction) => {
  console.log( myFunction(myInput) + " proves that I am the rep MASTER!");
}

// repMaster("Never give your heart to a blockhead", wordReverse);
// repMaster("I finished this practice", toUpperCase);

// const unique = (myArray) => {
//     for(let i = 0; i < myArray.length; i++){
//       for(let x = i + 1; x < myArray.length; x++){
//         if(myArray[i] === myArray[x]){
//           myArray.splice(x, 1);
//         }
//       }
//     }
//     if(myArray.length >= 2){
//       if(myArray[myArray.length - 1] === myArray[myArray.length - 2]){
//         myArray.splice(myArray.length - 1, 1);
//       }
//     }
//
//     return myArray;
//  }
//
// const count = (myArray) => {
//   return unique(myArray).length;
// }
const numberArray = [];
numberArray.someMethod = function() { console.log("YOLO"); }
numberArray.unique = () => {
    for(let i = 0; i < numberArray.length; i++){
      for(let x = i + 1; x < numberArray.length; x++){
        if(numberArray[i] === numberArray[x]){
          numberArray.splice(x, 1);
        }
      }
    }
    if(numberArray.length >= 2){
      if(numberArray[numberArray.length - 1] === numberArray[numberArray.length - 2]){
        numberArray.splice(numberArray.length - 1, 1);
      }
    }

    // return this;
 }

numberArray.count = () => {
  numberArray.unique();
  return numberArray.length;
}

// const numberArray = [2, 2, 3, 4, 5, 3];

// console.log(count([2, 2, 3, 4, 5, 3]));
// console.log(count([2, 2, 2, 2, 2, 2]));
//
// console.log(unique([2, 2, 2, 2, 2, 2]));
numberArray.push(2);
numberArray.push(2);
numberArray.push(3);
numberArray.push(4);
numberArray.push(5);
numberArray.push(3);

numberArray.someMethod();
numberArray.unique();
console.log(numberArray.count());
console.log(numberArray);
