const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const app = express();


  dotenv.config();

  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DBconnection sucessfull"))
    .catch((err) => {
      console.log(err);
    });

  app.get("/api/test", () => {
    console.log("test is sucessfull");
  });

  app.use(express.json());
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);

  app.listen(5000, () => {
    console.log("Backend is running");
  });
