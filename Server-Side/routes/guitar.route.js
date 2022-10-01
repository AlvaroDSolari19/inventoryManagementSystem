const myRouter = require('express').Router(); 
const mongoose = require('mongoose'); 
const { addGuitar, getAllGuitars, updateGuitar, deleteGuitar } = require('../controller/guitar.controller');

/***************
 * VALIDATE ID *
 ***************/
const validateObjectID = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)){
        res.status(204).send(); 
    } else { 
        next(); 
    }
}


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

/*******************
 * UPDATE A GUITAR *
 *******************/
myRouter.put('/:id', validateObjectID, async (req, res) => { 

    try {
        const updatedGuitar = await updateGuitar(req.params.id, req.body);
        res.status(200).json(updatedGuitar); 
    } catch (anError) { 
        res.status(anError?.status ?? 500).json(anError); 
    }

})

/*******************
 * DELETE A GUITAR *
 *******************/
myRouter.delete('/:id', validateObjectID, async (req, res) => {

    try {
        await deleteGuitar(req.params.id);
        res.send(); 
    } catch (anError) {
        res.status(anError?.status ?? 500).json(anError); 
    }

})

module.exports = myRouter; 