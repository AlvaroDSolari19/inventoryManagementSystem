const Guitar = require('../models/Guitar');

const addGuitar = async (guitarToAdd) => {

    try {
        const newGuitar = new Guitar(guitarToAdd);
        await newGuitar.save(); 
        return newGuitar; 
    } catch (anError) { 
        throw anError; 
    }

}

const getAllGuitars = async() => {
    const allGuitars = await Guitar.find(); 
    console.log('Inside getAllGuitars'); 
    return allGuitars; 
}

module.exports = { addGuitar, getAllGuitars }; 