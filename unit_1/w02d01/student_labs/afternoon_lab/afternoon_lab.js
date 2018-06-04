// Me
// Create an empty object called me.
// Assign it properties for name, age, and email with corresponding values.

const me = {
  name: "John",
  age: 31,
  email: "john@example.com"
}

// console.log(me);

// Using dot notation, access the name property in your object.
// console.log(me.name);
// Without writing directly into the object, update the value of age to be 1000 years old.
me.age = 1000;
// console.log(me.age);
// Using dot notation, verify that age has been updated.
// Add a key to this object called: "place of residence" and give it a value of your hometown. Note that the key has spaces, therefore you cannot use dot notation.
me["place of residence"] = "Texas";
// Access the value of "place of residence"
// console.log(me);


const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

// Given the slimer object:
// What would you write to access the name and console.log it?
// console.log(monster.name);
// What would you write to change the type to 'creature' (without changing it inside the object)
monster.type = "creature";

// What would you write to add a key to the object called age, and set the age to 6?
monster.age = 6;
// console.log the object to make sure type is creature, and age is 6
// console.log(monster);

// Ogres
// Let's say you want to make an adventure game where you are an adventurer and you are going to fight ogres.
//
// Using objects, create models and have them interact.
// how would you model your adventurer? Your adventurer will want a name and hitpoints. What else would your adventurer need?
// how would you model an ogre? Your ogre will want hitpoints.
// Write a very small program that will simulate a battle between your adventurer and an ogre. You can use the same techniques you used in your landscaping game from the weekend.
// When your adventurer's hitpoints reach 0 the game is over.
// When your ogre's hitpoints reach 0 the game is over.
// If you want to provide input to the game, you can run it in the Chrome console (but that isn't strictly necessary for now).
//
const ogre = {
  hp: 100,
  attack: 20,
  canAttack: false
}

const hero = {
  hp: 100,
  attack: 20,
  isDefending: false
}

const attackPhase = () => {
  if(hero.isDefending){
    if(ogre.canAttack){
      hero.hp -= ogre.attack / 2;
      ogre.canAttack = false;
      hero.isDefending = false;
    } else {
      ogre.canAttack = true;
      hero.isDefending = false;
    }
  } else {
    ogre.hp -= hero.attack;
  }
  if(ogre.hp > 0){
    if(ogre.canAttack){
      hero.hp -= ogre.attack;
      ogre.canAttack = false;
    } else {
      ogre.canAttack = true;
    }
  }
}

const miniGame = () => {
  let answer = "";
  alert("A wild ogre has appeared!!!");
  while(hero.hp > 0 && ogre.hp > 0){
    alert("You have " + hero.hp + " HP\nThe orge has " + ogre.hp + " HP");
    if(ogre.canAttack){
      answer = prompt("The ogre is about to attack!\nWhat will you do?", "Attack/Defend");
      if(answer === "attack"){
        attackPhase();
      } else if(answer === "defend"){
        hero.isDefending = true;
        attackPhase();
      } else {
        alert("Invalid Command");
      }
    } else {
      answer = prompt("The ogre is standing still.\nWhat will you do?", "Attack/Defend");
      if(answer === "attack"){
        attackPhase();
      } else if(answer === "defend"){
        hero.isDefending = true;
        attackPhase();
      } else {
        alert("Invalid Command");
      }
    }
  }
  if(hero.hp > 0){
    alert("You Win!");
  } else {
    alert("You died!");
  }
}

// miniGame();

// 1. Mama cat
// Define an object called cat1 that contains the following properties:
//
// name
// breed
// age (a number)
// console.log the cat's age
//
// console.log the cat's breed
const cat1 = {
  name: "James",
  breed: "Black",
  age: 4
}

// console.log(cat1.age);
// console.log(cat1.breed);


// 2. Papa cat
// Define an object called cat2 that also contains the properties:
// name
// breed
// age (a number)

const cat2 = {
  name: "Carmen",
  breed: "Blue Eyed Russian",
  age: 2
}

// 3. Combine Cats!
// The cats are multiplying!
//
// Write a function combineCats that has two parameters mama, and papa. The function will take two arguments -- each a cat object.
//
// Pass cat1 and cat2 as arguments to the combineCats function. The function should console.log them.
// Example:
//
// { name: "Joe", age: 19, breed: "Mog" }
//
// { name: "Jam", age: 45, breed: "Siamese" }

const combineCats = (myCat1, myCat2) => {
  const myNewCat = {
    name: myCat1.name + " " + myCat2.name,
    breed: myCat1.breed + "-" + myCat2.breed,
    age: 1
  }
  return myNewCat;
}
// console.log(combineCats(cat1, cat2));
// console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));


// User object
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.
//
// 1. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.

const user = {
  name: "John",
  email: "john@example.com",
  age: 31,
  purchased: []
}

// 2. Update the user
// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
user.email = "johnKusching@example.com";

// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
user.age++;
console.log(user);
// 3. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
user.location = "Texas";

// 4. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push("carbohydrates");

// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
user.purchased.push("peace of mind");

// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push("Merino jodphurs");

// Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased.pop());

// 5. Object-within-object
// You can add an object to an existing object in the same way that you can add any new key/value pair. If we want to give our user a friend with a name and age, we could write:

// When we console.log user, we would see the friend object added to our user object.
// Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
	name: "Grace Hopper",
	age: 85,
  location: "Florida",
  purchased: []
}

// Console.log just the friend's name
console.log(user.friend.name);
// Console.log just the friend's location
console.log(user.friend.location);
// CHANGE the friend's age to 55
user.friend.age = 55;
// FIGURE IT OUT
//
// The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
user.friend.purchased.push("The One Ring");
// The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
user.friend.purchased.push("A latte");
// Console.log just "A latte" from the friend's purchased array.
console.log(user.friend.purchased[user.friend.purchased.length - 1]);

// 6. Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
for(let i = 0; i < user.purchased.length; i++){
  console.log(user.purchased[i]);
}
// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for(let i = 0; i < user.friend.purchased.length; i++){
  console.log(user.friend.purchased[i]);
}
// 7. Functions
// Write a single function updateUser that takes no parameters. When the function is run, it should:
//
// increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.
const updateUser = () => {
  user.age++;
  user.name = user.name.toUpperCase();
}
updateUser();
console.log(user);
