const findWordFrequencies = (sen) => {
  const wordCounterObj = {};

  let wordArray = sen.toLowerCase().split(" ");

  wordArray.forEach((word) => {

    let counter = 0;

    for(let i = 0; i < wordArray.length; i++){
      if(word === wordArray[i]){
        counter++;
      }

    }
    wordCounterObj[word] = counter;
  });

  return wordCounterObj;

  // const mySplit = sen.split(" ");
  // const myAnswer = [];
  //
  // let myCount = 0;
  //
  // for(let i = 0; i < mySplit.length; i++){
  //   myCount = 1;
  //
  //   for(let x = 0; x < mySplit.length; x++){
  //     if( (i != x) && (mySplit[i].toLowerCase() === mySplit[x].toLowerCase()) ){
  //       myCount++;
  //     }
  //   }
  //
  //   myAnswer.push({[mySplit[i]] : myCount});
  // }
  //
  // return myAnswer;
}

const findHighestFrequency = (sen) => {

  let highestValue = 0;
  let highestWord = {}

  for(let word in sen){
    if(sen[word] > highestValue){
      highestValue = sen[word];

    }

    for(let word in sen){
      if(sen[word] === highestValue){
        highestWord[word] = highestValue;
        // return highestWord;
      }
    }

  }
  return highestWord;

  // const myBreakDown = findWordFrequencies(sen);
  // let myReturn = 0;
  // let myCompare = 0;
  //
  // for(let x in myBreakDown[0]){
  //   myCompare = myBreakDown[0][x];
  // }
  //
  // for(let i = 1; i < myBreakDown.length; i++){
  //   for(let x in myBreakDown[i]){
  //     if(myBreakDown[i][x] > myCompare){
  //       myReturn = i;
  //       myCompare = myBreakDown[i][x];
  //     }
  //   }
  // }
  //
  // return myBreakDown[myReturn];
}

console.log(findWordFrequencies("I I I I love lamp"));
console.log("================");
console.log(findHighestFrequency(findWordFrequencies("I I love Love love lOvE lamp")));

//Coin Calculator

// The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.
//
// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickles ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25
//
// So for example:
// coinCombo(6) --> [1, 1, 0, 0]

const coinCal = (value) => {
  const myAnswer = [0, 0, 0, 0];
  const myDiv = [1, 5, 10, 25];
  let myRem = value;

  for(let i = 3; (i >= 0) && (myRem != 0); i--){
    myAnswer[i] = Math.floor(myRem / myDiv[i]);
    myRem = myRem % myDiv[i];
  }

  return myAnswer;
}
const coinValue = 97;
// console.log("=========");
// console.log(`My smallest coins of ${coinValue} is : ${coinCal(coinValue)}`);

//Short Form
// Bob is a theoretical coder - he doesn't write code, but comes up with theories, formulas and algorithm ideas. You are his secretary, and he has tasked you with writing the code for his newest project - a method for making the short form of a word. Write a function shortForm(C# ShortForm, Python short_form) that takes a string and returns it converted into short form using the rule: Remove all vowels, except for those that are the first or last letter. Do not count 'y' as a vowel, and ignore case. Also note, the string given will not have any spaces; only one word, and only Roman letters.
// Example:
//
// shortForm("assault");
// short_form("assault")
// ShortForm("assault");
// // should return "asslt"

// const shortForm = (word) => {
//   let myWord = word.split("");
//
//   for(let i = myWord.length - 1; )
// }
