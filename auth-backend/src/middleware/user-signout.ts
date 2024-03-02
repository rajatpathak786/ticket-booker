import { Request, NextFunction, Response } from "express";

export const userSignout = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.session?.jwt) {
      throw Error(`Jwt Token not provided`);
    }
    req.session = null;
    next();
  } catch (err) {
    console.log(err);
    throw Error(`Invalid Jwt Token`);
  }
};
