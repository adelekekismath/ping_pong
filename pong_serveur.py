const express = require('express');
const app = express();
const port = 3000;

app.get('/send-data', (req, res) => {
    const data = { message: "Hello from server 1" };

    // Envoi de la donnée à server 2
    request.post({
        url: 'http://localhost:3001/receive-data',
        form: data
    }, (err, httpResponse, body) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error communicating with server 2');
        } else {
            console.log(body);
            res.send('Data sent to server 2');
        }
    });
});

app.listen(port, () => {
    console.log(`Server 1 listening on port ${port}`);
});
