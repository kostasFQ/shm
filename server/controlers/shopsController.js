const mongoose = require('mongoose');
const Shop = mongoose.model('Shop');

exports.getAllShops = (req, res)=> {
    Shop.find({}, (err, data) => {
        if(err) return console.log(err);
        res.json(data);
    })
};

exports.postNewShop = (req, res) => {
    const data = req.body;
    const newShop = new Shop({
        shop : data.shop,
        address : {
            district : data.address.district,
            street : data.address.street,
            building: data.address.building,
            latitude : data.address.latitude,
            longitude : data.address.longitude
        },
        additionalOptions : data.additionalOptions,
        Mo_Fr : {
            status : data.Mo_Fr.status,
            startTime : data.Mo_Fr.startTime,
            endTime : data.Mo_Fr.endTime
        },
        saturday : {
            status : data.saturday.status,
            startTime : data.saturday.startTime,
            endTime : data.saturday.endTime
        },
        sunday : {
            status : data.sunday.status,
            startTime : data.sunday.startTime,
            endTime : data.sunday.endTime
        }

    });
    return newShop.save();
};
