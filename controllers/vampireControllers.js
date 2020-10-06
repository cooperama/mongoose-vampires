const express = require('express');
const router = express.Router();

const db = require('../vampire_app/models')

// ------------ INDEX

router.get('/', (req, res) => {
  db.Vampire.find({}, (err, allVamps) => {
    if (err) return console.log(err);
    res.render('vampires/indexVampires', {
      vampires: allVamps
    })
  })
})


// ------------ SHOW


router.get('/:vampireId', (req, res) => {
  db.Vampire.findById(req.params.vampireId, (err, foundVamp) => {
    if (err) return console.log(err);
    res.render('vampires/showVampires', {
      vampire: foundVamp
    });
  })
})


module.exports = router;