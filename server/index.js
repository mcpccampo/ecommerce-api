const express = require('express');
const ctr = require('./controller');
const port = 3050;

// create server
const app = express();

// use json
app.use(express.json());

// start server
app.listen(port, () => {
  console.clear();
  console.log(`App listening on port ${port}!`);
});
