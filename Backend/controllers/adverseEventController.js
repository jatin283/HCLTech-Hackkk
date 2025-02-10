const adverseEvent = require("../models/adverse_events.js");
const participant = require("../models/participants.js");

exports.reportAdverseEvent = async(req,res) => {

    try{
        const {participantid , eventdate ,description, severity} = req.body;

        const participant = await participant.findById(participantId);
        if(!participant){
            return res.status(404).json({message:"Participant not found"});
        }
        
        const adverseEvent = new adverseEvent({participantId , eventDate,description,severity});
        await adverseEvent.save();
        res.status(201).json({message:"Adverse event reported successfully", adverseEvent});

    }catch(error){
        res.status(500).json({error:error.message});
    }
};

exports.getAdverseEventsByParticipant = async(req,res) => {

    try{
        const {participantId} = req.params;
        const adverseEvents = await adverseEvent.find({participantId}).populate("participantId");
        res.status(200).json(adverseEvents);

    }catch(error){
        res.status(500).json({error:error.message});
    }
};
