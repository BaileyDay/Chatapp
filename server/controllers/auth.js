const bcrypt = require("bcryptjs");

const User = require("../models/user");

exports.postSignup = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({ username: username }).then((userDoc) => {
    if (userDoc) {
      res.status(409).send("User already exists");
    }
    return bcrypt
      .hash(password, 12)
      .then((hashedPassword) => {
        const user = new User({
          username: username,
          password: hashedPassword,
        });
        return user.save();
      })
      .then(() => {
        res.status(200).send("Successfull registration");
      });
  });
};
