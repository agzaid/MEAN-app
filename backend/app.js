const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();

mongoose
  .connect('mongodb+srv://ag:Q1YrO0jTRMoX0VHk@cluster0.xudtg.mongodb.net/<dbname>?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to Database');
  }).catch(() => {
    console.log('Connection Failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("images")));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers',
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
  res.setHeader('Access-Control-Allow-Methods',
    "GET, POST, PATCH, PUT,DELETE, OPTIONS");
  next();

});

//Q1YrO0jTRMoX0VHk

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

module.exports = app;