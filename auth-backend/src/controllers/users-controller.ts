import { Request, Response } from "express";
import UsersService from "../services/users-service";

export default class UsersController {
  static currentUser(req: Request, res: Response) {
    const response = UsersService.getCurrentUsersDetails(req, res);
    res.send(response);
  }
}
