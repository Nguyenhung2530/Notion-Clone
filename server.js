const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");
const errorHandler = require("./middlewares/errorHandler");
const ConnectDb = require("./connect");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/post", postRoutes);
app.use(errorHandler);

ConnectDb();
app.listen(PORT, () => {
  console.log("Your app running on port " + PORT);
});
