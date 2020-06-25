const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "No token auth denied" });
  }
  try {
    const decoded = jwt.verify(token, "secret");

    req.user = decoded.username;
    next();
  } catch (err) {
    res.status(401).json({ msg: "token is not valid" });
  }
};
