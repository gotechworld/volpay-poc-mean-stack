const express = require('express');

const { MongoClient } = require("mongodb");

const { PORT = 3000, MONGO_URL } = process.env;

const client = new MongoClient(MONGO_URL);

const app = express();

app.get("/", (req, res) => {
    res.send("Uma and Hari, thank you for this short journey! Farewell, folks!");
});

client.connect().then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});