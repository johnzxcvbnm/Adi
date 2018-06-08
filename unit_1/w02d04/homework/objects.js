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
}
