const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:String,
    category:String,
    price:Number
})

module.exports = mongoose.model('products', productSchema) //products

