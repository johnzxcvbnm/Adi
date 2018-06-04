const car = {
  color: "blue",
  hp: 4000,
  year: 1989
}

// console.log(car);
// console.log(car[0]);

const person = {
  name: 'Karolin',
  height: 67,
  hairColor: 'Dark Ash Copper Blonde',
  naturalHairColor: false,
  temperment: 'Space Cadet',
  eyeColor: 'green',
  age: 40
}

// console.log(person["name"]);

const myDog = {
  name: "Patches",
  age: 12,
}

const celebrity = {
  name: "Bruce Willis",
  age: 56,
  isCurrentlyTweeting: true
}

// console.log(myDog);
// console.log(celebrity);
// console.log(celebrity.name);
// console.log(celebrity.age);
// console.log(celebrity.isCurrentlyTweeting);
// if(celebrity.isCurrentlyTweeting){
//   console.log("Turn off Twitter");
// }

const house = {
  doors: 9
}

// console.log(house);
//
// house.windows = 30;
// house.hasGarden = true;
// house.windows = 10;
//
// console.log(house);

const macros = {}

macros.protein = "tempeh";
macros.carbohydrates = "spuds";
macros.fats = "olive oil";
// console.log(macros);

const guitar = {
  strings: 6,
  isAcoustic: true
}

// guitar.strings = 100;
// console.log(guitar.strings);
// guitar.isAcoustic = false;
// console.log(guitar.isAcoustic);
// guitar.belongsTo = "Dimebag Darrell";
// console.log(guitar.belongsTo);
// guitar.belongsTo = "Mr. Rogers";
// console.log(guitar);

// const obj = {};
// for(let i = 0 ;i < 10; i++){
//   obj['key' + i] = 'foo';
// }
// console.log(obj);

// const testObject = {};
// testObject["this is a test"] = "test";
// console.log(testObject);
// testObject[2] = "I'm just messing around with objects";
// console.log(testObject);

// const obj = {
//   whatevs: 'hi',
//   count: 4
// }
//
// if(obj.whatevs == "hi"){
//   console.log('ok');
// }
//
// for(let i = 0; i < obj.count; i++){
//   console.log(i);
// }

const obj = {
  something: 'wuttt'
}

if(obj.something) {
  console.log('ok');
}
if(obj.anotherthing) {
  console.log('ok');
} else {
  console.log('no go');
}
