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

//----------------------------//
// Hungry for More?
//----------------------------//
// Find the Median
// Find the median number in the following nums array, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// Expected output:
// => 15
console.log("--------------------");
nums.sort();
console.log(nums[Math.floor(nums.length / 2)]);

//----------------------------//
// Return of the Closets
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// Alien Attire
// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
const kristynsShoe = kristynsCloset[kristynsCloset.indexOf("left shoe")];
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset);

// Dress Us Up
// Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

//function returns a random number between 0 and limit, not including limit
let myThree = function(limit) {
  let i = Math.round(Math.random() * 10);
  while(i >= limit){
    i -= limit;
  }
  return i;
}

//Debugging myThree function
// for(let i = 0; i < 100; i++){
//   console.log(myThree(4));
// }

//For loop randomizes what they end up wearing
for(let i = 0; i < 3; i++){
  console.log("Kristyn is wearing a stunning " + kristynsCloset[myThree(kristynsCloset.length)] + "!");
  console.log("Thom is wearing a daring outfit of " + thomsCloset[0][myThree(thomsCloset[0].length)] + ", " + thomsCloset[1][myThree(thomsCloset[1].length)] + " and " + thomsCloset[2][myThree(thomsCloset[2].length)] + ".  Wow!");
}

//----------------------------//
// Dirty Laundry
// Continue looking at the closet arrays:
//
// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
console.log("---------------------");
for(let i = 0; i < kristynsCloset.length; i++){
  console.log("WHIRR: Now washing " + kristynsCloset[i] + "!");
}

//----------------------------//
// Inventory
// Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.
console.log("---------------------");
for(let i = 0; i < thomsCloset.length; i++){
  for(let x = 0; x < thomsCloset[i].length; x++){
    console.log("Thom has " + thomsCloset[i][x] + " in his closet.");
  }
}
