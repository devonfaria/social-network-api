// Importing modules
const express = require('express');
const { User, Thought, Reaction } = require('./models');
const utils = require('./utils');
const routes = require('./routes');
const db = require('./config/connection');

// Setting up Express PORT
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
});