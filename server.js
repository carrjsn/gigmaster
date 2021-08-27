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
  console.log('post req.data', req.body)
  addMusician(req.body, (err, data) => {
    if (err) {
      console.log('gig err', err);
      res.sendStatus(400);
    } else {
      console.log('data', data)
      res.sendStatus(200);
    }
  });

});

app.post('/giginfo', (req, res) => {
  // get musicians that match criteria
  // console.log('gig req body', req.body);
  findMusicians(req.body, (err, data) => {
    if (err) {
      console.log('err', err)
      res.sendStatus(400);
    } else {
      console.log('data in server', data);
      res.status(200);
      res.send(data);
    }
  });
});


const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});