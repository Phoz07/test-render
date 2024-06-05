const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Node");
});

app.get("/about", (req, res) => {
  res.send("Hello About Page");
});

app.get("/products", (req, res) => {
  res.send("Hello Product Page");
});

app.listen(8000, () => {
  console.log("Server is running");
});
