//---Datatypes---//
//---Refresher---//

// So far we have seen:
//
// Strings
// Numbers
// Booleans
// Arrays
// Objects
// When these datatypes are combined, we get a data structure, for example, an array that contains objects that each contain booleans.
//
// Let's say you are tasked with creating some software, and it is up to you to determine which datatypes and what data structure to use.
//
// Answer the Following
// For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:
//
// A light switch that can be either on or off.
// I would use a simple boolean.
// let lightSwitch = true/false;

// A user's email address.
// String variable
// let userEmail = johnKusching@example.com

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// This sounds like an object
// const spaceShip = {
//    hull: 100,
//    weapon: "laser blasters",
//    specialWeapon: "tractor beam",
//    engine: "warp drive"
// }

// A list of student names from our class.
// An array of Strings
// const studentList = ["John", "Keith", ...];

// A list of student names from our class, each with a location.
// An array of objects
// const studentList = [
  // { name: "John", location: "Texas" },
  // { name: "Keith", location: "I dont' know" },
  // ...]

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// An array of objects, first two elements in the object being name and location and the third element being another array
// const studentList = [
//   { name: "John", location: "Texas", favShows: ["Rick and Morty", "Family Guy"] },
//   { name: "Keith", location: "I dont' know", favShows: ["Law and Order", "Law and Order: Special Victims Unit"] },
//   ...]


//---Take it Easy---//
// Make an array that holds all of the colors of the rainbow.
const rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

// Write code that will access "blue" from the rainbow array.
console.log(rainbow[rainbow.indexOf("Blue")]);

// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const johnKusching = {
  favFood: "Cheese Cake",
  hobby: "Video Games",
  town: "Plano",
  favData: "Arrays"
};

// Write code that will access your hobby from the object that you just created.
console.log(johnKusching.hobby);


//---Crazy Object!---//
const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

//Use crazy Object to log the following.
//"omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);

// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);

// Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.
crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk");
console.log(crazyObject.larry.quotes);

//---Object-ception---//
// With the following object:

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

// Change the value of limbo to null.

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);

//---Combining Datatypes---//
// Model a vending machine
// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call VendingMachine.vend() with a valid integer to return a snack
//
// Bonus:
// remove the snack from the array
// return an error message if an invalid number/input is used

const vendingMachine = {
  snacks: [
    { name: "KitKat", price: 2 },
    { name: "Reeces", price: 2 },
    { name: "Apple", price: 3}],
   buySnack: (num) => {
     if(num >= 0 && num < vendingMachine.snacks.length){
       return vendingMachine.snacks.slice(num, 1);
     } else {
       return "Error";
     }
   }
}
console.log("---------------------");
// console.log(vendingMachine);
console.log(vendingMachine.buySnack(0));
console.log(vendingMachine.buySnack(10));

//---Bond Films---//
//Array of objects:
const bondFilms = [
  { title : "Skyfall", year : 2012, actor : "Daniel Craig", gross : "$1,108,561,008" },
  { title : "Thunderball", year : 1965, actor : "Sean Connery", gross : "$1,014,941,117" },
  { title : "Goldfinger", year : 1964, actor : "Sean Connery", gross : "$912,257,512" },
  { title : "Live and Let Die", year : 1973, actor : "Roger Moore", gross : "$825,110,761" },
  { title : "You Only Live Twice", year : 1967, actor : "Sean Connery", gross : "$756,544,419" },
  { title : "The Spy Who Loved Me", year : 1977, actor : "Roger Moore", gross : "$692,713,752" },
  { title : "Casino Royale", year : 2006, actor : "Daniel Craig", gross : "$669,789,482" },
  { title : "Moonraker", year : 1979, actor : "Roger Moore", gross : "$655,872,400" },
  { title : "Diamonds Are Forever", year : 1971, actor : "Sean Connery", gross : "$648,514,469" },
  { title : "Quantum of Solace", year : 2008, actor : "Daniel Craig", gross : "$622,246,378" },
  { title : "From Russia with Love", year : 1963, actor : "Sean Connery", gross : "$576,277,964" },
  { title : "Die Another Day", year : 2002, actor : "Pierce Brosnan", gross : "$543,639,638" },
  { title : "Goldeneye", year : 1995, actor : "Pierce Brosnan", gross : "$529,548,711" },
  { title : "On Her Majesty's Secret Service", year : 1969, actor : "George Lazenby", gross : "$505,899,782" },
  { title : "The World is Not Enough", year : 1999, actor : "Pierce Brosnan", gross : "$491,617,153" },
  { title : "For Your Eyes Only", year : 1981, actor : "Roger Moore", gross : "$486,468,881" },
  { title : "Tomorrow Never Dies", year : 1997, actor : "Pierce Brosnan", gross : "$478,946,402" },
  { title : "The Man with the Golden Gun", year : 1974, actor : "Roger Moore", gross : "$448,249,281" },
  { title : "Dr. No", year : 1962, actor : "Sean Connery", gross : "$440,759,072" },
  { title : "Octopussy", year : 1983, actor : "Roger Moore", gross : "$426,244,352" },
  { title : "The Living Daylights", year : 1987, actor : "Timothy Dalton", gross : "$381,088,866" },
  { title : "A View to a Kill", year : 1985, actor : "Roger Moore", gross : "$321,172,633" },
  { title : "License to Kill", year : 1989, actor : "Timothy Dalton", gross : "$285,157,191" }
];
// Yikes. Well, copy the bondFilms array of objects above into your js file. Use for loops and conditionals and methods in order to complete the below:
//
// Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.
const bondTitles = [];
for(let movie of bondFilms){
  bondTitles.push(movie.title);
}

console.log(bondTitles);

//Create a new array oddBonds, of only the Bond films released on odd-numbered years.
const oddBonds = [];
for(let movie of bondFilms){
  if(movie.year % 2 == 1){
    oddBonds.push(movie);
  }
}

console.log(oddBonds);

// Determine the total cumulative gross of the Bond franchise, and console.log the result. hint To make the grosses into usable numbers, look into the .replace Javascript method (there are many ways to do this, however). Look into parseInt also.
let sum = 0;
for(let movie of bondFilms){

  //Removes the $ in front of the string
  let temp = movie.gross.substring(1);

  //Iterates through the string and removes all the commas
  for(let i = 0; i < temp.length; i++){
    if(temp.charAt(i) === ","){
      temp = temp.substring(0, i) + temp.substring(i + 1);
    }
  }

  //Turns the strings into integers and adds it to the sum
  sum += parseInt(temp);
}

console.log(sum);
console.log("-----------------------")

//---Hungry For More?---//
// CHALLENGE
// bondFilms again!
// Console log the single movie object that contains the actor who starred in the least number of films.
// Expected result:
// { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" }

//Create a new array to list the actors and how many films they've been in
const bondActors = [];

//Populates the bondActors array
for(let movie of bondFilms){

    //If the actor isn't there yet, push them onto the array
    if(bondActors.findIndex(x => x.name === movie.actor) == -1) {
      bondActors.push({ name: movie.actor, numFilms: 1 });

    //Else incriment the numFilms by one
    } else {
      bondActors[bondActors.findIndex(x => x.name === movie.actor)].numFilms++;
    }
}

//Sort bondActors by the numFilms
bondActors.sort(function (a, b) {
  return a.numFilms - b.numFilms;
});

//Console log bondActors[0] which will have the lowest numFilms
console.log(bondFilms[bondFilms.findIndex(x => x.actor === bondActors[0].name)]);
