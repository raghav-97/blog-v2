require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { blogRouter } = require("./routes/blogs");
const { userRouter } = require("./routes/user");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/", blogRouter);
app.use("/user", userRouter);

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}

main();
