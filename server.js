require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { blogRouter } = require("./routes/blogs");
const { userRouter } = require("./routes/user");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", blogRouter);
app.use("/user", userRouter);

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}

main();
