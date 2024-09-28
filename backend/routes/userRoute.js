import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser); // POST route

userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);

export default userRouter;
