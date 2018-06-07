// const host = {
//   name: "John",
//   occupation: "Student",
//   saySpecs: () => { console.log("My name is " + host.name + ".  My occupation is " + host.occupation); }
// }
//
// host.saySpecs();
// const host1 = new BasicHost("Roget", "creator of Roget's Thesaurus");
// const myself = new BasicHost("John", "Student");
// myself.saySpecs();
// host1.saySpecs();

class BasicHost {
  constructor(name = "John Doe", occupation = "Town Idiot", personalityTrait = ["Aggression"]){
    this.name = name;
    this.occupation = occupation;
    this.personalityTrait = personalityTrait;
  }
  //Outputs the specs of the host, ie - their name and occupation
  saySpecs() {
    console.log("My name is " + this.name + ".  My occupation is " + this.occupation + ".");
  }
  //Outputs all of the hosts personality traits.  Some hosts have more traits than others
  sayTraits() {
    for(let i of this.personalityTrait){
      console.log("My trait is " + i);
    }
  }
}

//List of random names to pull from
const names = ["Laila", "Jack", "Harley", "Hertha", "Darren", "Jolene",
             "Loura", "Lona", "Davida", "Reena", "Leland", "Ta", "Jen",
             "Linn", "Roslyn", "Margorie", "Rafaela", "Romona", "Shanel", "Stan"];

//List of random occupations to pull from
const occupations = ["Clerical assistant", "Leaflet distributor", "Landowner",
                      "Special constable", "Anaesthetist", "Park-keeper", "Butler",
                      "Choreographer", "Blacksmith", "Chef", "Legal secretary",
                      "Song writer", "Librarian", "Landscape gardener"];

//List of random traits to pull from
const traits = ["Empathy", "Loyalty", "Aggression", "Curiosity", "Sleezey", "Bulk Apperecption", "Drunk", "Sensual", "Sexual", "Dumb", "Intelligent", "Charismatic"];

const hostArray = [];  //New Host array to populate the world with
const newTraits = [];  //New traits to push onto the hosts

//Creates 100 new hosts
for(let i = 0; i < 100; i++){
  //Pulls 1 to 3 random traits and pushes them onto the newTraits array
  for(let x = 0; x < Math.floor(Math.random() * 3) + 1; x++){
    newTraits.push(traits[Math.floor(Math.random() * traits.length)]);
  }

  //Creates a new host with a random name, occupation and varying traits
  hostArray.push(new BasicHost(names[Math.floor(Math.random() * names.length)],
                              occupations[Math.floor(Math.random() * occupations.length)],
                              newTraits.splice(0, newTraits.length)));
}

// hostArray[55].saySpecs();
// hostArray[55].sayTraits();
console.log(hostArray);
