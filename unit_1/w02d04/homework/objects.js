//---------Setup
// Create a class for a Protagonist
// attributes:
// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0
// methods:
// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())

class Protagonist {
  constructor(name){
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamsters = [];
    this.bankAccount = 0;
  }
  //get functions that return what you get
  getName() { return this.name; }
  getAge() { return this.age; }
  getWeight() { return this.weight; }

  //Log's a message with the persons name.
  greet() { console.log("Hi, my name is " + this.name + "."); }

  //Increase weight and mood
  eat() {
    this.weight++;
    this.mood++;
  }

  //Decrease weight if weight is more than zero
  exercise() {
    if(this.weight > 0){
      this.weight--;
    }
  }

  //Increment age, height, weight, decrement mood, increase bank account by 10
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }

  //Push the hamster (name) onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster. (5)
  buyHamster(name){
    if(this.bankAccount >= 5){
      console.log("You bought a hamster!")
      this.hamsters.push(name);
      this.mood += 10;
      this.bankAccount -= 5;
    } else {
      console.log("You can't afford one!");
    }
  }

  //Calls ageUp() 'times' number of times
  ageMore(times) {
    for(let i = 0; i < times; i++){
      this.ageUp();
    }
  }

  //Calls exercise() 'times' number of times
  exerciseMore(times) {
    for(let i = 0; i < times; i++){
      this.exercise();
    }
  }

  //Calls eat() 'times' number of times
  eatMore(times){
    for(let i = 0; i < times; i++){
      this.eat();
    }
  }
}

// // //Function takes in two variables, times is the number of times you want to task to be done, task is the function that is to be called
// const repeatTask = (times, task) => {
//   for(let i = 0; i < times; i++){
//     task();
//   }
// }

//--------------------------Creating a story
// Feel free to update or add methods to automate some of these tasks.
//
// Instantiate a new Protagonist named Timmy
const timmy = new Protagonist("Timmy");

// Age Timmy five years
timmy.ageMore(5);

// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
timmy.eatMore(5);

// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
timmy.exerciseMore(5);

// Age Timmy 9 years
timmy.ageMore(9);

// Create a hamster named "Gus"
const myHamster = "Gus";

// Set Gus's owner to the string "Timmy"
// Have Timmy "buy" Gus
timmy.buyHamster(myHamster);

// Age Timmy 15 years
timmy.ageMore(15);

// Have Timmy eat twice
timmy.eatMore(2);

// Have Timmy exercise twice
timmy.exerciseMore(2);
console.log(timmy);
