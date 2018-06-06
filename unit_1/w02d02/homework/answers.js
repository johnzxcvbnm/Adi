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
