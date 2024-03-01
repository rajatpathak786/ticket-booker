import jwt from "jsonwebtoken";

export const jwtGenerator = (id: string, email: string): string => {
  return jwt.sign(
    {
      id,
      email,
    },
    process.env.JWT_PVT_KEY as string
  );
};
