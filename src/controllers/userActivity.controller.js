const UserActivityModel = require("../models/userActivity.model");

const createUserActivity = async (req, res, next) => {
  try {
    const { user_id, activity_type, page_name, additional_info } = req.body;
    if (!user_id || !activity_type || !page_name)
      throw new Error("All fields are require!");
    const data = await UserActivityModel.create({
      user_id,
      activity_type,
      page_name,
      additional_info,
    });
    if (!data) throw new Error("User activity not created!");
    return res.status(201).json({
      message: "User activity tracked successfully.",
      data,
    });
  } catch (error) {
    next(error);
  }
};
const getUserActivity = async (req, res, next) => {
  try {
    const data = await UserActivityModel.find({});
    if (!data) throw new Error("User activity not found!");
    return res.status(200).json({
      message: "User activity fetched successfully.",
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createUserActivity, getUserActivity };
