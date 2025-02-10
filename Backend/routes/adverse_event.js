const express = require('express');
const adverseEventController = require('../controllers/adverseEventController.js') ;

const router = express.router();

router.post("/report", adverseEventController.reportAdverseEvent) ;
router.get("/participants/:participantID", adverseEventController.getAdverseEventsByParticipant) ;

module.exports = router;










