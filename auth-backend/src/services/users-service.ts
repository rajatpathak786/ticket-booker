import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { User } from "../models/users";
import { generatePasswordHash } from "../utils/hashing";

export default class UsersService {
  static getCurrentUsersDetails(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const errors = validationResult(req);
      console.log(errors);
      if (!errors.isEmpty) {
        const error = new Error("Invalid email");
        throw error;
      }
      console.log(`Inside Service`);
      return `User Details`;
    } catch (error: any) {
      console.log(error.message);
      next(error);
    }
  }

  static async userSignUpService(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      console.log(`Here`);
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        console.log(`User email already in use`);
        throw Error(`Email Exists`);
      }
      console.log(user, password, email);
      const hash = await generatePasswordHash(password);
      console.log(hash);
      const newUser = User.build({ email, password: hash });
      return await newUser.save();
    } catch (error: any) {
      console.log(error);
      return next(error);
    }
  }
}
