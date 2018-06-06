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
