import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const validationRules = () => {
  return [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
  ];
};

export const userValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const errors = validationResult(req);
    console.log(errors.array());
    if (errors.isEmpty()) {
      return next();
    }
    throw Error(`Invalid Credentials`);    
  } catch (err) {
    console.log(err);
    throw Error(`Invalid Credentials`);
  }
};
