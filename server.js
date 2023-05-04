const express = require("express");

const port = 2206;
const app = express();

app.get("/", (req, res) => {
  res.send("Welcom to Nodejs");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
