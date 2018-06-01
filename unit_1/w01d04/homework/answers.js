//----------------------------//
// Easy Going
// Write a for loop that will log the numbers 1 through 20.

for(let i = 1; i <= 20; i++){
  console.log(i);
}

//----------------------------//
// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.

for(let i = 0; i < 200; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}

//----------------------------//
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

//----------------------------//
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

//----------------------------//
// Getting to Know You
// Use the following arrays to answer the questions below (name,species ,age, hometown):

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2]++;
console.log(plantee[2]);

// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City" //Watch out for BatMan!
console.log(wolfy[3]);

// Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");
console.log(dart);

// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);

//----------------------------//
// Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
//
// Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for(const i of ninjaTurtles){
  console.log(i.toUpperCase());
}

//----------------------------//
// Multiples of 3 and 5
// Yes, you might have tackled this earlier, but try it again (don't look back at your other code 👀)
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.
//
// 👏 You just solved Project Euler problem 1! 👏
let sum = 0;
for(let i = 0; i < 1000; i++){
  if(i % 3 == 0 || i % 5 == 0){
    sum += i;
  }
}
console.log("Sum is: " + sum);

//----------------------------//
// Methods, Revisited
// In class, we made an array of our favorite movies:
//
const favMovies = ["Black Panther", "V for Vendetta" , "Shawshank Redeption" , "Titanic" , "2001 Space Odyssey" , "Jurassic Park" , "Star Wars" , "Anastasia" , "Harry Potter" , "Star Trek" , "Kill Bill" , "X-Men", "Pulp Fiction", "Interstellar" , "Godfather Part 2"];

// Console log: the index of Anastasia
console.log("Index of Anastasia is " + favMovies.indexOf("Anastasia"));

// Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):
//
// use the .sort method Thought question: what did this do to the array? Did it permanently alter it?
console.log("Movies Sorted")
// console.log(favMovies.sort());
// console.log(favMovies);

// Use the method pop
console.log("Used 'pop' method");
favMovies.pop();
console.log(favMovies);

// push "Guardians of the Galaxy"
console.log("Used 'push' method");
favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

// Reverse the array
console.log("Used 'reverse' method");
favMovies.reverse();
console.log(favMovies);

// Use the shift method
console.log("Used 'shift' method");
favMovies.shift();
console.log(favMovies);

// unshift "Hackers"
console.log("Used 'unshift' method");
favMovies.unshift("Hackers");
console.log(favMovies);

// splice "Titanic" and add "Avatar" (try finding the index of "Titanic", instead of counting it yourself) Thought question: did this permanently alter our array?
console.log("Used 'splice' method");
favMovies.splice(favMovies.indexOf("Titanic"), 1, "Avatar");
console.log(favMovies);

// slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
console.log("Used 'slice' method");
console.log(favMovies.slice((favMovies.length / 2), favMovies.length));
// console.log(favMovies);

// store the value of your slice in a variable, console.log it - Thought question: what is going on here?
console.log("Used 'slice' method again");
const newFavMovies = favMovies.slice((favMovies.length / 2), favMovies.length);
console.log(newFavMovies);

// console.log your final results
console.log(favMovies);

// Console.log the index of "Godfather Part 2" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?
console.log("Used 'indexOf' method");
console.log(favMovies.indexOf("Godfather Part 2"));
//Output should be a '-1'

// Thought question: that we declared the variable favMovies with const, and yet, we were allowed to change the array. Weird? Should we have used let?
//When we declare the array favMovies we are actually creating a pointer which simply points to where the variable is in memory, so when we change something in the array we're not changing where it is located in memory.
