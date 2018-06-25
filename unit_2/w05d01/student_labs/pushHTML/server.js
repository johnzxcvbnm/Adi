const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("I am listening on port 3000");
});

app.get("/", (request, response) => {
  response.send(`
  <html>
    <body>
      <h1>YOLO FOOLS!</h1>
    </body>
  </html>
  `);

});
