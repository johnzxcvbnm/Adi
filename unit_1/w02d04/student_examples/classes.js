class Person {
  constructor(name, age, eyes, hair, lovesCats = false, lovesDogs) {
    this.legs = 2;
    this.arms = 2;
    this.eyes = eyes || 3;
    this.hair = hair || "Yellow";
    this.age = age;
    this.name = name;
    this.lovesCats = lovesCats;
    this.lovesDogs = lovesDogs || false;
  }
  classyGreeting(otherClassyPerson) { console.log("Howdy " + otherClassyPerson.name + "!"); }
  // greet() { console.log("YO!"); }
  greet(otherPerson) { console.log("Hello, " + otherPerson); }
  setHair(hairColor) { this.hair = hairColor; }
  walk () { console.log("I hate when my Segway is in the shop"); }
}

const me = new Person("John", 31, "Green", "Brown");
me.setHair("Blue");
const you = new Person("Matt", 26, "Blue", "Red");
// me.classyGreeting(you);

// console.log(me);
// console.log(you);
// console.log(typeof(me));
// console.log(typeof(you));

class SuperHero extends Person {
  constructor(name, age, eyes, hair){
    super(name, age, eyes, hair);
    this.superPowers = ["flight", "superhuman strength", "x-ray vision", "heat vision", "cold breath", "super-speed", "enhanced hearing", "nigh-invulnerability"]
  }
  fly() { console.log("Up, up, and AWAY!"); }
  greet(otherPerson){ console.log("Greetings " + otherPerson); }
  walk() { super.walk(); this.fly(); }
}

const superman = new SuperHero("Clark Kent", 30, "Blue", "Black", true, true);

// console.log(superman);
// superman.walk();
// superman.fly();
// superman.greet("Bob");

class Car {
  constructor(maker, serialNumber){
    this.maker = maker;
    this.serialNumber = serialNumber;
  }
  drive() {
    console.log("Vroom Vroom");
  }
}

class Factory {
  constructor(company){
    this.company = company;
    this.cars = [];
  }

  generateCar () {
    const newCar  = new Car(this.company, this.cars.length);
    this.cars.push(newCar);
  }
  findCar (index) {
    return this.cars[index];
  }
}

const toyota = new Factory("Toyota");
const bmw = new Factory("BMW");
toyota.generateCar();
bmw.generateCar();
console.log(bmw.findCar(0));
console.log(toyota.findCar(0));

// const factory = {
//   cars: [],
//   generateCar: () => {
//     const newCar  = new Car(factory.cars.length);
//     factory.cars.push(newCar);
//   },
//   findCar: (index) => {
//     return factory.cars[index];
//   }
// }

// Factory.generateCar();
// factory.generateCar();
// console.log(factory);
// console.log(factory.findCar(1));
