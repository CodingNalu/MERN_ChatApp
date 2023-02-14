const User = require("../models/User");
const bcrypt = require("bcryptjs");
const registerController = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    //if username is in use
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck) {
      return res.json({ msg: "Username Already used", status: false });
    }
    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.json({ msg: "Email Already used", status: false });
    }
    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    //create an instance of User
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (error) {
    console.log({
      msg: error.message,
      stack: error.stack,
    });
    process.exit(1);
  }
};
const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        msg: "Sorry,we don't find the user using that email",
        status: false,
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({
        msg: "Sorry, you don't have valid crediential",
        status: false,
      });
    }
    delete user.password;
    return res.json({ status: true, user });
  } catch (error) {
    console.log({
      msg: error.message,
      stack: error.stack,
    });
    process.exit(1);
  }
};
module.exports = { registerController, loginController };
