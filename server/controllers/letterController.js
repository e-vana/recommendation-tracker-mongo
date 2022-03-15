const { Letter } = require("../models/letter");

const letterController = {
  createLetter: async function (req, res) {
    try {
      if (!req.userId) {
        throw { message: "No valid userId.  Cannot create profile." };
      }
      if (!req.isInstructor) {
        throw { message: "You do not have permissions to create this asset." };
      }
      let newLetter = new Letter({
        createdBy: req.userId,
        profile: req.body.profileId,
        studentFirstName: req.body.studentFirstName,
        studentLastName: req.body.studentLastName,
        studentEmail: req.body.studentEmail,
      });
      //send email to student saying they have a new letter to populate

      await newLetter.save();
      res.send({ success: true, letter: newLetter });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
  markLetterAsSent: async function (req, res) {
    try {
      let letterExists = await Letter.findById(req.params.letterId);
      if (!letterExists) {
        throw {
          message: `Failed to find a letter with this ID: ${req.params.letterId}.`,
        };
      }
      letterExists.markLetterAsSent = true;
      await letterExists.save();
      res.send({ success: true, letter: letterExists });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
};

module.exports = {
  letterController,
};
