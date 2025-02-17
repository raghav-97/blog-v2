const { Router } = require("express");

const blogRouter = Router();

blogRouter.get("/", (req, res) => {
  res.json({
    message: "all the blogs",
  });
});

module.exports = {
  blogRouter,
};
