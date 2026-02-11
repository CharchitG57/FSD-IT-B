const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const FILE = 'data.txt';

/* WRITE */
app.post('/write', (req, res) => {
    const text = req.body.text;

    fs.writeFile(FILE, text, (err) => {
        if (err) return res.send("Error writing file");
        res.send("File written successfully");
    });
});

/* READ */
app.get('/read', (req, res) => {
    fs.readFile(FILE, 'utf8', (err, data) => {
        if (err) return res.send("File empty");
        res.send(data);
    });
});

app.listen(5000, () => console.log("Server running at 5000"));
