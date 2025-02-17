const jwt = require("jsonwebtoken");
const { UserModel } = require("../db/schema");
const { JWT_USER_SECRET } = require("../config");

async function auth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      message: "no token provided",
    });
  }
  try {
    const decoded = jwt.verify(token, JWT_USER_SECRET);
    const user = await UserModel.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        message: "invalid token",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      message: "invalid token",
    });
  }
}

module.exports = {
  auth,
};