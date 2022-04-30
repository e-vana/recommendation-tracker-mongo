const express = require("express");
const { userController } = require("../controllers/userController");
const { getUserIdFromToken } = require("../middleware/getUserFromToken");
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post(
  "/change-password",
  getUserIdFromToken,
  userController.changePassword
);

module.exports = router;
