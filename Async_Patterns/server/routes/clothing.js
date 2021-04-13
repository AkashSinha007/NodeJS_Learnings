const express = require('express');
const fs = require('fs');
const fsPromises = require('fs').promises;
const datafile = 'server/data/clothing.json';
const router = express.Router();

/* GET all clothing */
router.route('/')
  .get(async function(req, res) {
    
    try{
      let data= await getClothingData();
      console.log('Return async data');
      res.send(data);
    }
    catch(error){
      res.status(500).send(error);
    }

    console.log('Doing more work'); /*This line has no significance as 
                                      already inside async function*/
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

  /*Note2:
  'await' before an asynchronous call only handles successful resolution(resolve) 
  of promise.
  To handle the failure(reject) we still need to use the try catch block and put the
  called asynchronous function inside that.
   */