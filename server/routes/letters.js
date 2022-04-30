const express = require("express");
const { letterController } = require("../controllers/letterController");
const { getUserIdFromToken } = require("../middleware/getUserFromToken");
const router = express.Router();

router.get("/", getUserIdFromToken, letterController.getLettersForInstructor);
router.get("/:letterId", letterController.getALetterForInstructor);

router.post("/", getUserIdFromToken, letterController.createLetter);
router.post(
  "/markAsSent/:letterId",
  getUserIdFromToken,
  letterController.markLetterAsSent
);
router.post(
  "/update-letter-information/:letterId",
  letterController.updateLetterInformation
);

module.exports = router;
