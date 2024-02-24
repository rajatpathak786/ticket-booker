import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

export const generatePasswordHash = async (
  password: string
): Promise<string> => {
  const salt = randomBytes(8).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;

  return `${buf.toString("hex")}.${salt}`;
};

export const comparePasswordHash = async (
  storedPassword: string,
  suppliedPassword: string
): Promise<boolean> => {
  const [hashedPassword, salt] = storedPassword.split(".");
  const buf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;

  return buf.toString("hex") === hashedPassword;
};

// import bcrypt from "bcrypt";
// const saltRounds = 10;

// export const generatePasswordHash = async (
//   password: string
// ): Promise<string> => {
//   const salt = await bcrypt.genSalt(saltRounds);
//   return await bcrypt.hash(password, salt);
// };

// export const comparePasswordHash = async (
//   password: string,
//   hash: string
// ): Promise<boolean> => {
//   return await bcrypt.compare(password, hash);
// };
