// 1. Require Mongoose
const mongoose = require('mongoose');

// 2. Require your Model
const Vampire = require('./models/Vampire');

// 3. Require your extra data source
const vampireObjects = require('./populateVampires');

// 4. Connect your database
const db = require('./models');

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.collection.insertMany(vampireObjects, (error, vampData) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(vampData);
//   }
//   mongoose.connection.close();
// })


// ### Add some new vampire data
// db.Vampire.create({
//   name: 'Viago',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1641, 7, 15),
//   loves: ['Katherine', 'cleanliness'],
//   location: 'New Zealand',
//   gender: 'male',
//   victims: 642
// }, (error, newVamp) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(newVamp);
//   }
//   process.exit();
// })

// db.Vampire.create({
//   name: 'Nadja',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1447, 3, 22),
//   loves: ['Laszlo', 'orgies'],
//   location: 'Staten Island',
//   gender: 'female',
//   victims: 1076
// }, (error, newVamp) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(newVamp);
//   }
//   process.exit();
// })

// db.Vampire.create({
//   name: 'Vladislav',
//   hair_color: 'brown',
//   eye_color: 'brown',
//   dob: new Date(1202, 9, 9),
//   loves: ['ladies', 'poking'],
//   location: 'New Zealand',
//   gender: 'male',
//   victims: 1846
// }, (error, newVamp) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(newVamp);
//   }
//   process.exit();
// })


// db.Vampire.create({
//   name: 'Colin Robinson',
//   hair_color: 'bald',
//   eye_color: 'blue',
//   dob: new Date(1978, 5, 12),
//   loves: ['raining on parades', 'the DMV'],
//   location: 'Staten Island',
//   gender: 'male',
//   victims: 642
// }, (error, newVamp) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(newVamp);
//   }
//   process.exit();
// })


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

// Find all the vampires that that are females
// db.Vampire.find({gender: 'f'}, (err, femaleVamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(femaleVamps);
//   }
//   process.exit();
// });


// have greater than 500 victims
// db.Vampire.find({victims: {$gt: 500}}, (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// });


// have fewer than or equal to 150 victims
// db.Vampire.find({victims: {$lte: 150}}, (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// });


// have a victim count is not equal to 210234
// db.Vampire.find({victims: {$ne: 210234}}, (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// });


// have greater than 150 AND fewer than 500 victims
// db.Vampire.find({
//   victims: 
//     {
//       $gt: 150,
//       $lt: 500
//     }},
//   (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// });


/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
