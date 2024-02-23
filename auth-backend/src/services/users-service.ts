import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
export default class UsersService {
  static getCurrentUsersDetails(req: Request, res: Response, next: NextFunction) {
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
}
