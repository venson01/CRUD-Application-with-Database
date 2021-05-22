require('dotenv').config()
const mongoose = require('mongoose');

const InitiateMongoServer = async () =>{
    try{
        await mongoose.connect('mongodb+srv://venson:hope!!!!@cluster0.r3zcz.mongodb.net/users?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log('Connected to Database');
    }catch(err) {
        console.error(err);
        throw err;
    }
};

module.exports = InitiateMongoServer;