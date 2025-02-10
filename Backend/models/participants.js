const mongoose = require ("mongoose");

const ParticipantSchema = new mongoose.Schema({
    name : {
        type: String, 
        required: true
    },
    dateofbirth: {
        type : Date, 
        required: true
    },
    gender : {
        type: String , 
        enum:["Male", "Female", "Non-Binary"], 
        required: true
    },
    maritalstatus:{
        type: String, 
        enum:["Single", "Married", "divorced", "Widowed", "Other"], 
        requied: true
    },
    address : {
        type: String , 
        required: true
    },
    phone : {
        type: String , 
        required: true
    },
    email : {
        type: String , 
        required: true
    },
    healthstatus:{
        type: String
    },
    employmentstatus:{
        type:String, 
        enum:["Employed", "Unemployed", "Retired", "Student", "Other"], 
        required: true
    },
    occupation :{
        type :String
    },
    educationlevel:{
        type: String, 
        required: true
    },
    race:{
        type:String, 
        required:true
    },
    nationality:{
        type: String, 
        required: true
    },
    primarylanguage:{
        type:string
    },
});
module.exports = mongoose.model("participants", ParticipantSchema);