import mongoose from 'mongoose';
import '../models/shop';

const Shop = mongoose.models('Shop');

export function setUpConnection() {
    mongoose.connect('mongo ds153729.mlab.com:53729/shops');
}

export function shopsList() {
    return Shop.find();
}

export function createShop(data) {
    const shop = new Shop({
       shopName: data.shopName,
       address: data.address,
        workTime: data.workTime,
        workDays: data.workDays
    });

    return shop.save();
}

export function deleteShop(id) {
    return Shop.findById(id).remove();
    
}