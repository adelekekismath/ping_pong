const express = require("express");
const axios = require("axios")
const app = express();
const port = 4567;

app.post("/send-data", (req, res) => {
  const data = { message: "Hello from server 1" };

  // Envoi de la donnée à server 2
  res.send("Pong");
   console.log("Pong");
  axios.post("http://localhost:5372/send-data", { data: "Pong" });
});

app.listen(port, () => {
  console.log(`Server 1 listening on port ${port}`);
});
