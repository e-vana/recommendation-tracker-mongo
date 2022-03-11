const express = require('express');
const { userController } = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.getUsers);

// router.get('/', function(req, res){
//   console.log("route hit")
//   res.send({ok: true})
// })

module.exports = router;