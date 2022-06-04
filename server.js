const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

const username = "harris";
const password = "ali";
const cluster = "cluster0.h8vsr";
const dbname = "myDB";



mongoose.connect(`mongodb+srv://harris:ali@cluster0.h8vsr.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});