const express = require('express');
const mongoose = require('mongoose');
const {
  MONGO_USER,
  MONGO_PASS,
  MONGO_IP,
  MONGO_PORT,
} = require('./config/config');

// post router
const postRouter = require('./routes/postRoutes');

const app = express();

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h2>Hello There, express server!!!!</h2>');
});

app.use('/api/v1/posts', postRouter);

const PORT = process.env.PORT || 3200;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
