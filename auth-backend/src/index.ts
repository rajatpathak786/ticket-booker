import express from "express";
import { json } from "body-parser";
import router from "./routes";
import { errorHandler } from "./middleware/error-handler";
import mongoose from "mongoose";

const app = express();
app.use(json());

app.use(`/api`, router);

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth-db");    
  } catch (err) {
    console.error(err);
  }
  app.listen(3000, () => {
    console.log(`Running on port 3000`);
  });
};

start();
