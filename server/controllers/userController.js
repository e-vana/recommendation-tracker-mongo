const { User } = require("../models/user");


const userController = {
  getUsers: async function(req, res){
    try {
      console.log("fired getUsers controller")
      // let users = await User.find();
      // res.send(users);
      res.send({success: true})
    } catch (error) {
      console.log(error)
    }
  },
}

module.exports = {
  userController
}