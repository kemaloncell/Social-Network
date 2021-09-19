const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log('Connected to MongoDB');
});

//Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('welcome to home page');
});
app.get('/users', (req, res) => {
  res.send('welcome to users page');
});

const port = 3000;
app.listen(port, () => {
  console.log(`port ${port} is running!`);
});
