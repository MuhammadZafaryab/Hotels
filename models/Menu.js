const mongoose = require('mongoose');

//Define menu schema

const MenuSchema = mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    price:{
        type: 'number',
        required: true
    },
    taste:{
        type: 'string',
        enum: ['sweet', 'savoury', 'spicy'],
        required: true
    },
    is_drink: {
        type: 'boolean',
        default: false
    },
    ingredients: {
        type: [String],
        default: []
    },
    num_sales: {
        type: 'number',
        default: 0
    }

}); 

//Create menu model
const Menu = mongoose.model('Menu', MenuSchema)
module.exports = Menu;