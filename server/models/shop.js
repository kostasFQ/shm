import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ShopSchema = new Schema({
    shopName : {type : String, required: true},
    address : {type : String, required: true},
    workTime : {type : String, required: true},
    workDays : {type : String, required: true}
});

const Shop = mongoose.model('Shop', ShopSchema);
