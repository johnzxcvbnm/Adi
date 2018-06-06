const adventurer = {
  name: "Timothy",
  hitpoints: 10,
  belongings: ["sword", "potion", "Tums"],
  companion: {
    name: "Velma",
    type: "Bat",
    companion: {
      name: "Tim",
      type: "Parasite",
      belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
    }
  }
}

// console.log(adventurer.belongings);

// for(let i = 0; i < adventurer.belongings.length; i++){
//   console.log(adventurer.belongings[i]);
// }

const myAdventurer = {
  name: "John",
  hitpoints: 100,
  belongings: ["Rusty Spoon", "Sword of a 1000 Truths", "Grey Goose Vodka"]
}

// console.log(myAdventurer.belongings[myAdventurer.belongings.length - 1]);
// myAdventurer.belongings.push("Vogue Magazine");
// for(let i = 0; i < myAdventurer.belongings.length; i++){
//   console.log(myAdventurer.belongings[i]);
// }

// console.log(adventurer.companion);
// console.log(adventurer.companion.name);
//
// adventurer.companion.name = "Susan";
// console.log(adventurer.companion.name);
// adventurer.companion2 = {name: "Navi", type: "Fairy"};
// console.log(adventurer);

// console.log(adventurer.companion.companion.belongings
//             [adventurer.companion.companion.belongings.indexOf
//             ("health insurance")]);

// const movies = [
//   { title: "Tokyo Story" },
//   { title: "Paul Blart: Mall Cop" },
//   { title: "L'Avventura" }
// ];

// console.log(movies);
// console.log(movies[0].title);

// for(let i = 0; i < movies.length; i++){
//   console.log(movies[i].title);
// }

const monster = {
  name: "Slimer",
  age: 6
}

const someVar = "name";

// console.log(monster[someVar]);

// const movie = {
//   title: "L'Avventura",
//   director: "Michelangelo Antonioni",
//   year: 1960
// }

// for(let key in movie){
//   console.log(movie[key]);
// }

// console.log(Object.keys(movie));
//
// for(let i = 0; i < Object.keys(movie).length; i++){
//   console.log(movie[Object.keys(movie)[i]]);
// }

// const movie = { title: "Eraserhead", director: "David Lynch", year: 1978 }

// for(let key in movie){
//   console.log(key);
// }
//
// for(let key in movie){
//   console.log(movie[key]);
// }

//Does NOT WORK
// for(let key of movie){
//   console.log(key);
// }

const movies = [
	{ title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
	{ title: "Eraserhead", director: "David Lynch", year: 1978 },
	{ title: "Dayereh", director: "Jafar Panahi", year: 2000 },
	{ title: "Dayereh", director: "Jafar Panahi", year: 2000 }
];

const moviesObj = {};

for(let keys of movies){
  for(let key2 in keys){
    console.log(key2);
  }
  // console.log(keys);
}
