// console.log('nice day!');


const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

/////////////////////////////////////////////////////////
// Bond Titles
/////////////////////////////////////////////////////////

// create a new array to store the Bond titles
const bondTitles = [];
// if you know you have to loop over each array item AND you don't have to do anything with the index number, for of is a nice loop option - but you can totally use a regular for loop instead
// we are naming a variable film - it could be anything to be accessed inside our loop
for (let film of bondFilms){
	// access each film title and push it into bond Titles array
  bondTitles.push(film.title)
}

/////////////////////////////////////////////////////////
// Bond Odd Years
/////////////////////////////////////////////////////////

// create an empty array to store our odd bond films
const oddBonds = [];

// loop over each film
for (let i = 0; i < bondFilms.length ; i ++){
	// access the value of each Bond Film's year
	// if the number is odd, go into the if statement, else do nothing
	if (bondFilms[i].year % 2 !== 0 ){
		// if the year is odd, push the entire bond film into our new oddBonds array
		oddBonds.push(bondFilms[i]);
	}
}

// console.log(oddBonds);


/////////////////////////////////////////////////////////
// Bond Gross
/////////////////////////////////////////////////////////
// Get the total sum of the bond movie gross profits
// loop over the bond films
// console.log gross amounts
// because I have to get rid of the ,
// and the $ - I want to make an array of the values
// manipulate the values so that they become addable?? numbers
// then I want to add the numbers together


// example for replace var newstr = str.replace(/xmas/i, 'Christmas');

// create an empty array that will hold our new values that won't have the $
const gross = [];
// loop over every bondFilm and do something
// film is a variable name that we are creating for this loop
// bondFilms is our array of objects from above
for (let film of bondFilms){
	// push our values into our empty array gross after we've done something to each value
	// film.gross - accesses each object's gross value - we created film in our for of loop
	// .replace - uses a regular expression (starts with a / and ends with a / - in this case we just want to replace the $ with an empty string)
	gross.push(film.gross.replace(/\$/ , ''));
}

// create an empty array that will hold our new values that won't have the ,
const grossStr = [];

// get rid of the , in each gross value
// this time we're using a plain for loop, we get to each film object by using bondFilms[i]
for ( let i = 0; i < gross.length; i++){

	// use the replace method to replace the , with an empt string, we need to add the g to // to say we want to replace EVERY , - without it, it will just replace the first one and stop
	grossStr.push(gross[i].replace(/,/g, ''))
}

// convert our string values into integers
// this uses an array method called map
// map is a method that let's you iterate over every array object, do something to it and then store it in a new array, our new array will be called grossNums

// in our .map method we pass in an anonymous function and a parameter.
// The parameter will represent each array value
// we are returning each array value after it has been converted to an integer
// parseInt converts a string into a number
// const grossNums = grossStr.map((asdf)=>{
// 	return parseInt(asdf);
// })


// create an empty array to store our numbers
// this has the same result as the .map method, it just has a little more code
// we convert the string to a number and push it into a new array
// at the end we'll have a new array full of numbers
const grossNums = [];

for (let i = 0; i < grossStr.length; i++){
	grossNums.push( parseInt(grossStr[i]));
}

// console.log(grossNums);


// create a value to hold on to the sum of the numbers
let sum = 0;

// loop over each value, add each value to the current sum
for (let i = 0; i < grossNums.length; i++){
	sum += grossNums[i];
}

// got it! The number should be 13 billion something dollars
// console.log(sum);

/////////////////////////////////////////////////////////
// Bond Gross Again
/////////////////////////////////////////////////////////

// Karolin's version

// create an empty array to store our values
const bondGross = [];

// loop over each film object
// split the gross value on the ,
// join it back (gets rid of the ,)
// slice the first character off the string (the $) - DANGER must be confident each value starts with a $ or else you might cut a value, .replace is a safer method
// then parseInt - convert it from a string to a number
// then push the value into the bondGross array
for (let film of bondFilms){
  bondGross.push(parseInt(film.gross.split(',').join('').slice(1, film.gross.length)))
}

// use the .reduce method which reduces an array to a single value
// it uses a callback to determine how to reduce the values (you could subtract, multiply, divide...)
const gross = bondGross.reduce((a,b)=>{ return a + b})




const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

//change Joseph Gordon Levitt into null
// access each object and then access the next one until you reach limbo then make it equal to null
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

// log it and celebrate!
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
















// make space
