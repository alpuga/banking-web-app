const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db configuration
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect(
  db,
  { useNewUrlParser: true },
  (err, db) => {
    if (err) {
      console.log("Database error: " + err);
    } else {
      console.log("Successful database connection");
    }
  }
);

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

//routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server running on port: " + port);
});
