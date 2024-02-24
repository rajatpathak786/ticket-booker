import { NextFunction, Request, Response } from "express";
import UsersService from "../services/users-service";

export default class UsersController {
  static currentUser(req: Request, res: Response, next: NextFunction) {
    const response = UsersService.getCurrentUsersDetails(req, res, next);
    res.send(response);
  }

  static async userSignUpController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const response = await UsersService.userSignUpService(req, res, next);
    res.send(response);
  }
}
