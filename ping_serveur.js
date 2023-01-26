const express = require("express");
const axios = require("axios")
const app = express();
const registry = process.env.REGISTRY || "http://localhost:8080";
const address = process.env.ADDRESS || "http://localhost";
const port = parseInt(process.env.PORT) || 4567;


axios.post(registry+"/sent-address/s1", { data: "4567" });

app.post("/send-data", (req, res) => {
  const data = { message: "Hello from server 1" };
  // Envoi de la donnée à server 2
  res.send("Pong");
  console.log("Pong");
  axios.get(registry + "/s2").then((port) => {
    axios.post(address + port.data + "/send-data", {
      data: "Pong",
    });
  });
  
});

app.listen(port, () => {
  console.log(`Server 1 listening on port ${port}`);
});
