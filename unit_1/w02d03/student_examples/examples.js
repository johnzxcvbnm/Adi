// const iceCream = ["Vanilla", "Chocolate", "Strawberry", "Rocky Road"];
//
// let updateIceCream = iceCream.map(x => x + " Ice Cream");
//
// const updateIceCream = iceCream.map(function (element) {
//   return element + " Ice Cream";
// });
//
// console.log(updateIceCream);

// const multiplyNum = [2, 4, 6, 8, 10];
// const newNumArr = multiplyNum.map(x => x * 2);
// console.log(newNumArr);
const numberArray =  [31, 203, 30, 84, 5, 62, 770, 8, 99, 10, 0];

const classArray = ['Javascript','HTML','CSS','Data Analysis', 'Marketing', 'Database Design', 'Visual Design'];


// 1. Every - Checks every element against a test, returns false if one element fails, otherwise it returns true.  Does not alter the original array.
// console.log(numberArray.every(x => x > -10));

// 2. Filter -
// Creates an array with all the elements that passed the provided function-
// This does not effect the original array -
// In an RPG, you would want to sort out any equipment that you couldn't use
//
// console.log(numberArray.filter(x => x % 2 == 0));

// 3. Find - returns the VALUE of the first element that passes the test
// console.log(numberArray.find(x => x > 300));

// 4. Find Index - returns the INDEX of the first element that passes the test
// console.log(numberArray.findIndex(x => x > 300));

// 5. For Each - calls the provided function once for each element in the array, in order

// console.log(numberArray.forEach(x => x * 2));
// numberArray.forEach(x => console.log(x));
// numberArray.forEach(x => x * 2);
// console.log(numberArray);

// 6. Map (come up with a new example!) - Applies a function to each element of the array

// 7. Reduce - reduces the array to a single value, executes a provided function for each value of the array and returns the result
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(numberArray.reduce(reducer));
//
// let sum = 0;
//

// 8. Some - checks every element against the given function, if one is true, the whole thing returns true.

// 9. Sort (research how to use sort with a callback) - 
