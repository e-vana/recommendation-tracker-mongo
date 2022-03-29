const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userController = {
  getUsers: async function (req, res) {
    try {
      // let users = await User.find();
      // res.send(users);
      res.send({ success: true });
    } catch (error) {
      console.log(error);
    }
  },
  register: async function (req, res) {
    try {
      //check to see if user exists
      let userExists = await User.find({ email: req.body.email });
      if (userExists.length > 0) {
        throw { message: "This user already exists." };
      }
      //check password complexity requirements

      //hash body request password
      const saltValue = await bcrypt.genSaltSync(10);
      const hashed = await bcrypt.hashSync(req.body.password, saltValue);


      console.log(req.isInstructor);
      //create new user
      //if is Instructor is checked
      const newUser = new User({
        dateCreated: Date.now(),
        password: hashed,
        email: req.body.email,
      });

      if (req.isInstructor) {
        newUser.isInstructor = true;
      }

      await newUser.save();
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },
  login: async function (req, res) {
    try {
      //see if a user exists with this email

      let userExists = await User.findOne({ email: req.body.email });
      if (!userExists) {
        throw {
          message: "There's no account affiliated with this email address.",
        };
      }
      //compare stored hashed password and password on post request
      let isCorrectPassword = await bcrypt.compareSync(
        req.body.password,
        userExists.password
      );
      if (!isCorrectPassword) {
        throw { message: "Invalid password." };
      }

      //return a jsonwebtoken with userID embedded
      let token = await jwt.sign(
        { userId: userExists._id, isInstructor: userExists.isInstructor },
        process.env.JWT_SECRET,
        { expiresIn: "7 day" }
      );
      res.status(200).json({ success: true, token: token });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },
  changePassword: async function (req, res) {
    try {
      //see if a user exists with this email
      let userExists = await User.findOne({ email: req.body.email });
      if (!userExists) {
        throw {
          message: "There's no account affiliated with this email address.",
        };
      }
      //compare stored hashed password and password on post request
      let isCorrectPassword = await bcrypt.compareSync(
        req.body.existingPassword,
        userExists.password
      );
      if (!isCorrectPassword) {
        throw { message: "Invalid password." };
      }
      userExists.password = req.body.newPassword;
      await userExists.save();
      res.status(200).json({ success: true });
      // //return a jsonwebtoken with userID embedded
      // let token = await jwt.sign(
      //   { userId: userExists._id },
      //   process.env.JWT_SECRET,
      //   { expiresIn: "1 day" }
      // );
      // res.status(200).json({ success: true, token: token });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },
};

module.exports = {
  userController,
};
