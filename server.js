const express = require('express');

const PORT = 3001;
const reviews = require('./db/db.json');

const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));





// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});