const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/vampires';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log("MongoDB successfully connected ~~~");
});

mongoose.connection.on('error', (error) => {
  console.log('MongoDB connection error: ', error);
});


module.exports = {
  Vampire: require('./Vampire')
}; 