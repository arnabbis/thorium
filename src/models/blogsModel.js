const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    authorid: {
        type: ObjectId,
        ref: author
    },
    tags:[String],
    category: {
        type: String,
        required:true,
        enum: [
            { technology:[String]},
            { entertainment:[String]},
            { life_style:[String]},
            { food:[String]},
            { fashion:[String]}]
        },
    isDeleted:{type:Boolean,
    default:false
    },
    deletedAt:{
        type: Date,
         required: true,
          default: Date.now
    },
    publishedAt:{
        type: Date,
         required: true,
          default: Date.now
    },
    isPublished:{
        type:Boolean,
        default:false
    },
    

},{timestamps:true}) 
module.exports = mongoose.model('blogs', blogsSchema);