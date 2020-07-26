const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const messageController = require("../controllers/message");

router.post("/api/chat", messageController.postMessage);
router.get("/api/chatmessages", messageController.getAllMessages);

module.exports = router;
