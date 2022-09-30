const myRouter = require('express').Router(); 
const mongoose = require('mongoose'); 
const { addGuitar, getAllGuitars } = require('../controller/guitar.controller');


/****************
 * ADD A GUITAR *
 ****************/
myRouter.post('/', async (req, res) => {

    try {
        const newGuitar = await addGuitar(req.body);
        res.status(201).json(newGuitar); 
    } catch (anError) {
        res.status(anError?.status ?? 500).json(anError); 
    }

});

/*******************
 * GET ALL GUITARS *
 *******************/
myRouter.get('/', async (req, res) => {

    try {
        const allGuitars = await getAllGuitars(); 
        res.json(allGuitars); 
    } catch (anError) {
        res.status(anError?.status ?? 500).json(anError); 
    }

})

module.exports = myRouter; 