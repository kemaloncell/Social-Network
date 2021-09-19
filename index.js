const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
  console.log('Connected to MongoDB');
});

//Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

userRouter.get('/', (req, res) => {
  res.send('hey its user route');
});
authRouter.get('/', (req, res) => {
  res.send('hey its auth route');
});

const port = 3000;
app.listen(port, () => {
  console.log(`port ${port} is running!`);
});
