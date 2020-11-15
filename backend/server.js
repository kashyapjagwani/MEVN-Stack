const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')

const items = require('./routes/api/items');
const orders = require('./routes/api/orders');

const app = express();

// Boody Parser middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to DB
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected')
  })
  .catch((err) => {
    console.log(err)
  });

// Use Routes
app.use('/api/items', items)
app.use('/api/orders', orders)

// PORT
const port = process.env.PORT || 5000;

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('../dist'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('..', 'dist', 'index.html'))
  })
}
app.listen(port, () => {
  console.log(`Server started on ${port}`)
});
