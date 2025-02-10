const participants = require("../models/participants.js");



// TO DO left for now 
exports.addParticipants = async(req,res) => {

    try{
        if(!req.body) {
            return res.status(404).json({message:"No data added"});
        }
        const phoneAdded = req.body.phone;
        const usernameAdded = req.body.username;
        const emailAdded = req.body.email;
        const prevPhoneNum = await Participant.find({phoneAdded});
        const prevEmail = await Participant.find({emailAdded});
        if(prevPhoneNum){
            return res.status(404).json({message:"Phone Number alreay existed"});
        }

        if(!usernameAdded.length()) {
            return res.status(404).json({message:"username not valid"});
        }

        if(prevEmail) {
            return res.status(404).json({message:"email already existed"});
        }

        const participantCreation = new participants(req.body);
        await participantCreation.save();
        res.status(201).json({message:"Participant Added successfully", participantCreation});

    }catch(error){
        res.status(500).json({error:error.message});
    }
};

exports.getAllParticipants = async(req,res) => {

    try{
        const participantsdata = await Participant.find({});
        res.status(200).json(participantsdata);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

    
    
    
    
