import express from "express";
import { json } from "body-parser";
import router from "./routes";
import { errorHandler } from "./middleware/error-handler";

const app = express();
app.use(json());

app.listen(3000, () => {
  console.log(`Running on port 3000`);
});

app.use(`/api`, router);

app.use(errorHandler);
