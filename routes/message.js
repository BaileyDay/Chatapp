const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const messageController = require("../controllers/message");

router.post("/chat", messageController.postMessage);
router.get("/chatmessages", messageController.getAllMessages);

module.exports = router;
