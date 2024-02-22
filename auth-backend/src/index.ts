import express from "express";
import { json } from "body-parser";
import UsersController from "./controllers/users-controller";

const app = express();
app.use(json());

app.listen(3000, () => {
  console.log(`Running on port 3000`);
});

app.get(`/api/user/currentuser`, UsersController.currentUser);
