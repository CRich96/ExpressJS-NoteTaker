const express = require('express');

const PORT = 3001;
const reviews = require('./db/db.json');

const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


require("./routes/html-routes")(app);
require("./routes/api-routes")(app);


// Starts the server to begin listening
app.listen(process.env.PORT, function() {
    console.log("App listening on PORT " + PORT);
});