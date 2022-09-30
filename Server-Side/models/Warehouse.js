const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const productSchema = new Schema({
    productName: String, 
    productDescription: String, 
    productQuantity: Number, 
    dateAdded: Date
});

const warehouseSchema = new Schema ({
    foodStored: String, 
    currentCapacity: Number, 
    maximumCapacity: Number, 
    currentProducts: [productSchema]
}); 

const Warehouse = mongoose.model('Warehouse', warehouseSchema, 'Warehouse');
module.exports = Warehouse; 