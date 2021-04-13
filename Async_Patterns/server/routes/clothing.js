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

async function getClothingData(){

  let rawData = await fsPromises.readFile(datafile,'utf8')
  let clothingData = JSON.parse(rawData);
  console.log(clothingData);
  return clothingData;
  
}

module.exports = router;


  /*Note:
  function declared as async automatically wraps returned data in a promise
  and returns the promise to the caller
  Because it returns a promise, we can also 'await' that in calling code. */
