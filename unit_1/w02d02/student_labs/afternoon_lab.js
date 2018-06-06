// Given the following object, log the third element from the array

const fun = {
    asdf: ["afd", "matt", 'sweet']
}

// console.log(fun.asdf[2]);
//
// Given the following object, log the elbow property

const body = {
    arm: {
        elbow: 'pointy'
    }
};

// console.log(body.arm.elbow);
// Create a data structure such that the following code logs the value "blue"
const myList = [
  { eyeColor: "blue" },
  { eyeColor: "green" }
];
// console.log(myList[0].eyeColor);

// Create a data structure such that the following code logs the value "buy supplies"

const myArrays = [
    ["Cheese", "Milk"],
    ["Blah", "Blah 2", "Blah 3: The Blahing"],
    ["Grocery List", 0, 3, 4, "buy supplies"]
];
// console.log(myArrays[2][4]);

// Call the function in the given code:

const awesome = [
    { asdf:'true'},
    3456.245,
    () => { console.log('fun'); },
    "buddy"
];

// awesome[2]();

// Loop over the following array and print its values:

const refrigerator = {
    fruits: ['apple', 'pear', 'banana']
}

// for(let i of refrigerator.fruits)
//   console.log(i);

// Use two loops to loop over each array in the given "container" array

const container = [
    [1,5,7],
    ['bear', 'dog', 'cat'],
    [true, false, true]
];

// for(let subArray of container){
//   for(let element of subArray){
//     console.log(element);
//   }
// }

// Create a data structure such that the following logs 4

const createCar = () => {
  return { doors: 4, tires: 4};
}
// console.log(createCar().tires); // => 4

// Create a data structure such that the following logs pears
const generateShoppingList = () => {
  return ["apples", "spinach", "eggs", "pears"];
}
// console.log(generateShoppingList()[3]); //  => pears

// Create a data structure such that the following logs 20lbs

const createRobot = () => {
  return {
    name: "Bob",
    stats: {
      height: "8'",
      weight: "20lbs"
    }
  };
}
// console.log(createRobot().stats.weight); // => 20lbs

// Create a data structure such that the following executes without errors:

const createFunction = () => {
  return () => { console.log("I did it!");};
}
// createFunction()();

const instruments = {
  banjo: ["1920 gibson", "deering", "washburn"],
  guitar: {
    acoustic: ["martin", "taylor", "santa cruz", "gibson"],
    electric: ["fender Strat", "telecaster", "PRS", "languedoc"],
    nylon: ["baldwin", "cordoba"]
  },
  mandolin: ["eastman", "weber", "collings"]
}

// console.log(instruments.guitar.electric[1]);
// console.log(instruments.guitar.acoustic[2]);
// console.log(instruments.banjo[2]);
// console.log(instruments.mandolin[1]);

// for(let guitar of instruments.guitar.electric){
//   console.log(guitar);
// }

instruments.favSingers = ["That guy", "Oh and that other one"];
// console.log(instruments);

// Access the foo property:

const asdfasdf = [
    true,
    false,
    () => {
        return {
            foo: 'some value'
        }
    },
    'apple'
];

// console.log(asdfasdf[2]().foo);


// Create a data structure such that the following code logs "dog"

const matt = [
  "Doesn't matter",
  () => {
    return {
      someArray: ["dog", "cat", "lol"]
    };
  }
];
// console.log(matt[1]().someArray[0]);

// Create a data structure such that the following code logs "blue"
const foods = [
  "Doesn't matter",
  () => {
    return {
      anObject: {
        feel: "nice",
        color: "blue"
      }
    };
  }
];

// console.log(foods[1]().anObject.color);

// Garmonbozia
// In early 2017, digital archaeologists discovered a strangest, nonsensical combined data structure. Like in Raiders of the Lost Ark, they refused to look at it directly for fear of melting their faces off.
//
// They called it "Garmonbozia" after the Twin Peaks substance that represents suffering. That substance is creamed corn.
//
// Your mission is to console.log 'creamed corn' from deep within the bizarre structure:

const garmonbozia = {
  meltedFace: true,
  wobblyArms: true,
  mysteryMeats: [
    'Schlimmbinooks',
    'blangs',
    { place: 'Akrotiri', treasures: ['Minoan temples', 'volcanoes'] },
    { type: 'Yuck-tops', deliverables: [
      'Nevermind',
      { zone: 'safety-zone' },
      { zone: false, true: true },
      () => {
        return () => {
          return () => {
            return () => {
              return () => {
                return { website: 'Gossipcop.com', what: {
                  offering: 'creamed corn', location: 'dark'
                }
                }
              }
            }
          }
        }
      }
     ]
    }
  ]
}

// console.log(garmonbozia.mysteryMeats[3].deliverables[3]()()()()().what.offering);
