const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

require('./models/indexModels.js');

const shopsController = require('./controlers/shopsController.js');

const app = express();
app.use(cors());
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

const server = app.listen(process.env.PORT || 8080, () => {
    console.log('Server running on port ',process.env.PORT || 8080 )
});


