const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const authController = require("../controllers/auth");

router.post("/register", authController.postSignup);
router.get("/chat", authController.getUserData);
router.post("/login", authController.postLogin);

module.exports = router;
