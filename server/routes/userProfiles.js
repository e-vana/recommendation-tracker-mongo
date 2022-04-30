const express = require("express");
const {
  userProfileController,
} = require("../controllers/userProfileController");
const { getUserIdFromToken } = require("../middleware/getUserFromToken");
const router = express.Router();

router.post("/", getUserIdFromToken, userProfileController.createProfile);
router.patch("/", userProfileController.editProfile);
router.delete("/", getUserIdFromToken, userProfileController.deleteProfile);

module.exports = router;
