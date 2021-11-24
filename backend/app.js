const express = require('express');

const app = express();

app.use((req, res) => {
  console.log('Frist middleware');
  next();
});

app.use((req, res) => {
  res.send('Hello from express!');
});

module.exports = app;
