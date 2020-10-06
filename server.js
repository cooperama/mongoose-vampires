// ------------ CONFIG
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const PORT = 4000;

const vampireCtrl = require('./controllers/vampireControllers');

app.set('view engine', 'ejs');

// ------------ MIDDLEWARE

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

// ------------ ROUTES

app.get('/', (req, res) => {
  res.render('index');
})

app.use('/vampires', vampireCtrl);

// ------------ LISTENER
app.listen(PORT, () => console.log('Listening on port: ', PORT));