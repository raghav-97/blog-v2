const { Router } = require("express");

const userRouter = Router();

userRouter.get("/blog", (req, res) => {
  res.json({
    message: "user blogs and able to edit it",
  });
});

module.exports = {
  userRouter,
};
