var mongoose = require('mongoose');


const connect = async (url) => {
    try {
        await mongoose.connect(url);
        console.log('Connected to database');
    } catch (error) {
        console.log('Could not connect to database');
        console.log(error);
        
    }
}

module.exports = connect;