const express = require("express");
const participantController = require("../controllers/participantController.js");

const router = express.Router();

router.post("/add",participantController.addParticipants);
router.get("/", participantController.getAllParticipants);

module.exports = router;
