import { Request } from "express";
import { IJwtUserDetails } from "./jwt-helper.interface";

export interface CustomRequestTokenValidator extends Request {
  currentUser: IJwtUserDetails;
}
