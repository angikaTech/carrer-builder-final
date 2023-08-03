const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        // required:true,
    },
    // email: {
    //     type: String,
    // },
    course: {
        type: String,
    },
    program: {
        type: String,
    },
    // fullName: {
    //     type: String,
    // },
    email: {
        type: String,
    },
    
    code: {
        type: String,
    },
    mobielNumber: {
        type: String,
    },
    dob: {
        type: String,
    },
    gender: {
        type: String,
    },
    cityName: {
        type: String,
    },
    state: {
        type: String,
    },
    country:{
        type: String,
    },
    document:{
        type: String,
    }
});


const UserModel = mongoose.model("studentsdata", UserSchema)

module.exports = UserModel; 