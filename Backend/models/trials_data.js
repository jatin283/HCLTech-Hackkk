const mongoose = require ("mongoose");

const TrialSchema = new mongoose.Schema({
    visitId : {
        type : mongoose.Schema.Types.ObjectId, 
        ref:"visit_data", 
        required : true
    },
    heartrate: {
        type : Number, 
        required: true
    },
    bloodpressure : {
        type: Number , 
        required: true
    },
    respiratoryrate : {
        type: Number, 
        required: true
    },
    bodytemperature : {
        type: Number , 
        required: true
    },
    oxygensaturation : {
        type: Number , 
        required: true
    },
    weight : {
        type: Number , 
        required: true
    },
    height:{
        type : Number, 
        required: true
    },
    ecg:{
        type : String, 
        required: true
    },
    bloodglucose:{
        type : Number, 
        required: true
    },
    urineOutput:{
        type : Number, 
        required: true
    },
});

module.exports = mongoose.model("trials_data", TrialSchema);