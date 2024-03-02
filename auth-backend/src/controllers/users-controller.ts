import { NextFunction, Request, Response } from "express";
import UsersService from "../services/users-service";
import ResponseHandler from "../utils/response-handler";
import { CustomRequestTokenValidator } from "../lib";

export default class UsersController {
  static currentUser(req: Request, res: Response, next: NextFunction) {
    try {
      const response = UsersService.getCurrentUsersDetails(
        req as CustomRequestTokenValidator,
        res
      );
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

  static async userSignInController(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const response = await UsersService.userSignInService(req, res);
      res.send(
        ResponseHandler.handleSuccess(`User SignedIn Successfully`, response)
      );
    } catch (error) {
      next(error);
    }
  }
}
