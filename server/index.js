//App setup and imports
require("dotenv").config();
const { default: mongoose } = require("mongoose");
const { app } = require("./setup");
const morgan = require("morgan")
const express = require("express");

const { getUserIdFromToken } = require("./middleware/getUserFromToken");

const port = process.env.PORT;


const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'JSONPlaceholder',
      url: 'https://jsonplaceholder.typicode.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};



const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(morgan('tiny'));
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



app.use(getUserIdFromToken);

app.use("/api/users", require("./routes/users"));
app.use("/api/userProfiles", require("./routes/userProfiles"));

//Startup server and connect to database
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
