import express from "express";
import { json } from "body-parser";
import router from "./routes";
import { errorHandler } from "./middleware/error-handler";
import mongoose from "mongoose";
import cookieSession from "cookie-session";

const app = express();
app.use(json());
app.set("trust proxy", 1);
app.use(
  cookieSession({
    secure: true,
    signed: false,
  })
);
app.use(`/api`, router);
app.use(errorHandler);

const start = async () => {
  if (!process.env.JWT_PVT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth-db");
    console.log(`mongo-db connected`);    
  } catch (err) {
    console.error(err);
  }
  app.listen(3000, () => {
    console.log(`Running on port 3000`);
  });
};

start();
