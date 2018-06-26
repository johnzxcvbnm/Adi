// run `npm i` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * Make it so you can click on a mission’s name on the index page, and be taken to that mission’s show page
// * Bonus: add images to the data and have them display
// * Bonus: add static css to style the pages

// NOTES:
// ejs has not been installed - install it!
// views folder has not been created - create it!
// views/missions folder has not been created create it!

// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server

// INDEX Route
// send data to 'missions/index.ejs' view
// the view should display just the names of each mission
// Stretch: the names should provide a link to the show page

// SHOW Route
// send data to 'missions/show.ejs' view
// the view should display all the data for a single mission
// the view should have a link back to the index
// Stretch: display the image inside an image tag


// DEPENDENCIES
const express = require('express');
const app = express();
const marsMissions = require("./models/mission.js");


// PORT
const port = 3000;

// LISTENER
app.listen(port, ()=> {
  console.log('Missions to Mars running on port: ', port);
})

app.get("/", (req, res) => {
  res.send("Left Blank");
  // res.render("index.ejs", {
  //   mission: marsMissions
  // });
});

app.get("/missions", (req, res) => {
  res.render("index.ejs", {
    mission: marsMissions
  });
});

app.get("/missions/:index", (req, res) => {
  res.render("show.ejs", {
    mission: marsMissions[req.params.index]
  });
});
