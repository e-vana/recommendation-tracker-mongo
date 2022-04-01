const { User } = require("../models/user");
const { UserProfile } = require("../models/userProfile");

const userProfileController = {
  getProfiles: async function (req, res) {
    try {
      let getAUsersProfiles = await UserProfile.find({user: req.body.userId});
      if(getAUsersProfiles.length == 0){
        throw {message: "No profiles found for this userId."}
      }
      res.send({success: true, profiles: getAUsersProfiles});
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
      
    }
  },
  createProfile: async function (req, res) {
    try {
      //A middleware on the route adds the userID from the JSON web token to the HTTP request body
      if (!req.userId) {
        throw { message: "No valid userId.  Cannot create profile." };
      }
      let createdProfile = new UserProfile({
        user: req.userId,
        position: req.body.position,
        school: req.body.school,
        department: req.body.department,
      });
      await createdProfile.save();
      res.send({ success: true, profile: createdProfile });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },
  editProfile: async function (req, res) {
    try {
      if (!req.userId) {
        throw { message: "No valid userId.  Cannot create profile." };
      }
      let profileExists = UserProfile.findById(req.body.profileId);
      if (!profileExists) {
        throw { message: "Cannot find a profile to update." };
      }
      if (req.body.position) {
        profileExists.position = req.body.position;
      }
      if (req.body.school) {
        profileExists.school = req.body.school;
      }
      if (req.body.department) {
        profileExists.department = req.body.department;
      }
      await profileExists.save();
      res.send({ success: true, profile: profileExists });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },
  deleteProfile: async function (req, res) {
    try {
      if (!req.userId) {
        throw { message: "No valid userId.  Cannot create profile." };
      }
      let profileExists = UserProfile.findOneAndDelete(req.body.profileId);
      if (!profileExists) {
        throw { message: "Cannot find a profile to delete." };
      }
      res.send({ sucess: true, profile: profileExists });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  },
};

module.exports = {
  userProfileController,
};
