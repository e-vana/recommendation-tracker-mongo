//@@ App setup and imports
require("dotenv").config();
const { default: mongoose } = require("mongoose");
const { app } = require("./setup");
const port = process.env.PORT;
const morgan = require("morgan");
const express = require("express");

//@@ Use Middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/api/users", require("./routes/users"));
app.use("/api/userProfiles", require("./routes/userProfiles"));
app.use("/api/letters", require("./routes/letters"));

//@@ Startup server and connect to database
app.listen(port, async () => {
  try {
    console.log("Connecting to database...");
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
    console.log(`Connected to database @ ${Date.now()}`);
    console.log(`Server started on PORT:${process.env.port}`);
  } catch (error) {
    console.log(error);
  }
});
