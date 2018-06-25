const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Enter two numbers in the URL to math it up!");
})

// app.get("/:num1/:num2", (req, res) => {
//   res.send(`Sum of numbers is ${parseFloat(req.params.num1) + parseFloat(req.params.num2)}`);
// });

app.get("/:num1/:num2", (req, res) => {
  switch(req.query.operation){
    case "sub": res.send(`The difference is ${parseFloat(req.params.num1) - parseFloat(req.params.num2)}`);
          break;
    case "div": res.send(`The division is ${parseFloat(req.params.num1) / parseFloat(req.params.num2)}`);
          break;
    case "mul": res.send(`The multiply is ${parseFloat(req.params.num1) * parseFloat(req.params.num2)}`);
          break;
    default: res.send(`Sum of numbers is ${parseFloat(req.params.num1) + parseFloat(req.params.num2)}`);
  }
});

app.listen(port, () => {
  console.log("App is running on port " + port);
})
