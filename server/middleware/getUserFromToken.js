const getUserIdFromToken = async function (req, res, next) {
  try {
    //get bearer token from HTTP request
    let tokenBearer = req.headers.authorization;
    if (req.headers.authorization) {
      let split = tokenBearer.split(" ");
      let token = split[1];

      //Check validity of JWT
      let isValid = await jwt.verify(token, process.env.JWT_SECRET);
      if (!isValid) {
        throw { message: "You do not have permission to access this data." };
      }

      //Add userId to request for access in other middleware, add isInstructor to request
      req.userId = isValid.userId;
      req.isInstructor = isValid.isInstructor;
      next();
    }
    next();
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

module.exports = {
  getUserIdFromToken,
};
