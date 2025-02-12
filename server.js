const express = require('express')
const app = express();
const db = require('./db');

const bodyparser= require('body-parser');
app.use(bodyparser.json());  //req.body


app.get('/', function (req, res) {
  res.send('Welcome to our hotel');
})


//Import the routes files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');
//use the router
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
  });











  // const data = req.body //Assuming the request body contains the person data 

  // //create a new person document using the mongoose model
  // const newPerson = new Person(data); //rather than calling it one by one pass data in the parameter

  // //save the new person
  // newPerson.save((error,savedPerson) =>{
  //   if(error){
  //     console.log('Error saving person', error);
  //     res.status(500).json(error, 'Internal server error');
  //   }
  //   else{
  //     console.log('Data saved successfully');
  //     res.status(200).json(savedPerson);
  //   }





