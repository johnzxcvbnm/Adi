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

//-----------------Callbacks
// Make a function operateNums that takes two arguments. Assume the two arguments are a number and a function (a callback).
// Make it so that when operateNums is invoked, the callback "operates" on the number.
const operateNums = (input, func) => {
  func(input);
}

operateNums(1337, console.log);

// Create a function called multByTwo that accepts a number as an argument and multiplies that number by two.
const multByTwo = (input) => {
  console.log(input * 2);
}

// Create a function called squareNum that accepts a number as an argument and squares that number.
const squareNum = (input) => {
  console.log(input * input);
}

// Use multByTwo and squareNum as callbacks when invoking operateNums.
operateNums(6, multByTwo);
operateNums(6, squareNum);


//-------------------------.forEach
console.log("----------------");
const nums = [5, 10, 15, 16, 17, 18, 19, 20];
// Using a for loop, iterate through the nums array and print only the numbers that are evenly divisible by 5.
for(let i of nums){
  if(i % 5 == 0){
    console.log(i);
  }
}
// Now, use JavaScript's built-in .forEach function instead to iterate over the nums array and print only those numbers that are evenly divisible by 5.
console.log("----------------");
const myDiv = (num) => {
  if(num % 5 == 0){
    console.log(num);
  }
}

nums.forEach(myDiv);

// Write a sentence or two comparing and contrasting the two methods.
//They both practically do the same thing, they both iterate over each element of the array and apply the funtion (if statement) to the element

//---------------------------Indentation
// Correctly indent the following code:

// if(true){
//   const a = 2 + 2;
//   console.log(a);
// }
//
// if(true){
//   if(false){
//     console.log('hi');
//   }
// }
//

//------------------Semantic naming of variables
// Fix this variable to have a better name:

const myNumberArray = [2, 4, 6, 8, 10];

//--------------------Function definition placement
//Clean up this code, so that it works and has function definitions in the correct place

// const bar = () => {
//     console.log('bar here');
// }
// bar();
//
// const foo = () => {
//     console.log('foo here');
// }
// foo();


//-------------------Commenting code
//Write your own comments for each line of code:

//Function addTwoNums takes in two parameters, firstNum and secondNum
const addTwoNums = (firstNum, secondNum)=>{

  //finalValue is assigned the sum (or concatenation) of the two variables
  const finalValue = firstNum + secondNum;

  //The result is then returned
  return finalValue;
}

//-----------Error reading
//What is meant by the error this produces?

// foo();
//
// const foo () =>{
//     console.log('hi');
// }

// SyntaxError: Missing initializer in const declaration
 // - A syntax error is an error in coding, either the programmer forgot to add the proper syntax or mistyped something.  In this case it's here because it should be 'const foo = () => {'
//ReferenceError: foo is not defined - foo is called before it has been declared.  This is fixed by simply moving the function call after the function declaration.
