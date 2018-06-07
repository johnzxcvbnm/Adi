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
const you = new Person("Matt", 26, "Blue", "Red")
me.classyGreeting(you);

// console.log(me);
// console.log(you);
// console.log(typeof(me));
// console.log(typeof(you));
