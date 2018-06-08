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

  //Randomly chooses a weapon and subtracts the correct amount of damage from the 'foe's health.
  //function returns a string to push to the text box
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

  //Randomly chooses a weapon and subtracts the correct amount of damage from the 'foe's health.
  //function returns a string to push to the text box
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

//Pushes combat text to the textBox
//The hero attacks first, then after a (one) second delay the enemy attacks
const pushFightText = (myHero, myEnemy, text) => {
  text.innerHTML += "<br>" + myHero.fight(myEnemy);
  setTimeout(function() { text.innerHTML += "<br>" + myEnemy.fight(myHero); }, 1000);
}

//Pushes catch phrases to the textBox
//The hero goes first, then after a (one) second delay the enemy goes
const pushCatchText = (myHero, myEnemy, text) => {
  text.innerHTML += "<br>" + myHero.talkSass();
  setTimeout(function() { text.innerHTML += "<br>" + myEnemy.talkSmack(); }, 1000);
}

//Adds eventListeners to the 'Attack' and 'Catch Phrase' buttons.  Was suppose to be used in conjunction of disable button, but time ran out.
const enableButtons = (atkButton, ctchButton, myHero, myEnemy, text) => {
  atkButton.addEventListener('click', function(){
    pushFightText(myHero, myEnemy, text);
  }, false);

  ctchButton.addEventListener('click', function(){
    pushCatchText(myHero, myEnemy, text);
  }, false);

}

//Could not get disable buttons to work
// const disableButtons = (atkButton, ctchButton, myHero, myEnemy, text) => {
//   atkButton.removeEventListener('click', function(){}, true);
//   ctchButton.removeEventListener('click', function(){}, true);
  // atkButton.removeEventListener('click', function(){
  //   pushFightText(myHero, myEnemy, text);
  // }, true);
  //
  // ctchButton.removeEventListener('click', function(){
  //   pushCatchText(myHero, myEnemy, text);
  // }, true);
// }




//Resets Dougie's and Remy's health back to the default 100 and clears the battle text.
const resetFunction = (guy1, guy2, text) => {
  guy1.health = 100;
  guy2.health = 100;
  text.innerHTML = "";
}

//"Main" function, which starts the game
const startFunction = () => {
  const dougie = new Hero("Dougie");
  const remy = new Enemy("Remy");
  const text = document.getElementById("battleText"); //textBox which has all the text from 'combat'
  const attackB = document.getElementById("attackButton"); //the attack button
  const catchB = document.getElementById("catchButton"); //the catch phrase button
  const resetB = document.getElementById("resetButton"); //the reset button

  // enableButtons(attackB, catchB, dougie, remy, text);
  // disableButtons(attackB, catchB, dougie, remy, text);

  //Adds eventlisteners to the buttons
  attackB.addEventListener('click', function(){
    pushFightText(dougie, remy, text);
  }, false);

  catchB.addEventListener('click', function(){
    pushCatchText(dougie, remy, text);
  }, false);

  resetB.addEventListener('click', function() {resetFunction(dougie, remy, text);}, false);
}

startFunction();
