const mongoose = require('mongoose');

async function startDB(){
    await mongoose.connect('mongodb+srv://vdberteli:Vdb2703@cluster0.zbvuu8c.mongodb.net/test');
};

module.exports = startDB;