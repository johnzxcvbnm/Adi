//SPREAD array
const x = -5;
const y = 5;

console.log(Math.max(x, y)); //5
// But what if you have

const z = [1, 5, -2, 8, -9, 17, -22];
// Using Math.mx is doable, but cumbersome with an array.

// Now you can do
console.log(Math.max(y, ...z)); //17

//------ REST -------//
//Gather into an array
//Let's get a bunch of arguments and sum the only the ones that are numbers

function sumOnlyNums (...args){
  console.log(args);
  //Filter into a new array of just numbers
  let nums = args.filter(arg => typeof arg === 'number');
  //Add the numbers together
  let sum = nums.reduce((sum, num) => sum + num);
  //Return the sum
  return sum;
}

console.log(sumOnlyNums (44, false, 'pizza', 45, {season: "winter"}, [1, 2, 3, 4, 5], 2, 9)); //100
