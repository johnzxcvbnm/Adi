// Pseudo code the process for making waffles (the frozen kind) with syrup.
//
// Start simply with broad commands (put syrup on the waffles)
//
// As time permits, make each broad command more specific (pull syrup from refrigerator, warm the syrup before you use it, open the lid on the syrup, pour the syrup on top of waffle).
//
// Once you've done that, take the time to think this over as if you were writing it as an application. Comment each step and determine what it would be in your code from the following:

// Check to see if you have frozen waffles -Boolean Expresion
//   Add waffles to grocery list -function
// Check to see if you have syrup -Boolean Expresion
//   Add syrup to grocery list -function
// Check to see if user has a plate, knife and fork -Boolean Expresion
//   Add plate, knife and fork to grocery list -function
// Check to see if the grocery list is empty -Boolean Expresion
//   If it is NOT empty, go grocery shopping -function
// Get plate, knife and fork -function
// Take waffles out -function
// Ask user for desired number of waffles -input -function
// Insert frozen waffles into toaster -function
//   When toasted, take waffles out of toaster and place onto plate -function
//   If -input- is greater than 2, loop previous two functions until input in reached -Boolean Expresion -loop
// Take out syrup -function
// Open syrup and pour over waffles -function
// Eat waffles using knife and fork -function
// Clean up -function
//
// if(!haveWaffles()) //Check to see if you have frozen waffles -Boolean Expresion
//   groceryList.push("Waffles");  //Add waffles to grocery list -function
// if(!haveSyrup())  //Check to see if you have syrup -Boolean Expresion
//   gorceryList.push("Syrup");  //Add syrup to grocery list -function
// if(!havePlateKnifeFork())  //Check to see if user has a plate, knife and fork -Boolean Expresion
//   gorceryList.push("Plate");  //Add plate, knife and fork to grocery list -function
// if(!groceryList == [])  //Check to see if the grocery list is empty -Boolean Expresion
//   groceryShopping();  //If it is NOT empty, go grocery shopping -function
// takeOut("Plate");  //Get plate -function
// takeOut("Waffles");  //Take waffles out -function
// numWaffles = askWaffles(); //Ask user for desired number of waffles -input -function
// //Insert frozen waffles into toaster -function
// //  When toasted, take waffles out of toaster and place onto plate -function
// //  If -input- is greater than 2, loop previous two functions until input in reached -Boolean Expresion -loop
// while(numWaffles > 0){
//   toastWaffles();
//   numWaffles--;
//   plate.push("Waffle");
// }
//
// takeOut("Syrup");  //Take out syrup -function
// plate.push("Syrup");  //Open syrup and pour over waffles -function
//
// //Eat waffles using -function
// while(plate != []){
//   plate.pop();
// }
//
// reset(); //Clean up -function

const groceryList = [];
const plate = [];

const haveCheck = (item) => {
  let answer = prompt("Do you have " + item + "?", "yes/no");
  return answer === "yes";
}

const takeOut = (item) => {
  alert("You took out " + item + ".");
}

groceryShopping = () => {
  let myList = "";
  for(let i = 1; i < groceryList.length; i++){
    myList += groceryList[i] + ", ";
  }
  if(groceryList.length > 1){
    myList += " and " + groceryList[0];
  } else {
    myList += groceryList[0];
  }
  alert("You went to the grocery store and bought " + myList + ".  Great Job!");
}

const askWaffles = () => {
  return prompt("How many waffles do you want?", "1-2");
}

const toastWaffles = () => {
  alert("You toasted a waffle");
}

const eatWaffles = () => {
  plate.pop(); //take off the syrup
  while(plate.length != 0){
    alert("You ate a waffle");
    plate.pop();
  }
}

const reset = () => {
  while(groceryList.length != 0){
    groceryList.pop();
  }
  while(plate.length != 0){
    plate.pop();
  }
}

const mainFunction = () => {
  if(!haveCheck("waffles")) //Check to see if you have frozen waffles -Boolean Expresion
    groceryList.push("waffles");  //Add waffles to grocery list -function
  if(!haveCheck("syrup"))  //Check to see if you have syrup -Boolean Expresion
    groceryList.push("syrup");  //Add syrup to grocery list -function
  if(!haveCheck("a plate"))  //Check to see if user has a plate, knife and fork -Boolean Expresion
    groceryList.push("a plate");  //Add plate, knife and fork to grocery list -function
  if(!(groceryList.length == 0))  //Check to see if the grocery list is empty -Boolean Expresion
    groceryShopping();  //If it is NOT empty, go grocery shopping -function

  let numWaffles = askWaffles();
  if(numWaffles > 0){ //Ask user for desired number of waffles -input -function
    takeOut(" a plate");  //Get plate -function
    takeOut(" the waffles");  //Take waffles out -function
    takeOut("Syrup");
  }  //Take out syrup -function
  // //Insert frozen waffles into toaster -function
  // //  When toasted, take waffles out of toaster and place onto plate -function
  // //  If -input- is greater than 2, loop previous two functions until input in reached -Boolean Expresion -loop
  while(numWaffles > 0){
    toastWaffles();
    plate.push("Waffle");
    numWaffles--;
  }

  plate.push("Syrup");  //Open syrup and pour over waffles -function

  // //Eat waffles using -function
  eatWaffles();
  reset(); //Clean up -function
}

mainFunction();
