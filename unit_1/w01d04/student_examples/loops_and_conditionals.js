let sum = 0;
// for(let i = 1; i < 10; i++){
//   if(i % 2 == 0){
//     sum += i;
//   }
// }

//Sum
//Find the sum of all the numbers that are divisable by 3 and 5
for(let i = 0; i < 1000; i++){
  if(i % 3 == 0 || i % 5 == 0){
    sum += i;
  }
}

console.log("The sum is: " + sum);

//Fibonacci Sequence
//Add the even numbers on the fibonacci sequence that do not exceed 4,000,000
sum = 0;
let fib = 1;

// for(let i = 0; i < 21; i++)
// {
//   fib += fib;
//   if(fib % 2 == 0){
//     sum += fib;
//   }
// }

let fibSum = 0;
let a = 1;
let b = 2;

for(a; a < 4000000; a+b){
  if(a % 2 == 0){
    fibSum += a;
  }

  let c = a + b;
  a = b;
  b = c;
}

console.log("The sum of the even Fibonaci numbers is " + fibSum);
