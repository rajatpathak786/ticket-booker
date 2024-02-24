import { NextFunction, Request, Response } from "express";
import UsersService from "../services/users-service";

export default class UsersController {
  static currentUser(req: Request, res: Response, next: NextFunction) {
    try {
      const response = UsersService.getCurrentUsersDetails(req, res);
      res.send(response);
    } catch (error) {
      next(error);
    }
  }

  static async userSignUpController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response = await UsersService.userSignUpService(req, res);
      res.send(response);
    } catch (error) {
      next(error);
    }
  }
}
