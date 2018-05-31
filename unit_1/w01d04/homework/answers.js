// Easy Going
// Write a for loop that will log the numbers 1 through 20.

for(let i = 1; i <= 20; i++){
  console.log(i);
}

// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.

for(let i = 0; i < 200; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}

// Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
//
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

let meow = 0;
const kitten = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

for(let i = 0; i < 20; i++){
  console.log("Love me, pet me! HSSSSSS!");
  if(i % 2 == 0){
      meow = Math.round(Math.random() * 10);
      while(meow > 2){
        meow -= 3;
      }

      console.log(kitten[meow]);
  }
}

// Fizz Buzz
// This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.
//
// Write a javascript application that logs all numbers from 1 - 100.
//
// If a number is divisible by 3 log "Fizz" instead of the number.
//
// If a number is divisible by 5 log "Buzz" instead of the number.
//
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
      console.log("FizzBuzz");
    } else if(i % 3 == 0) {
      console.log("Fizz");
    } else if(i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
}
