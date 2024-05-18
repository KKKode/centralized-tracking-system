const mongoose = require("mongoose");

const connection = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => {
      console.log(error);
      console.log("error connecting to mongodb");
      process.exit(1);
    });
};
module.exports = connection;
