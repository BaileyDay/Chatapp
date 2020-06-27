const MessageModel = require("../models/message");

exports.postMessage = (req, res, next) => {
  const username = req.body.username;
  const message = req.body.message;
  const newMessage = new MessageModel({
    username: username,
    message: message,
  });
  return newMessage.save();
};

exports.getAllMessages = async (req, res, next) => {
  try {
    const messages = await MessageModel.find();
    res.json(messages);
  } catch (err) {
    console.error(err.message);
  }
};
