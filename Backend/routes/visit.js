const visitController = require("../controllers/visitController.js");
const express = require("express");

const router = express.Router();

router.post("/schedule",visitController.scheduleVisit);
router.get("/visit/:participantid",visitController.getVisitingDataByParticipantID);

module.exports = router;
