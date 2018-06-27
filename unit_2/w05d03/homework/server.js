const express = require("express");
const app = express();
const port = 3000;

app.use( express.static( "public" ) );
app.use( express.urlencoded( {extended:false} ) );

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
