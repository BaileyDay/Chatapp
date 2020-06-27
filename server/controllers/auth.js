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
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
  }
  console.log(user);
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
    jwt.sign(payload, "secret", { expiresIn: 36000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
      res.status(200);
    });
  } catch (err) {
    console.log(err);
  }
};
