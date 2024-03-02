import { Request, NextFunction, Response } from "express";
import { CustomRequestTokenValidator } from "../lib";
import { jwtVerification } from "../utils/jwt-helper";

export const tokenValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.session?.jwt) {
      throw Error(`Jwt Token not provided`);
    }
    const payload = jwtVerification(req.session.jwt);
    (req as CustomRequestTokenValidator).currentUser = payload;
    next();
  } catch (err) {
    console.log(err);
    throw Error(`Invalid Jwt Token`);
  }
};
