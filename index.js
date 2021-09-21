const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology:true }, () => {
  console.log('Connected to MongoDB');
});

//Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRouter); //the type of path you want to appear in the url
app.use('/api/auth', authRouter);

const port = 7000;
 app.listen(port, () => {
  console.log(`port ${port} is running!`);
});
