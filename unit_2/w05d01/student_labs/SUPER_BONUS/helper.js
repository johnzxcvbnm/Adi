const sightingsData = require("./sightings.json");
// console.log(sightingsData[0].state === "CA");

const state = process.argv[2]
console.log(state);

const myString = state.split("=");
console.log(myString);

for(let i of sightingsData){
  if(i[myString[0]] === myString[1]){
    console.log(i);
  }
}
