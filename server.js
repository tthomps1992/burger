let express = require("express");

let PORT = process.env.PORT || 8000;
let app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgersController.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("Listening on port:%s", PORT);
});