const express = require("express");
const request = require("request");
const axios = require("axios");
const app = express();
const registry = process.env.REGISTRY || "http://localhost:8080";
const address = process.env.ADDRESS || "http://localhost";
const port = parseInt(process.env.PORT) || 5372;


axios.post(registry+"/sent-address/s2", { data: "5372" });

axios.get(registry+"/s1").then((port) => {
   console.log(port.data);
  axios.post(address + port.data + "/send-data", { data: "Ping" });
});

  app.post("/send-data", (req, res) => {
    // Envoi de la donnée à server 2
    res.send("Ping");
    console.log("Ping");
    axios.get(registry+"/s1").then((port) => {
     
      axios.post(address + port.data + "/send-data", {
        data: "Ping",
      });
    });
  });

app.listen(port, () => {
  console.log(`Server 2 listening at http://localhost:${port}`);
});
