const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ShopSchema = new Schema({
    shopName : {type : String, required: true},
    city : {type : String, required: true},
    district : {type : String, required: true},
    street : {type : String, required: true},
    building : {type : Number, required : true},
    latitude : {type : Number, required: true},
    longitude : {type : Number, required: true},
    workTimeStart : {type: Number, required: true},
    workTimeEnd : {type: Number, required: true},
    dayOff : {type : String, required: true}
});

const Shop = mongoose.model('Shop', ShopSchema);


