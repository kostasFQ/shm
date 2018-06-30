const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');


require('./models/indexModels.js');

const shopsController = require('./controlers/shopsController.js');
const userController = require('./controlers/userController');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/shops', shopsController.getAllShops);
app.post('/shops', shopsController.postNewShop);

app.get('/user', userController.getUsers);
// app.post('/sign', userController.addNewUser);

app.use((req, res) => {
  res.status(404).send('Page not found!!');
});

app.use((err, req, res) => {
  res.status(500).json(err);
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running on port ', process.env.PORT || 8080);
});
