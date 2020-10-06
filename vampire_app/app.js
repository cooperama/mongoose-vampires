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

// have a title property
// db.Vampire.find({title: {$exists: true}}, (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// });



// do not have a victims property
// db.Vampire.find({victims: {$exists: false}}, (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// });


// have a title AND no victims
// db.Vampire.find({
//   title: {$exists: true},
//   victims: {$exists: false}
//   },
//   (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// });


// have victims AND the victims they have are greater than 1000
// db.Vampire.find({
//   victims: {
//     $exists: true,
//     $gt: 1000
//   }},
//   (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// });



/////////////////////////////////////////////////
// ### Select with OR

// are from New York, New York, US or New Orleans, Louisiana, US
// db.Vampire.find({
//   $or: [
//     {location: 'New York, New York, US'},
//     {location: 'New Orleans, Louisiana, US'}
//   ]
//   },
//   (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// });

// love brooding or being tragic
// db.Vampire.find({
//   $or: [
//     {loves: 'brooding'},
//     {loves: 'being tragic'}
//   ]
//   },
//   (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// });

// have more than 1000 victims or love marshmallows
// db.Vampire.find({
//   $or: [
//     {victims: {$gt: 1000}},
//     {loves: 'marshmallows'}
//   ]
//   },
//   (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// });

// have red hair or green eyes
// db.Vampire.find({
//   $or: [
//     {hair_color: 'red'},
//     {eye_color: 'green'}
//   ]
//   },
//   (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// });


/////////////////////////////////////////////////
//### Select objects that match one of several values

// love either frilly shirtsleeves or frilly collars
// db.Vampire.find({
//   loves: {
//     $in: ['frilly shirtsleeves', 'frilly collars']
//   },
//   (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// });


// love brooding
// db.Vampire.find({loves: 'brooding'}, (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// });


// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// db.Vampire.find({
//   loves: {
//     $in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']
//   }
//   },
//   (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// });


// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
// db.Vampire.find({
//   loves: {
//     $in: ['fancy cloaks'],
//     $nin: ['top hats', 'virgin blood']
//   }
// }, (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// })


/////////////////////////////////////////////////
//### Negative Selection


// love ribbons but do not have brown eyes
// db.Vampire.find({
//   loves: 'ribbons',
//   eye_color: {
//     $ne: 'brown'
//   }
// }, (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// })



// are not from Rome
// db.Vampire.find({
//   location: {
//     $ne: 'Rome, Italy'
//   }
// }, (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// })



// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// db.Vampire.find({
//   loves: {
//       $nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}
// }, (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// })



// have not killed more than 200 people
// db.Vampire.find({
//   victims: {
//     $lt: 200
//   }
// }, (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// })




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

// Replace the vampire called 'Claudia' with a vampire called 'Eve'.

// db.Vampire.replaceOne(
//   {name: 'Claudia'},
//   {name: 'Eve'},
//   (err, claudiaToEve) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(claudiaToEve);
//     }
//     process.exit();
// })




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE



// Update 'Eve' to have a gender of 'm'

// db.Vampire.findOneAndUpdate(
//   {name: 'Eve'},
//   {gender: 'm'}, 
//   {new: true},
//   (err, vamp) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vamp);
//     }
//     process.exit();
// })


// Rename 'Eve's' name field to 'moniker'

// db.Vampire.update(
//   {name: 'Eve'},
//   {$rename: {name: 'moniker'}},
//   {new: true},
//   (err, vamp) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vamp);
//     }
//     process.exit();
// })


// We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".

// db.Vampire.updateMany(
//   {gender: 'f'},
//   {gender: 'fems'},
//   (err, vamps) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamps);
//   }
//   process.exit();
// })



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

// Remove a single document wherein the hair_color is 'brown'

// ------------ So I tried the below... and it removed all vampires with brown hair instead of just one...

// db.Vampire.remove(
//   {hair_color: 'brown'},
//   {justOne: true},
//   (err, vamps) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vamps);
//     }
//     process.exit();
//   }
// )

// ------------ adding them back in to use a different method..

// db.Vampire.insertMany([
//   {
//     name: 'Count Chocula',
//     hair_color: 'brown',
//     eye_color: 'brown',
//     dob: new Date(1971, 2, 13, 7, 47),
//     loves: ['cereal','marshmallows'],
//     location: 'Minneapolis, Minnesota, US',
//     gender: 'm',
//     victims: 2
//   },{
//     name: 'Dracula',
//     dob: new Date(937, 0, 24, 13, 0),
//     hair_color: 'brown',
//     eye_color: 'blue',
//     loves: ['Winona Ryder', 'top hats', 'fancy cloaks', 'handlebar   mustaches'],
//     location: 'Transylvania, Romania',
//     gender: 'm',
//     victims: 1238
//   },{
//     name: 'Elizabeth Bathory ',
//     dob: new Date(1560, 8, 7, 22, 10),
//     hair_color: 'brown',
//     eye_color: 'brown',
//     loves: ['virgin blood', 'fancy cloaks','frilly collars'],
//     location: 'Nyírbátor, Hungary',
//     gender: 'f',
//     victims: 980
//   },{
//     name: 'Louis de Pointe du Lac',
//     dob: new Date(1766, 6, 4, 2, 1),
//     hair_color: 'brown',
//     eye_color: 'blue',
//     loves:['brooding', 'Claudia', 'staring longingly into the   distance'],
//     location: 'New Orleans, Louisiana, US',
//     gender:'m',
//     victims: 150
//   },{
//     name:'Santino',
//     dob: new Date(1465, 6, 1, 10, 42),
//     hair_color: 'brown',
//     eye_color: 'brown',
//     loves: ['trickery', 'vampiric cults', 'fancy cloaks'],
//     location: 'Rome, Italy',
//     gender: 'm',
//     victims: 1103
//   },{
//     name:'Akasha',
//     dob: new Date(-8000, 6, 1, 10, 42),
//     hair_color: 'brown',
//     eye_color: 'green',
//     loves: ['eating hearts', 'bathing in roses', 'elaborate   headdresses', 'R&B music'],
//     location: 'Kemet, Egypt',
//     gender: 'f',
//     victims: 210234,
//     title: 'Queen of the Damned'
//   },{
//     name: 'Edward Cullen',
//     dob: new Date(1901, 6, 20, 0, 57),
//     hair_color: 'brown',
//     eye_color: 'brown',
//     loves: ['brooding', 'diamond skin', 'calling people spider   monkeys'],
//     location: 'Chicago, Illinois, US',
//     gender: 'm',
//   },{
//     name: 'René Tremblay',
//     dob: new Date(1922, 2, 8, 5, 3),
//     hair_color: 'brown',
//     eye_color: 'green',
//     loves: ['frilly shirtsleeves', 'trickery', 'card games'],
//     location: 'Bucharest, Romania',
//     gender: 'm',
//     victims: 134
//   },{
//     name: 'Barnabas Spenser',
//     hair_color: 'brown',
//     eye_color: 'brown',
//     dob: new Date(1984, 6, 3, 13, 12),
//     loves: ['being merry', 'being insane', 'card games'],
//     location: 'New York, New York, US',
//     gender: 'm',
//     title: 'Osiris of Sewer Rats'
//   }
// ], 
//   (err, vamps) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vamps);
//     }
//     process.exit();
// })

// db.Vampire.deleteOne({hair_color: 'brown'}, (err, vamp) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(vamp);
//   }
//   process.exit();
// })



// We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.


// db.Vampire.deleteMany({eye_color: 'blue'}, (err, vamps) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vamps);
//     }
//     process.exit();
//   })


// db.Vampire.find({}, (err, vamps) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(vamps);
//     }
//     process.exit();
//   })

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////


// Make an index route that will res.send() (or even better--res.json()--look it up!) the json of all the data in our database.





// If number 1 was easy, try to connect your database to your application and show a proper index page that displays your vampire data. If this is also easy, create a show page as well where you are showing individual vampire data.