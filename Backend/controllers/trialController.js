const trialData = require("../models/trials_data.js");
const visit = require("../models/visit_data.js");

exports.recordTrialData = async(req,res) => {
    try{
        const {visitId, heartRate, bloodPressure, respiratoryRate, bodyTemprature, oxygenSaturation, weight, height} = req.body;

        const visit = await visit.findById(visitId);
        if(!visit){
            return res.status(404).json({message:"Visit not fount"});
        }

        const trialData = new trialData({
            visitId, heartRate, bloodPressure, respiratoryRate, bodyTemprature, oxygenSaturation, weight, height
        });
        await trialData.save();
        res.status(201).json({message:"Trial data recorded successfully", trialData});
    }catch(error){
        res.status(500).json({error : error.message});
    }
};

exports.getTrialDataByVisit = async(req,res) => {
    try{
        const {visitId} = req.params;
        const trialData = await trialData.find({visitId}).populate("visitId");
        res.status(200).json(trialData);
    }catch(error){
        res.status(500).json({error : error.message});
    }
};