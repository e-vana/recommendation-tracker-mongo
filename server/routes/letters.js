const express = require("express");
const { letterController } = require("../controllers/letterController");
const router = express.Router();

router.post("/", letterController.createLetter);
router.post("/markAsSent/:letterId", letterController.markLetterAsSent);

module.exports = router;
