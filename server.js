const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const favicon = require("express-favicon");

const users = require("./routes/api/users");
const plaid = require("./routes/api/plaid");

const app = express();

// Express favicon
app.use(favicon(__dirname + "/client/public/favicon.ico"));

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

const port = process.env.PORT || 5000;

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

//routes
app.use("/api/users", users);
app.use("/api/plaid", plaid);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Server running on port: " + port);
});
