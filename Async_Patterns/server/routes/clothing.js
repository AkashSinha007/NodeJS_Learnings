const express = require('express');
const fs = require('fs');
const fsPromises = require('fs').promises;
const datafile = 'server/data/clothing.json';
const router = express.Router();

/* GET all clothing */
router.route('/')
  .get(function(req, res) {
    
    getClothingData()
      .then(data=>{
        console.log('Returning clothing data to browser');
        res.send(data);
      })
      .catch(error => res.status(500).send(error))
      .finally(()=>console.log('All done procesing promise.'));

    console.log('Doing more work');
  });

function getClothingData(){

  let clothingPromise = fsPromises.readFile(datafile,'utf8')
                                  .then(data=>JSON.parse(data));
  console.log(clothingPromise);
  return clothingPromise;
  
}

module.exports = router;
