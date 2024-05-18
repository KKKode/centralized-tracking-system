const express = require("express");
const path = require("path");
const connection = require("./database/connection");
const cors = require("cors");
require("dotenv").config();
const userRoute = require("./routes/user.routes");
const userActiveRoute = require("./routes/userActivity.routes");

const PORT = process.env.PORT || 8080;
const app = express();
connection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/user", userRoute);
app.use("/api/v1/userActivity", userActiveRoute);

app.listen(PORT, () => console.log(`App listening on port no:${PORT}`));
