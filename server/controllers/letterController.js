const { Letter } = require("../models/letter");

const letterController = {
  getLettersForInstructor: async function (req, res) {
    try {
      let letters = await Letter.find({ createdby: req.userId });
      res.status(200).json({ success: true, letters });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
  getALetterForInstructor: async function (req, res) {
    try {
      let letter = await Letter.findById(req.params.letterId);
      res.status(200).json({ success: true, letter });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  },
  createLetter: async function (req, res) {
    try {
      if (!req.userId) {
        throw { message: "No valid userId.  Cannot create profile." };
      }
      // if (!req.isInstructor) {
      //   throw { message: "You do not have permissions to create this asset." };
      // }
      let newLetter = new Letter({
        createdBy: req.userId,
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
  updateLetterInformation: async function (req, res) {
    try {
      let letterExists = await Letter.findById(req.params.letterId);
      if (!letterExists) {
        throw {
          message: `Failed to find a letter with this ID: ${req.params.letterId}.`,
        };
      }
      letterExists.studentFirstName = req.body.studentFirstName;
      letterExists.studentLastName = req.body.studentLastName;
      letterExists.studentEmail = req.body.studentEmail;
      letterExists.studentLetterSchool = req.body.studentLetterSchool;
      letterExists.studentLetterProgram = req.body.studentLetterProgram;
      letterExists.studentLetterNotes = req.body.studentLetterNotes;
      letterExists.studentLetterSubmissionDueDate =
        req.body.studentLetterSubmissionDueDate;
      letterExists.studentCompleted = true;
      letterExists.isPending = false;

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
