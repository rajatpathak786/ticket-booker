import bcrypt from "bcrypt";
const saltRounds = 10;

export const generatePasswordHash = async (
  password: string
): Promise<string> => {
  console.log(`----------------`);
  const salt = await bcrypt.genSalt(saltRounds);
  console.log(salt);
  return await bcrypt.hash(password, salt);
};

export const comparePasswordHash = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};
