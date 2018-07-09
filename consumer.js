const express = require("express");
const logger = require("morgan");

var app = express();

app.use(logger("short"));

app.get("/", (req, res) => {
  res.send("Get request");
});

app.post("/subscribe", (req, res) => {
  res.send("POST request");
});

app.listen(3000, ()=>{
  console.log("App is listening on port 3000");
});
