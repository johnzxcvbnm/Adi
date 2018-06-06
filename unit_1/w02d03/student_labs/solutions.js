const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const nums = [ 37, 826,209, 419, 309, 48, 738,709,728, 607, 9, 863, 976, 588, 611, 164,383, 261, 14, 525,479,169,755,574, 330,
  736, 541, 838, 577,957,179,436,333, 206, 295,744,926, 799, 691,259,401,104,630,645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5,
  13,13,17, 5, 5, 18, 12, 5, 18, 11, 2, 2,  9,  8, 4,5,18, 15,18,0,6,11,18,14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6,
  10, 3, 3, 3, 18, 12, 14 ]

const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]

//-----------Every
// Determine if every number is greater than or equal to 0
// console.log("Every number is >= 0: " + smallNums.every(x => x >= 0));
// console.log("Every number is >= 0: " + nums.every(x => x >= 0));

// determine if every word shorter than 8 characters
// console.log("Every word is short: " + panagram.every(x => x.length < 8));
// console.log("Every word is short: " + panagrams.every(x => x.length < 8));

//---------Filter
// filter the array for numbers less than 100
// console.log(smallNums.filter(x => x < 100));
// console.log(nums.filter(x => x < 100));

// filter words that have an even length
// console.log(panagram.filter(x => x.length % 2 == 0));
// console.log(panagrams.filter(x => x.length % 2 == 0));

//--------------Find
// Find the first value divisible by 5
// console.log(smallNums.find(x => x % 5 == 0));
// console.log(nums.find(x => x % 5 == 0));

// find the first word that is longer than 6 characters
// console.log(panagram.find(x => x.length > 6));
// console.log(panagrams.find(x => x.length > 6));

//---------------Find Index
// find the index of the first number that is divisible by 3
// console.log("Index is " + smallNums.findIndex(x => x % 3 == 0));
// console.log("Index is " + nums.findIndex(x => x % 3 == 0));

// find the index of the first word that is less than 2 charaters long
// console.log("Short word index is: " + panagram.findIndex(x => x.length <= 2));
// console.log("Short word index is: " + panagrams.findIndex(x => x.length <= 2));

//-----------For Each
// console.log each value of the nums array multiplied by 3
// smallNums.forEach(x => console.log(x * 3));
// nums.forEach(x => console.log(x * 3));

// const dog = [];
// const fun = (x) => {
//   dog.push(x * 3);
// }
// console.log(smallNums.forEach(fun));

// const newFunction = (x) = {
//   return x * 3;
// }
// const newArray = nums.forEach(newFunction);
// console.log(newArray);


// console.log each word with an exclamation point at the end of it
// panagram.forEach(x => console.log(x + "!"));
// panagrams.forEach(x => console.log(x + "!"));

// Thought Questions
// What happened to the original array?
// The original array is untouched

// Can you store the values from a forEach method in a new array?
//Yes if you push the elements onto a new array inside of the function

//----------Map
// make a new array of each number multiplied by 100
// const newArray = smallNums.map(x => x * 100);
// console.log(newArray);
// const newNumsArray = nums.map(x => x * 100);
// console.log(newNumsArray);

// make a new array of all the words in all uppercase
// const myNewArray = panagram.map(x => x.toUpperCase());
// console.log(myNewArray);
// const myNewArray2 = panagrams.map(x => x.toUpperCase());
// console.log(myNewArray2);

// Thought Questions
// What happened to the original array?
// The original array is uneffected

// Can you store the values from a map method in a new array?
// The map method returns a new array with the new values.

//-------------Reduce
// Add all the numbers in the array together using the reduce method
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(numberArray.reduce(reducer));

// console.log(smallNums.reduce((x, y) => x + y));
// console.log(nums.reduce((x, y) => x + y));

// concatenate all the words using reduce
// console.log(panagram.reduce((x, y) => x + " " + y));
// console.log(panagrams.reduce((x, y) => x + " " + y));
// console.log(panagram);

// Thought Questions
// What happened to the original array?
// The original array is not effected.  The panagram does return a single NEW value

//------------Some
// Find out if some numbers are divisible by 7
// console.log("Some numbers are divisible by 7: " + smallNums.some(x => x % 7 == 0));
// console.log("Some numbers are divisible by 7: " + nums.some(x => x % 7 == 0));

// Find out if some words have the letter a in them
// console.log("Some words have the letter 'a': " + panagram.some(x => x.indexOf('a') > -1));
// console.log("Some words have the letter 'a': " + panagrams.some(x => x.indexOf('a') > -1));

//-----------------Sort
// Try to sort without any arguments, do you get what you'd expect with the numbers array?
// console.log(smallNums.sort());
// console.log(nums.sort());

// Sort the numbers in ascending order
// console.log(smallNums.sort((x, y) => x - y));
// console.log(nums.sort((x, y) => x - y));

// Sort the numbers in descending order
// console.log(smallNums.sort((x, y) => y - x));
// console.log(nums.sort((x, y) => y - x));

// Sort the words in ascending order
// Sort the words in descending order

// Thought Questions
// What happened to the original array?
