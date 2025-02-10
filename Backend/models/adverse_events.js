const mongoose = require ("mongoose");

const AdverseEventSchema = new mongoose.Schema({
    participantid: {
        type : mongoose.Schema.Types.ObjectId, 
        ref:"participants", 
        required : true
    },
    eventdate : {
        type : Date, 
        required: true
    },
    description : {
        type: String , 
        required: true
    },
    severity:{
        type:String, 
        Enum:["low", "high", "Medium"], 
        reuired: true
    },
});

module.exports = mongoose.model("adverse_events", AdverseEventSchema);