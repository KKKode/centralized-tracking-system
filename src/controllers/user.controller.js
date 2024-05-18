const UserModel = require("../models/user.model");
const { hashing, verifyHashing, generateAccessToken } = require("../utils");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      throw new Error("All fields are require!");
    const data = await UserModel.create({
      name,
      email,
      password: hashing(password),
    });
    if (!data) throw new Error("User not created!");
    return res.status(201).json({
      message: "User created successfully.",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new Error("All fields are require!");
    const user = await UserModel.findOne({
      email,
    });
    if (!user) throw new Error("User not found!");
    const isVerifiedUser = verifyHashing(user.password, password);
    if (!isVerifiedUser) throw new Error("Email or Password is wrong!");
    const ACCESS_TOKEN = generateAccessToken({
      _id: user._id,
      email: user.email,
      name: user.name,
    });
    return res.status(200).json({
      message: `Login successful. Welcome back ${user.name}`,
      accessToken: ACCESS_TOKEN,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
