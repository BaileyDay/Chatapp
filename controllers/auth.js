const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();
const bcryptSecret = process.env.secret;

exports.postSignup = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
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

exports.getUserData = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    const decoded = jwt.verify(token, bcryptSecret);
    req.user = decoded.user;
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
  }
};

exports.postLogin = async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    let user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(payload, bcryptSecret, { expiresIn: 36000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
      res.status(200);
    });
  } catch (err) {
    console.log(err);
  }
};
