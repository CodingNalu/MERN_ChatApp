const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/authControllers");
const router = express();
router.post("/login", loginController);
router.post("/register", registerController);
module.exports = router;
