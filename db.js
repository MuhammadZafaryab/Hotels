const mongoose = require('mongoose');
const { connected } = require('process');

//Define the mongodb url connection
const mongoURL = 'mongodb://localhost:27017/hotels'

//setup mongodb connection
mongoose.connect(mongoURL, {
   // useNewUrlParser: true,
    //useUnifiedTopology: true
})

//Get the default connection
//mongoose maitnain a default connection object representing the mongodb connection
const db = mongoose.connection;


//Define event listeners
db.on( 'connected', ()=>{
    console.log('Connected to MongoDB server');
});


db.on( 'disconnected', ()=>{
    console.log('MongoDB disconnect');
});

db.on( 'error', (err)=>{
    console.log('MongoDB connection error',err);
});


//Export db connection 
module.exports = db;