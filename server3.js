const express = require("express");
const axios = require("axios");
const app = express();
const port = 8080
var s1 = null
var s2 = null
app.use(express.json())

app.post("/sent-address/s1", (req, res) => {
  const data = { message: "Hello from server 3" };
  console.log(req.body)
  s1 = req.body.data
});

app.post("/sent-address/s2", (req, res) => {
  const data = { message: "Hello from server 3" };
  s2 = req.body.data;
});

app.get("/s1", (req, res) => {
  const data = { message: "Hello from server 3" };

  // Envoi de la donnée à server 1
  res.send("4567");
});

app.get("/s2", (req, res) => {
  const data = { message: "Hello from server 3" };

  // Envoi de la donnée à server 1
  res.send("5372");
});

app.listen(port, () => {
  console.log(`Server 1 listening on port ${port}`);
});
