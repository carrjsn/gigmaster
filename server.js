const express = require('express');
const { findMusicians, addMusician } = require('./models.js');
const bodyParser = require('body-parser');
const app = express();

// connect to client
app.use(express.static('public'));

app.use(bodyParser.json());

// routes
app.post('/musicians', (req, res) => {
  // add musician to database
  console.log('req.body', req.body);

});

app.post('/giginfo', (req, res) => {
  // get musicians that match criteria
  console.log('post req.data', req.body)
});


const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});