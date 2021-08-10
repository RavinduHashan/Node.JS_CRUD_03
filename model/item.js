const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemModel = new Schema({
    itemName: {
        type: String,
        required: [true, 'Item name is required!'],
    },
    itemId:{
        type: String,
        required: [true, 'Item id is required!'],
    },
    price:{
        type: String,
        required: [true, 'Price is required!'],
    },
    ingredients:{
        type: String,
    },

    description:{
        type: String,
        required: [true, 'Item description is required!'],
    },
    image_url:{
        type: String,
    },


})

module.exports = mongoose.model('item', itemModel)

