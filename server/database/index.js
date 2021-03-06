const mongoose = require('mongoose');
const { User, Park, Event } = require('./models');

const name = 'trailzDb';
const url = `mongodb://localhost:27017/${name}`;
const uri = `mongodb+srv://DavidSosa20:${process.env.DATABASE_PASSWORD}@cluster0.z2svn.mongodb.net/trailzDb?retryWrites=true&w=majority`;

// const database = mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('successfully connected to trailz database'))
//   .catch((err) => {
//     console.log('unsuccessfully connected to trailz database');
//     console.log(err);
//   });

const database = mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
// eslint-disable-next-line no-console
  .then(() => console.log('connected to db'))
  .catch();

module.exports = {
  database,
  User,
  Park,
  Event,
};

////database is running on mongo atlas now