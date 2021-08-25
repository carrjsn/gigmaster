const express = require('express');
const app = express();

// connect to client
app.use(express.static('public'))

// routes


const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});