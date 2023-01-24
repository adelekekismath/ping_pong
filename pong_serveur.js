const express = require("express");
const request = require("request");
const axios = require("axios");
const app = express();
const port = 5372;

axios.post("http://localhost:4567/send-data", { data: "Ping" });
app.post("/send-data", (req, res) => {
  // Envoi de la donnée à server 2
  res.send("Ping");
  console.log("Ping");
  axios.post("http://localhost:4567/send-data", { data: "Ping" });
});

app.listen(port, () => {
  console.log(`Server 2 listening at http://localhost:${port}`);
});
