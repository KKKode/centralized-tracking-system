const { createHash } = require("crypto");
const JWT = require("jsonwebtoken");

const secreteCode = "ThisisjustaRandomTEXTthatNooneCANGUESSKNOWNASSeCrEtECoDe";

const hashing = (password) => {
  return createHash("sha256").update(password).digest("hex");
};

const verifyHashing = (hashedPassword, text) => {
  const hashedData = hashing(text);
  return hashedData === hashedPassword;
};

const generateAccessToken = (payload) => {
  return JWT.sign(payload, secreteCode);
};
const verifyAccessToken = (accessToken) => {
  return JWT.verify(accessToken, secreteCode);
};
const getAccessToken = (bearerToken) => {
  return bearerToken?.split(" ")[1];
};

module.exports = {
  hashing,
  verifyHashing,
  generateAccessToken,
  verifyAccessToken,
  getAccessToken,
};
