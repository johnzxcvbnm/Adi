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

const dougie = new Hero("Dougie");
const remy = new Enemy("Remy");
