require('dotenv').config();

const { MongoClient } = require('mongodb');
const express = require('express');

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CLUSTER = process.env.DB_CLUSTER;
const DB_NAME = process.env.DB_NAME;

const PORT = process.env.PORT || 3000;

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.1thyt.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) throw err;
  // const collection = client.db(DB_NAME).collection('sample_airbnb.listingsAndReviews');
  client.close();
});

const app = express();

app.get('/ping', (req, res) => res.json({ ping: 'pong' }));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
