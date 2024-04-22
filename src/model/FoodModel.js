const mongoose = require('mongoose');

const FoodSchema =new mongoose.Schema({
    foodName: { type: String, required: true },
    foodCode: { type: String, unique:false },
    foodImage: { type: String, required: true },
    foodCategory: { type: String },
    quantity: { type: Number },
    price: { type: Number, required: true }
}, { timestamps: true, versionKey:false });

const FoodModel = mongoose.model('foods', FoodSchema);

module.exports = FoodModel;
