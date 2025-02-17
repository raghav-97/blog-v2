require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const { blogRouter } = require("./routes/blogs");
const { userRouter } = require("./routes/user");

const app = express();
app.use(express.json());

app.use("/", blogRouter);
app.use("/user", userRouter);

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(process.env.PORT, () => {
    console.log("server running...");
  });
}

main();
