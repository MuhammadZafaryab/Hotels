const mongoose = require('mongoose');

//Define person schema 
const PersonSchema = mongoose.Schema({
    name:{
        type: 'string',
        required: true
    },
    age:{
        type: 'number'
    
    },
    work:{
        type: 'string',
        enum: ['Chef', 'Waiter', 'Manager'],
        required: true
    },
    mobile:{
        type: 'number',
        required: true,
        unique: true
    },
    email:{
        type: 'String',
        required: true,
        unique: true 
    },
    address:{
        type: 'String'
    },
    Salary:{
        type: 'number',
        required: true
    }
});


//Create person model
const Person = mongoose.model('Person', PersonSchema)
module.exports = Person;