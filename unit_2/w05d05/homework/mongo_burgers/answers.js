// create 5 burgers (at least 3 should be beef)
db.burger.insert({
    meat: 'beef',
    cheese: false,
    toppings: ['ketchup' ,'onions' ,'pickles']
  })

db.burger.insert({
  meat: "beef",
  cheese: true,
  toppings: []
})

db.burger.insert({
  meat: "beef",
  cheese: true,
  toppings: ["bacon", "bbq sauce", "onion", "pickles"]
})

db.burger.insert({
  meat: "chicken",
  cheese: false,
  toppings: ["lettuce", "tomato", "ranch"]
})

db.burger.insert({
  meat: "fish",
  cheese: false,
  toppings: ["hot sauce", "pickles"]
})

// find all the burgers
db.burger.find()

// show just the meat of each burger
db.burger.find( {}, {meat: 1, _id: 0})

// show just the toppings of each burger
db.burger.find( {}, {toppings: 1, _id: 0})

// show everything but the cheese
db.burger.find( {}, {meat: 1, toppings: 1})

// find all the burgers with beef
db.burger.find( {meat: "beef"})

// find all the burgers that are not beef
db.burger.find( {meat: {$ne: "beef"} })

// find the first burger with cheese
db.burger.findOne( {cheese: true} )

// find one and update the first burger with cheese to have a property of 'double cheese'
db.burger.update( {cheese: true}, {$set: {doubleCheese: true} })

// find the burger you updated to have double cheese
db.burger.find( {doubleCheese: true} )

// find and update all the beef burgers to be 'veggie'
db.burger.updateMany( {meat: "beef"}, {$set: {meat: "veggie"} } )
//Cruel Joke

// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})
db.burger.remove( {meat: "veggie"}, {justOne: true} )


// drop the collection
db.burger.drop()
//Expected Output
//true

// drop the database
db.dropDatabase()
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }


//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database


//
// Change the name of the key cheese to 'pumpkinSpice'
db.burger.updateMany( {}, {$rename: {cheese: "pumpkinSpice"} } )

// find all the burgers with ketchup (or another topping you used at least once)
db.burger.find( { toppings: {$in: ["ketchup"] } } )


// find all the burgers with pickles (or a topping you used more than once) and remove the pickles
db.burger.updateMany( {}, { $pull: { toppings: {$in: ["pickles"] } } }, {multi: true} )

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact
db.burger.updateMany( {meat: "beef"}, { $push: {toppings: "eggs" } }, {multi: true} )

//Add a price to each burger, start with $5.00 for each burger
db.burger.updateMany( {}, { $set: { price: 5.75 } }, { multi: true } )
