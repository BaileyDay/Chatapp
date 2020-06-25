const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.postSignup = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username: username }).then((userDoc) => {
    if (userDoc) {
      res.status(409).send("User already exists");
    }
    return bcrypt.hash(password, 12).then(async (hashedPassword) => {
      const user = new User({
        username: username,
        password: hashedPassword,
      });
      await user.save();
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(payload, "secret", { expiresIn: 36000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
        res.status(200);
      });
    });
  });
};

exports.getUserData = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
  }
};
