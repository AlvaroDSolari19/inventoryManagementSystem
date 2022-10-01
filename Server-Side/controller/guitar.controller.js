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

const getAllGuitars = async () => {
    const allGuitars = await Guitar.find(); 
    console.log('Inside getAllGuitars'); 
    return allGuitars; 
}

const updateGuitar = async (guitarID, updatedGuitar) => {
    
    try {
        const newUpdatedGuitar = await Guitar.findByIdAndUpdate(guitarID, updatedGuitar);
        return await Guitar.findById(guitarID); 
    } catch (anError) { 
        throw anError; 
    }
    
}

const deleteGuitar = async (guitarID) => { 
    await Guitar.findByIdAndDelete(guitarID); 
}

module.exports = { addGuitar, getAllGuitars, updateGuitar, deleteGuitar }; 