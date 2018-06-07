//-----Combine objects, arrays, and functions-----//
// COMPLETE ANY 4
//
// Create an object that has a property that is an array. Log one of the elements of that array.
// const myBio = {
//   myFavShows: ["Rick and Morty", "Final Space"]
// }
// console.log(myBio.myFavShows[0]);

// Create an object that has a property that is an object. Log one of the properties of that inner object.
// const myBio = {
//   myRoom: {
//     bed: "Fluffy",
//     shoes: "Red"
//   }
// }
// console.log(myBio.myRoom.bed);

// Create an array that has an object in it. Log one of the properties of that object.
// const students = [
//   { name: "John" },
//   { name: "Keith" }]
//
// console.log(students[0].name);

// Create an array that has an array as one of its elements. Log one of the elements of the inner array.
// const myArray = [
//   [12, 13],
//   [56, 96]];
//   console.log(myArray[0][0]);

// Create an array that has a function as one of its elements. Call that function.
// const myArray = [
//   [12, 13],
//   (num) => { return num - 1; }
// ]
// console.log(myArray[1](2));

// Create an object that has a property that is an array. Loop over the array and log each individual element.
// const myObject = {
//   names: ["John", "Keith", "Raven", "Austin"]
// }
// for(let i of myObject.names){
//   console.log(i);
// }

// Create an array that has an array as one of its elements. Loop over the second array and log each individual element.
// const myArray = [
//   [12, 13, 14, 15, 16],
//   [133],
//   [143, 0, 1337],
//   [153, 1516, 8674, 29];
//   for(let i of myArray[0])
//     console.log(i);

// Bonus: make each element of the outer array an array as well. Using two for loops, loop over each array in the outer array and log those elements.
// const myArray = [
//   [12, 13, 14, 15, 16],
//   [133],
//   [143, 0, 1337],
//   [153, 1516, 8674, 29]];
//
// for(let subArray of myArray){
//   for(let i of subArray){
//     console.log(i);
//   }
// }

//--------------------------Combine objects, arrays, and functions more than one level deep
// COMPLETE ANY 5
//
// Create a function that returns an object. Log a value of that object (hint: call the function and then call a property on the return value).
// const myFunction = (myObj) => {
//   return myObj;
// }
// console.log(myFunction({ name: "John" }));

// Create a function that returns an array. Log an element of the array.
// const myFunction = () => {
//   return [0, 1, 2, 3];
// }
// console.log(myFunction());

// Create a function that returns an object that has an array. Log one of the elements of that array.
// const myFunction = () => {
//   return { name: "John", subArray: [0, 1, 2]};
// }
// console.log(myFunction().subArray[1]);

// Create a function that returns an object that has an object. Log one of the properties of the inner object.
// const myFunction = () => {
//   return { name: "John", jobHistory: { title: "Student", date: "June 2018"} }
// }
//
// console.log(myFunction().jobHistory.title);


// Create a function that returns a function. Call that inner function
// const myFunction = () => {
//   return x => console.log("YOLO");
// }
//
// myFunction()();
