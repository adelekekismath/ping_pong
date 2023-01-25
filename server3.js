const express = require("express");
const axios = require("axios");
const app = express();
const port = 8080
const s1 = 4567
const s2 = 5372

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
