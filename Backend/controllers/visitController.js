const visit_data = require("../models/visit_data.js");
const participant = require("../models/participants.js");

exports.scheduleVisit = async(req,res) => {

    try{
        // getting data
        const {participantid , visitdate, scheduleby} = req.body;


        // checking if already present
        const participant = await participant.findById(participantid);
        if(!participant){
            return res.status(404).json({message:"Participant not found"});
        }
        

        // creating new data
        const visit = new visit_data({participantid , visitdate, scheduleby});
        await visit.save();

        // send  201 created successfully
        res.status(201).json({message:"Adverse event reported successfully", visit});

    }catch(error){
        // error 
        res.status(500).json({error:error.message});
    }
};

exports.getVisitingDataByParticipantID = async(req,res) => {

    try{
        const {participantId} = req.params;
        const visit = await visit_data.find({participantId}).populate("participantId");
        res.status(200).json(visit);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};