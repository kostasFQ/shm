var bodyParser = require('body-parser');
const express = require('express');

require('./models/indexModels.js');

const shopsController = require('./controlers/shopsController.js');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/shops', shopsController.getAllShops);
app.post('/shops', shopsController.postNewShop);


app.use(function (req, res, next) {
    res.status(404).send('Page not found!!');
});
app.use(function (err, req, res, next) {
   res.status(500).json(err);
});

const server = app.listen(8080, ()=> {
   console.log('Server running on port 8080.');
});

