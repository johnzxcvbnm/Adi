/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/'+ 'vampires';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect( mongoURI );

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on( 'open' , ()=>{
  console.log('Connection made!');
});

/**********************************************************************
Write Your Code Below
**********************************************************************/

// Vampire.insertMany(seedData, (err, vampires) => {
//   if(err){ console.log(err); }
//   else{ console.log("Added provided Vampire data: ", vampires); }
//   mongoose.connection.close();
// });

const myVampires = [
    {
    name: 'John',
    hair_color: 'brown',
    eye_color: 'green',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['Peaches','Videogames'],
    location: 'Dallas, Texas, US',
    gender: 'm',
    victims: 100
  },{
    name: 'Jordan',
    hair_color: 'brown',
    eye_color: 'green',
    dob: new Date(1931, 6, 11, 6, 66),
    loves: ['Kisses'],
    location: 'Dallas, Texas, US',
    gender: 'F',
    victims: 60
  },{
    name: 'Count Chocula',
    hair_color: 'brown',
    eye_color: 'brown',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['cereal','marshmallows'],
    location: 'Minneapolis, Minnesota, US',
    gender: 'm',
    victims: 2,
  },{
    name: 'Mr. Kitty',
    hair_color: 'black',
    eye_color: 'yellow',
    dob: new Date(1900, 4, 9, 3, 12),
    loves: ['control','power', 'cat nip'],
    location: 'Unknown',
    gender: 'm',
    victims: 1000
  }
];

// Vampire.insertMany(myVampires, (err, vampires) => {
//   if(err){ console.log(err); }
//   else{ console.log("Added new vampires: ", vampires);}
//   mongoose.connection.close();
// });

// 1. All vampires that are females
// Vampire.find({gender: "f"}, "name -_id", (err, vamps) => {
//   if(err){ console.log(err); }
//   else{ console.log(vamps); }
//   mongoose.connection.close();
// });

// 2. More than 500 victims
// Vampire.find( {victims: {$gt: 500} }, "name victims -_id", (err, vamps) => {
//   if(err){console.log(err);}
//   else{console.log(vamps);}
//   mongoose.connection.close();
// });

//3. Less than or equal to 150 victims
// Vampire.find( {victims: {$lte: 150}}, "name victims -_id", (err, vamps) => {
//   if(err){console.log(err);}
//   else{console.log(vamps);}
//   mongoose.connection.close();
// });

// 4. victim count not equal to 210234
// Vampire.find( {victims: {$ne: 210234}}, "name victims -_id", (err, vamps) => {
//   if(err){console.log(err);}
//   else{console.log(vamps);}
//   mongoose.connection.close();
// });

// 5. More than 150 and less than 500 victims
// Vampire.find( { $and: [ { victims: { $gt: 150 } }, { victims: { $lt: 500 } } ] }, "name victims -_id", (err, vamps) => {
//   if(err){console.log(err);}
//   else{console.log(vamps);}
//   mongoose.connection.close();
// });

// 1. Have a key of 'title'
// Vampire.find( { title: { $exists: true } }, (err, vamps) => {
//   if(err){console.log(err);}
//   else{console.log(vamps);}
//   db.close();
// });

// 2. Do no have key of 'victims'
// Vampire.find( { victims: { $exists: false } }, (err, vamps) => {
//   if(err){console.log(err);}
//   else{console.log(vamps);}
//   db.close();
// });

// 3. Have title AND no victims
const myTestVamp = {
    name: 'Jonk',
    hair_color: 'brown',
    eye_color: 'green',
    dob: new Date(1971, 2, 13, 7, 47),
    loves: ['Peaches','Videogames'],
    location: 'Dallas, Texas, US',
    gender: 'm',
    title: "King"
  };

// Vampire.create(myTestVamp, (err, vamp) => {
//   if(err){console.log(err);}
//   else{console.log("Added new vampire: ", vamp);}
//   db.close();
// })

// Vampire.find( {$and: [ { title: { $exists: true } }, { victims: 0} ] }, (err, vamps) => {
//   if(err){console.log(err);}
//   else{console.log(vamps);}
//   db.close();
// });

// 4. have victims and more than 1000 victims
// Vampire.find( { $and: [ { victims: { $exists: true } }, { victims: { $gt: 1000 } } ] }, "name victims -_id", (err, vamps) => {
//   if(err){console.log(err);}
//   else{console.log(vamps);}
//   db.close();
// });

// Vampire.remove();
// Vampire.find({}, (err, vamp) => { console.log(vamp); db.close();})
// db.close();
