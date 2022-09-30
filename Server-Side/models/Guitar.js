const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const guitarSchema = new Schema({
    brandName: String, 
    guitarModel: String, 
    guitarColors: String, 
    isAcoustic: Boolean, 
    numberOfStrings: Number, 
    dateAdded: Date
});

const Guitar = mongoose.model('Guitar', guitarSchema, 'Guitar');
module.exports = Guitar; 