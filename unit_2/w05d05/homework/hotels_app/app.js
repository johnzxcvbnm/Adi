//Dependencies
const mongoose = require('mongoose');
const Hotel = require("./models/hotel.js");
const hotelSeed = require("./models/seed.js");

// Connect
const mongoURI = 'mongodb://localhost:27017/' + 'hotel';
mongoose.connect(mongoURI);

// Error / success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// db.on( 'open' , ()=>{
//   console.log('Connection made!');
//
//   Hotel.create( hotelSeed, (err, data) => {
//     if(err){console.log(err);}
//     else{ console.log("Added hotel data", data);}
//     db.close();
//   });
//
// });

//Test Connection
// setTimeout(()=>{db.close()}, 5000);

//Test data Creation - 12 count is success
// Hotel.count( {}, (err, data) => {
//   if(err){ console.log(err.message );}
//   console.log(`There are ${data} hotels in this database`);
//   db.close();
// })

//--------- C -----------//
// Create a hotel using the above schema
// add your mongoose command inside app.js. Once it works, comment it out.
// There should now be 13 hotels in the database.

const myHotel =   {
    "name": "Hotel Kaboom",
    "location": "Texas",
    "rating": 3,
    "vacancies": true,
    "rooms": [
      {
        "roomNumber": 101,
        "size": "Queen Double",
        "price": 55,
        "booked": true
      },
      {
        "roomNumber": 202,
        "size": "King Suite",
        "price": 68,
        "booked": false
      },
      {
        "roomNumber": 404,
        "size": "Queen Double",
        "booked": false
      },
      {
        "roomNumber": 605,
        "size": "King Suite",
        "price": 68,
        "booked": true
      },
      {
        "roomNumber": 777,
        "size": "Penthouse",
        "price": 888,
        "booked": false
      }
    ],
    "tags": [
      "blast",
      "drinks",
      "lovely",
      "please stay"
    ]
  };


// Hotel.create( myHotel, (err, hotel) => {
//   if(err){ console.log(err); }
//   else{ console.log(hotel); }
//   db.close();
// });

// Hotel.count( {}, (err, hotel) => {
//   if(err){console.log(err);}
//   else{console.log(`You have ${hotel} hotels in the DB`);}
//   db.close();
// });

//-------------- R ----------------//
// with each prompt, complete it, then comment it out
// let's find all our hotels and console.log them
// find all the hotels but only return the hotel name and console.log them
// find just your hotel using a search parameter that would only match your hotel
// find all the hotels that have vacancies, also exclude ratings.

// Hotel.find( {}, (err, hotels) => {
//   if(err){console.log(err);}
//   else{console.log(hotels);}
//   db.close();
// });

// Hotel.find( {}, "name -_id", (err, hotels) => {
//   if(err){console.log(err);}
//   else{console.log(hotels);}
//   db.close();
// });

// Hotel.find( { name: "Hotel Kaboom" }, (err, hotel) => {
//   if(err){console.log(err);}
//   else{console.log(hotel);}
//   db.close();
// });

// Hotel.find( { vacancies: true }, "-rating", (err, hotels) => {
//   if(err){console.log(err);}
//   else{console.log(hotels);}
//   db.close();
// });

//--------------- D-------------------//
// turns out Hotelicopter was an April Fool's prank! Let's delete that one from our database
// Hilbert's Hotel is getting terrible ratings all it does is give everyone headaches and no room service. Let's just remove that one as well
// The hotel in the Colorado Rockies has been closed for undisclosed reasons. Delete this hotel too

// Hotel.findOneAndRemove( { name: "Hotelicopter" }, (err, hotel) => {
//   if(err){console.log(err);}
//   else{console.log(`Deleted Hotel: ${hotel}`);}
//   db.close();
// });

// Hotel.findOneAndRemove( { name: "Hilbert's Hotel" }, (err, hotel) => {
//   if(err){console.log(err);}
//   else{console.log(`Deleted Hotel: ${hotel}`);}
//   db.close();
// });

// Hotel.findOneAndRemove( { location: "Colorado Rockies" }, (err, hotel) => {
//   if(err){console.log(err);}
//   else{console.log(`Deleted Hotel: ${hotel}`);}
//   db.close();
// });

//---------------- U -----------//
// Note be sure to console log the updated document (hint
//
// The Great Northern's rating is only a 3! Update that to be a 5
// Motel Bambi is now fully booked, change the vacancies to false
// Things are on the decline for the Motel in 'White Bay, Oregon', change the rating to 2

// Hotel.findOneAndUpdate( { name: "The Great Northern" }, { rating: 5 }, { new: true }, (err, hotel) => {
//   if(err){console.log(err);}
//   else{console.log(`Updated hotel: ${hotel}`);}
//   db.close();
// });

// Hotel.findOneAndUpdate( { name: "Motel Bambi" }, { vacancies: false }, { new: true }, (err, hotel) => {
//   if(err){console.log(err);}
//   else{console.log(`Updated Hotel ${hotel}`);}
//   db.close();
// });

// Hotel.findOneAndUpdate( { location: "White Bay, Oregon" }, { rating: 2 }, { new: true }, (err, hotel) => {
//   if(err){console.log(err);}
//   else{console.log(`Updated Hotel: ${hotel}`);}
//   db.close();
// });
