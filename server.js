const express = require("express")
const bodyParser = require("body-parser");

// create express app
const app = express()

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root quote
app.get("/", (req, res) => {
    res.send("Hello world");
})

// setup server port
const port = process.env.PORT || 5000;

// listen for requests
app.listen(port, () => `Server running on port ${port} 🔥`);
