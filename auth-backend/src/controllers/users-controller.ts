import { NextFunction, Request, Response } from "express";
import UsersService from "../services/users-service";

export default class UsersController {
  static currentUser(req: Request, res: Response, next: NextFunction) {
    const response = UsersService.getCurrentUsersDetails(req, res, next);
    res.send(response);
  }
}
