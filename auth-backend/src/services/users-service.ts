import { Request, Response } from "express";
import { validationResult } from "express-validator";
export default class UsersService {
  static getCurrentUsersDetails(req: Request, res: Response) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty) {
        const error = new Error("Invalid email");
        throw error;
      }
      console.log(`Inside Service`);
      return `User Details`;
    } catch (error: any) {
      console.log(error.message);
      return error;
    }
  }
}
