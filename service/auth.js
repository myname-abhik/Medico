// const sessionIdToUserMap = new Map();
const jwt = require("jsonwebtoken");
const secret = "medicoAiSecretKey";

function setUser(user) {
  return jwt.sign(
    {user},
    secret
  );
}

function getUser(token) {
  // return sessionIdToUserMap.get(id);
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    return null;
  }
//   return jwt.verify(token, secret);
}

module.exports = {
  setUser,
  getUser,
};
