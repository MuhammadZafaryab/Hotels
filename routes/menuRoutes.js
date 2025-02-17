const express = require('express')
const router = express();
const Menu = require('./../models/Menu');

 

//Post route to add Menu
router.post('/', async (req, res) => {

    try{
        const data = req.body
  
        const newMenu = new Menu(data);
        const response = await newMenu.save();
        console.log('Menu data saved');
        res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
  
    }
  })
  
  //Get method to get the Menu
  router.get('/', async (req, res) => {
    try {
        const data = await Menu.find();
        console.log('Menu data fetched');
        res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal Server Error'});
    }
  })


  router.get('/:tastetype', async (req, res) => {
    try{
        const tastetype = req.params.tastetype //Extract tastetype from URL parameter
        if(tastetype == 'sweet' || tastetype == 'savoury' || tastetype == 'spicy'){
            const response = await Menu.find({taste: tastetype})
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
           res.status(404).json({error: 'Invalid taste type'});
        }}
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Invalid work type'});
    }  
})

router.put('/:id', async(req, res) => {
  try{
      const menuId = req.params.id;
      const updatedMenuData = req.body;

      const response = await Menu.findByIdAndUpdate(menuId, updatedMenuData,{ 
        new: true,
        runValidators: true,
       })

      if(!response){
        return res.status(404).json({error: 'Menu not found'});
      }
      console.log('Menu updated');
       res.status(200).json(response);
  }
  catch(err){
           console.log(err);
           res.status(500).json({error: 'Internal Server Error'});
  }
})


router.delete('/:id', async (req, res) => {
  try{
    const menuId = req.params.id;

    const response = await Menu.findByIdAndDelete(menuId);

    if(!response){
      return res.status(404).json({error: 'Menu not found'});
    }
      console.log('Menu data deleted');
      res.status(200).json({message: 'Menu Delete Successfully'});

  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});

  }
})
//comment for testing purposes
module.exports = router; 