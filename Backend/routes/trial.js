const trailController = require("../controllers/trialController.js");
const express = require("express");

const router = express.Router();

router.post("/record",trialDataController.recordTrialData);
router.get("/visit/:visitId",trialDataController.getTrialDataByVisit);

module.exports = router;
