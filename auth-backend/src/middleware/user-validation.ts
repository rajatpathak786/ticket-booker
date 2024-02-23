import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";

export const userValidation = () => {
  // console.log(`Here`);
  // console.log(body("email").isEmail());
  return [body("email").isEmail().withMessage("Email must be valid")];
};
