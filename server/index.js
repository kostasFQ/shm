const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const cors = require('cors');
const flash = require('connect-flash');
const session = require('express-session');
require('./models/indexModels.js');

const shopsRouter = require('./routes/shops');
const usersRouter = require('./routes/users');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use( session({
  cookie: { maxAge: 60000 },
  secret: 'secret',
  saveUninitialized: false,
  resave: false
}));
app.use(flash());

app.use('/shops', shopsRouter);
app.use('/user', usersRouter);
app.get('*', (req, res) => { res.sendFile( path.resolve( __dirname, '../public', 'index.html' ) ); } );


app.use((req, res) => {
  res.status(404).send('Page not found!!');
});

app.use((err, req, res) => {
  res.status(500).json(err);
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running on port ', process.env.PORT || 8080);
});
