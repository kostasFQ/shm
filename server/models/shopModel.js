const mongoose = require('mongoose');

const { Schema } = mongoose;

const ShopSchema = new Schema({
  shop: { type: String, required: true },

  address: {
    city: { type: String, required: true },
    building: { type: String, required: true },
    street: { type: String, required: true },
    district: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
  additionalOptions: { type: Array },

  Mo_Fr: {
    status: { type: String, required: true },
    startTime: { type: String },
    endTime: { type: String },
  },

  saturday: {
    status: { type: String, required: true },
    startTime: { type: String },
    endTime: { type: String },
  },

  sunday: {
    status: { type: String, required: true },
    startTime: { type: String },
    endTime: { type: String },
  },
});

const Shop = mongoose.model('Shop', ShopSchema);
exports.module = { shop: Shop };
