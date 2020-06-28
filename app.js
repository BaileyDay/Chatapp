const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const MONGODB_URI =
  "***REMOVED***";

const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/message");
const middleWare = require("./middleware/auth");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client", "build")));

app.use(cors());
app.use(authRoutes);
app.use(messageRoutes);
app.use(middleWare);

mongoose.connect(MONGODB_URI).catch((err) => {
  console.log(err);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
