const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const passport = require("passport")

mongoose
  .connect(db, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());
require("./passport")
app.use(passport.initialize());

app.use("/api/cities", require("./routes/cities"));
app.use('/api/users',require("./routes/users"));


app.listen(port, () => {
  console.log("Server is running on " + port + "port");
});
