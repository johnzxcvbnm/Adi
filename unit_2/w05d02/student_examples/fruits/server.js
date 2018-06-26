
const express = require("express");
const app = express();
const port = 3000;

const fruits = require("./models/fruits.js");
// const fruits = ['apple', 'banana', 'pear'];

// console.log("!!!!!");
// console.log(fruits);
// console.log("!!!!!!");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (request, response) => {
  response.send("Left blank");
});

app.get("/fruits", (req, res) => {
  res.render("list.ejs", {
      fruit: fruits
    });
  // res.send(fruits);
});

app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  res.render("show.ejs", {
      fruit: fruits[req.params.indexOfFruitsArray]
    });
});

  // const myFruit = fruits[req.params.indexOfFruitsArray];
  // const myOutput = `<html>
  //                     <body>
  //                       <p><u><b>Name:</b></u> ${myFruit.name}</p>
  //                       <p><u><b>Color:</b></u> ${myFruit.color}</p>
  //                       <p><u><b>Ready to Eat:</b></u> ${myFruit.readyToEat}</p>
  //                     </body>
  //                   </html>`
  // res.send(myOutput);
// });
