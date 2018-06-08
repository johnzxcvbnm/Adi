class Hero {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.weapons = { sprinkleSpray: 5, sugarShock: 10 };
    this.catchPhrases = ["I\'m fresher than day old pizza!", "You can\'t count my calories!"];
  }

  //Randomly logs one of the catch phrases
  talkSass() {
    return this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)];
  }

  //Logs current heath
  announceHealth() {
    console.log("I " + this.name + " am currently at " + this.health + " HP.");
  }

  //Logs ready to rumble
  fight(foe) {
    let weaponChoice = Math.floor(Math.random() * 2);
    if(weaponChoice == 0){
      foe.health -= 5;
      return foe.name + " was hit by Sprinkle Spray!  His health is now at " + foe.health + ".";
    } else {
      foe.health -= 10;
      return foe.name + " was hit by Sugar Shock!  His health is now at " + foe.health + ".";
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
    return this.catchPhrases[Math.floor(Math.random() * this.catchPhrases.length)];
  }

  //Logs current heath
  announceHealth() {
    console.log("I, " + this.name + " am currently at " + this.health + " HP.");
  }

  //Logs ready to rumble
  fight(foe) {
    let weaponChoice = Math.floor(Math.random() * 2);
    if(weaponChoice == 0){
      foe.health -= 5;
      return foe.name + " got hit by Pepperoni Stars!  His health is now at " + foe.health + ".";
    } else {
      foe.health -= 10;
      return foe.name + " was hit by Cheese Grease!  His health is now at " + foe.health + ".";
    }
  }
}

//Resets Dougie's and Remy's health back to the default 100 and clears the battle text.
const resetFunction = (guy1, guy2, text) => {
  guy1.health = 100;
  guy2.health = 100;
  text.innerHTML = "";
}



const startFunction = () => {
  const dougie = new Hero("Dougie");
  const remy = new Enemy("Remy");
  const text = document.getElementById("battleText");
  const attackB = document.getElementById("attackButton");
  const catchB = document.getElementById("catchButton");
  const resetB = document.getElementById("resetButton");

  attackB.addEventListener('click', function(){
    text.innerHTML += "<br>" + dougie.fight(remy);
    setTimeout(function() { text.innerHTML += "<br>" + remy.fight(dougie); }, 1000);
  }, false);

  catchB.addEventListener('click', function(){
    text.innerHTML += "<br>" + dougie.talkSass();
    setTimeout(function() { text.innerHTML += "<br>" + remy.talkSmack(); }, 1000);
}, false);

  resetB.addEventListener('click', function() {resetFunction(dougie, remy, text);}, false);

  // dougie.health = 10;
  // dougie.announceHealth();
  // resetFunction(dougie, remy, text);
  // dougie.announceHealth();

}

startFunction();
