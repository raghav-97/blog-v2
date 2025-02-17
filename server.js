const express = require("express");

const { blogRouter } = require("./routes/blogs");
const { userRouter } = require("./routes/user");

const app = express();

app.use("/", blogRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("server running...");
});
