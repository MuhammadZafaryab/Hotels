const express = require('express');
const router = express.Router();
const Person = require('../models/Person');

//Post route to add a person
router.post('/', async (req, res) => {

    try{
      const data = req.body 
    
       const newPerson = new Person(data);
       const response = await newPerson.save();
       console.log('data saved');
       res.status(200).json(response);
    
    }
    catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
    }
    })

    //Get method to get the person
router.get('/', async (req, res) => {
    try{
       const data = await Person.find();
       console.log('data fetched');
       res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
  })


  router.get('/:worktype',async (req, res) => {
    try{
        const worktype = req.params.worktype //Extract worktype from URL parameter
        if(worktype == 'Chef' || worktype == 'Waiter' || worktype == 'Manager'){
           
            const response = await Person.find({work: worktype})
            console.log('response fetched');
            res.status(200).json(response);
        }    
        else{
           res.status(404).json({error: 'Invalid work type'});
        }
      }
        catch(err){
          console.log(err);
           res.status(500).json({error: 'Internal Server Error'});
        }
  })

router.put('/:id', async(req, res) => {
  try{
       const personId = req.params.id; //Extract the id from the URL parameter
       const updatedPersonData = req.body; // Updated data for the person
       
       const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{
        new: true,
        runValidators: true,
       })

       if (!response){
        return res.status(404).json({error: 'Person not found'});
       }
       console.log('data updated');
       res.status(200).json(response);
       }
  catch(err){
           console.log(err);
           res.status(500).json({error: 'Internal Server Error'});
  }
})

router.delete('/:id', async(req, res) => {
  try{
      const personId = req.params.id; //Extract the person's Id from the URL parameter

      //Assuming you have a person model
      const response = await Person.findByIdAndDelete(personId);
      if (!response){
        return res.status(404).json({error: 'Person not found'});
      }
      console.log('Person data deleted');
      res.status(200).json({message: 'person Delete Successfully'});
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})




  module.exports = router;
  