import { NextFunction, Request, Response } from "express";
import UsersService from "../services/users-service";
import ResponseHandler from "../utils/response-handlet";

export default class UsersController {
  static currentUser(req: Request, res: Response, next: NextFunction) {
    try {
      const response = UsersService.getCurrentUsersDetails(req, res);
      res.send(
        ResponseHandler.handleSuccess(
          `Fetched Users Data Successfully`,
          response
        )
      );
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
      res.send(
        ResponseHandler.handleSuccess(`User SignedUp Successfully`, response)
      );
    } catch (error) {
      next(error);
    }
  }
}
