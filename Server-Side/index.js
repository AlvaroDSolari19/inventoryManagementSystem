require('dotenv').config();
const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 

const app = express();

app.use(cors()); 
app.use(express.json());

const connectToMongo = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI); 
        console.log('Connected to MongoDB')
    } catch (anError) { 
        console.error(anError); 
        process.exit(1); 
    }

}

const guitarRouter = require('./routes/guitar.route');
app.use('/', guitarRouter); 

connectToMongo(); 

app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on port ${process.env.PORT || 8080}`);
});