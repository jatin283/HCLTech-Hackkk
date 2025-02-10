const mongoose = require ("mongoose");

const VisitSchema = new mongoose.Schema({
    participantid : {
        type : mongoose.Schema.Types.ObjectId, 
        ref:"participants", 
        required : true
    },
    visitdate: {
        type : Date, 
        required: true
    },
    scheduledby : {
        type: String , 
        required: true
    },
});
module.exports = mongoose.model("visit_data", VisitSchema);