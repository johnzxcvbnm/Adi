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
    this.weapons = { sprinkleSpray: 5, sugarShock: 5 };
    this.catchPhrases = ["I\'m fresher than day old pizza!", "You can\'t count my calories!"];
  }

  //Randomly logs one of the catch phrases
  talkSass() {
    console.log(this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)]);
  }

  //Logs current heath
  announceHealth() {
    console.log("I'm currently at " + this.health + " HP");
  }

  //Logs ready to rumble
  fight() {
    console.log("I\'m ready to rumble!");
  }
}

const dougie = new Hero("Dougie");
console.log(dougie);
dougie.talkSass();
dougie.announceHealth();
dougie.fight();
