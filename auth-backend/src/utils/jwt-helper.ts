import jwt from "jsonwebtoken";
import { IJwtUserDetails } from "../lib";

export const jwtGenerator = (id: string, email: string): string => {
  return jwt.sign(
    {
      id,
      email,
    },
    process.env.JWT_PVT_KEY as string
  );
};

export const jwtVerification = (jwtToken: string): IJwtUserDetails => {
  return jwt.verify(
    jwtToken,
    process.env.JWT_PVT_KEY as string
  ) as IJwtUserDetails;
};
