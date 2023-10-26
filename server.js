const express = require("express")
const bodyParser = require("body-parser");
const dbConnect = require("./config/db_config");

// create express app
const app = express()

// setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// parse requests of content-type - application/json
app.use(bodyParser.json())


// define a root quote
app.get("/", (req, res) => {
    res.send("Hello world");
})

// Require employee routes
const employeeRoutes = require("./src/routes/routes")

// Using as middleware
app.use("/api/v1/employees", employeeRoutes)

// listen for requests
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
