const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const db = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({
  secret: "sessionsesh",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: "auto", maxAge: null }
}))

const routes = require("./routes/api.js");
app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/index.html"));
});


db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});