// Hero:
// Let's create our Hero class!
//
// Attributes:
// name: set name from parameter in constructor method
// health: initially 100
// weapons: use the following object
// {
//     sprinkleSpray: 5,
//     sugarShock: 10
// }
// catchPhrases: use the following array
// ['i\'m fresher than day old pizza',
//  'you can\'t count my calories']
// Methods:
// talkSass: logs one of his catchphrases randomly
// announceHealth: logs his current health
// fight: for now, logs 'i\'m ready to rumble'
// Now, using this Hero class, create an instance of our hero Dougie the donut.

class Hero {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = { sprinkleSpray: 5, sugarShock: 10 };
    this.catchPhrases = ["I\'m fresher than day old pizza!", "You can\'t count my calories!"];
  }

  //Randomly logs one of the catch phrases
  talkSass() {
    console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
  }

  //Logs current heath
  announceHealth() {
    console.log("I " + this.name + " am currently at " + this.health + " HP.");
  }

  //Logs ready to rumble
  fight(foe) {
    console.log("I\'m ready to rumble!");
    let weaponChoice = Math.floor(Math.random() * 2);
    if(weaponChoice == 0){
      foe.health -= 5;
      console.log(foe.name + " was hit by Sprinkle Spray!  His health is now at " + foe.health + ".");
    } else {
      foe.health -= 10;
      console.log(foe.name + " was hit by Sugar Shock!  His health is now at " + foe.health + ".");
    }
  }
}

const dougie = new Hero("Dougie");
// console.log(dougie);
// dougie.talkSass();
// dougie.announceHealth();
// dougie.fight();


//------------------Enemy:
// Now let's create our Enemy class!
//
// Attributes:
// name: set name from parameter in constructor method
// health: initially 100
// weapons: use the following object
// {
//     pepperoniStars: 5,
//     cheeseGrease: 10
// }
// catchPhrases:
// ['i\'m youtube famous',
// 'i\'m more dangerous than an uncovered sewer']
// Methods:
// talkSmack: logs one of his catchphrases randomly
// announceHealth: logs his current health
// fight: for now, logs i\'m gonna flatten you like a slice of pepperoni!
// Now, using this Enemy class, create an instance of the enemy Pizza Rat.

class Enemy {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = { pepperoniStars: 5, cheeseGrease: 10 };
    this.catchPhrases = ["I\'m YouTube famous!", "I\'m more dangerous than an uncovered sewer!"];
  }

  //Randomly logs one of the catch phrases
  talkSmack() {
    console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
  }

  //Logs current heath
  announceHealth() {
    console.log("I, " + this.name + " am currently at " + this.health + " HP.");
  }

  //Logs ready to rumble
  fight(foe) {
    console.log("I\'m gonna flatten you like a slice of pepperoni!");
    let weaponChoice = Math.floor(Math.random() * 2);
    if(weaponChoice == 0){
      foe.health -= 5;
      console.log(foe.name + " got hit by Pepperoni Stars!  His health is now at " + foe.health + ".");
    } else {
      foe.health -= 10;
      console.log(foe.name + " was hit by Cheese Grease!  His health is now at " + foe.health + ".");
    }
  }
}

const remy = new Enemy("Remy");
// console.log(remy);
// remy.talkSmack();
// remy.announceHealth();
// remy.fight();


//----------------------------Walking down the street
// Now, let's write their story! Dougie is walking down Flat Iron -- but oh no! He runs into Pizza rat!
//
// Have Dougie talkSass
// Have Pizza Rat talkSmack
// Have Dougie announceHealth
// Have Pizza Rat announceHealth
dougie.talkSass();
remy.talkSmack();
dougie.announceHealth();
remy.announceHealth();

//----------------------------------Fight!
// Things have escalated between Dougie and Pizza Rat!
//
// Upgrade their fight methods so that it accesses one of their weapons and console log its hitpoints.
// Keep upgrading this fight method to accept an argument called enemy so that when you call on the fight method you can pass in the entire Dougie or Pizza Rat object as the parameter. (i.e. dougie.fight(pizzaRat))
// Now that we are able to pass in Dougie or Pizza Rat as an object, we can make it so that our fight method subtracts from their health.
// Using the hitpoints from the weapon they're using, subtract that amount from the enemy's health (i.e. If Dougie fights Pizza Rat using sprinkleSpray, subtract sprinkleSpray's hitpoint value (5) from Pizza Rat's health)
// Console log the enemy name and their new health value (i.e. 'Dougie got hit by pepperoniStars! His health is now at 95!')
// Now, they can fight!
//
// Have Pizza Rat fight Dougie
// Have Dougie fight Pizza Rat
// Have Pizza Rat and Dougie both announceHealth to make sure their health has decreased!
remy.fight(dougie);
dougie.fight(remy);
dougie.announceHealth();
remy.announceHealth();
