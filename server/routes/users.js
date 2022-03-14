const express = require("express");
const { userController } = require("../controllers/userController");
const router = express.Router();

// router.get('/', userController.getUsers);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/changePassword", userController.changePassword);

module.exports = router;
