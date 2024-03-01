import { NextFunction, Request, Response } from "express";
import ResponseHandler from "../utils/response-handlet";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`Something went wrong, ---------------------`, err.stack);
  return res
    .status(400)
    .send(ResponseHandler.handleFailed(err.stack as string, err.name, 400));
};
