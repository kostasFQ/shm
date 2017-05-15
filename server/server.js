var bodyParser = require('body-parser');
const express = require('express');
require('./models/index.js');

const shopControler = require('./controlers/shops.js');



const app = express();


app.use(bodyParser.json());


app.get('/shops', shopControler.getAllShops);

const server = app.listen(8080, ()=> {
   console.log('Server running on port 8080.');
});

