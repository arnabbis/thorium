const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId:{
        type:ObjectId,
        ref:"user"        
    },
    productId:{
        type:ObjectId,
        ref:"products"
    },
    amount:Number,
    isFreeAppUser:Boolean,
    date:String
})

module.exports = mongoose.model('order', orderSchema) //orders