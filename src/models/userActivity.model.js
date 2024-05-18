const { Schema, model } = require("mongoose");

const userActivitySchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    activity_type: {
      type: String,
      required: true,
      enum: ["page_visit", "redirection", "component_click"],
      default: "page_visit",
    },
    page_name: {
      type: String,
      required: true,
    },
    additional_info: {
      device_info: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const UserActivityModel = model("userActivity", userActivitySchema);
module.exports = UserActivityModel;
