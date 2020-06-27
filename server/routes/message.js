const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const messageController = require("../controllers/message");

router.post("/chat", auth);

module.exports = router;
