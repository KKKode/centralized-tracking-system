const { getAccessToken, verifyAccessToken } = require("../utils");

const authenticatedUser = (req, res, next) => {
  try {
    const accessToken = getAccessToken(req.headers.authorization);
    if (!accessToken)
      res.status(400).json("Please login first to to perform this action!");
    const user = verifyAccessToken(accessToken);
    if (!user._id) res.status(400).json("user not found!");
    req.currentUser = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authenticatedUser;
