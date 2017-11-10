// Initialize variables
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;


//add body parser functions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//connect other js files
require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
