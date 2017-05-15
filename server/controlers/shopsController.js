const mongoose = require('mongoose');
const Shop = mongoose.model('Shop');

exports.getAllShops = (req, res)=> {
    Shop.find({}, function (err, data) {
        if(err) return console.log(err);
        res.json(data);
    })
};
