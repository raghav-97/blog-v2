const { Router } = require("express");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../db/schema");
const { PostModel } = require("../db/schema");
const { JWT_USER_SECRET } = require("../config");
const { auth } = require("../middleware/auth");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const { email, password, first_name, last_name, username } = req.body;
  const schema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(6)
      .max(20)
      .regex(/[A-Z]/, "Password must have at least one uppercase letter")
      .regex(/[a-z]/, "Password must have at least one lowercase letter")
      .regex(/[0-9]/, "Password must have at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must have at least one special character"
      )
      .regex(/^\S*$/, "Password must not contain spaces"),
    first_name: z.string().trim(),
    last_name: z.string().trim(),
    username: z.string().trim().min(6).max(20),
  });

  const result = schema.safeParse({
    email,
    password,
    first_name,
    last_name,
    username,
  });

  if (!result.success) {
    return res.status(400).json({
      message: "invalid data",
      errors: result.error.issues,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await UserModel.findOne({
      email,
    });

    if (user) {
      res.json({
        message: `User with ${email} already exists, please sign in`,
      });
    } else {
      await UserModel.create({
        email,
        password: hashedPassword,
        first_name,
        last_name,
        username,
      });
      res.json({
        message: "user created",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "error creating user",
    });
  }
});

userRouter.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({
      email,
    });
    console.log(user);
    if (!user) {
      return res.status(401).json({
        message: `No user with ${email} found`,
      });
    }
    const userFound = await bcrypt.compare(password, user.password);

    if (userFound) {
      const token = jwt.sign({ id: user._id }, JWT_USER_SECRET);
      res.json({
        message: "User signed in",
        token,
      });
    } else {
      res.json({
        message: "Invalid creds",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "invalid email or password",
    });
  }
});

userRouter.post("/create-blog", auth, async (req, res) => {
  const { title, content } = req.body;
  const user = req.user;
  try {
    const post = await PostModel.create({
      title,
      content,
      author: user._id,
    });
    console.log(post);
    res.json({
      message: "user created blog",
      title,
      content,
    });
  } catch (error) {
    res.status(400).json({
      message: "error creating blog",
    });
  }
});

userRouter.put("/edit-blog", auth, async (req, res) => {
  const { title, content, postId } = req.body;
  console.log(req.body);
  const user = req.user;
  console.log(user);

  try {
    const editedPost = await PostModel.updateOne(
      {
        _id: postId,
        author: user._id,
      },
      {
        title,
        content,
      }
    );
    res.json({
      message: "Successfully edited blog",
    });
  } catch (error) {
    res.status(400).json({
      message: "error editing blog",
    });
  }
});

userRouter.delete("/delete-blog", auth, async (req, res) => {
  const { postId } = req.body;
  const user = req.user;
  try {
    const deletedPost = await PostModel.deleteOne({
      _id: postId,
      author: user._id,
    });
    res.json({
      message: "Successfully deleted blog",
    });
  } catch (error) {
    res.status(400).json({
      message: "error deleting blog",
    });
  }
});

userRouter.get("/blog", async (req, res) => {
  const blogs = await PostModel.find({});
  res.json({
    message: "user blogs and able to edit it",
    blogs,
  });
});

module.exports = {
  userRouter,
};
