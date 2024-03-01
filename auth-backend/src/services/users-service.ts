import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { User } from "../models/users";
import { generatePasswordHash } from "../utils/hashing";
import jwt from "jsonwebtoken";

export default class UsersService {
  static getCurrentUsersDetails(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty) {
        const error = new Error("Invalid email");
        throw error;
      }
      return `User Details`;
    } catch (error: any) {
      console.log(error.message);
      throw error;
    }
  }

  static async userSignUpService(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        console.log(`User email already in use`);
        throw Error(`Email Exists`);
      }
      const hash = await generatePasswordHash(password);
      const newUser = User.build({ email, password: hash });
      const token = jwt.sign(
        {
          id: newUser.id,
          email: newUser.email,
        },
        process.env.JWT_PVT_KEY as string
      );
      req.session = {
        jwt: token,
      };
      return await newUser.save();
    } catch (error: any) {
      console.log(error);
      throw error;
    }
  }
}
