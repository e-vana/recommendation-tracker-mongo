const express = require("express");
const {
  userProfileController,
} = require("../controllers/userProfileController");
const router = express.Router();

router.post("/", userProfileController.createProfile);
router.patch("/", userProfileController.editProfile);
router.delete("/", userProfileController.deleteProfile);

module.exports = router;
