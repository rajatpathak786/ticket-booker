import express, { Request, Response } from "express";
const router = express.Router();
import UsersController from "../controllers/users-controller";
import { userValidation } from "../middleware";
import { body, validationResult, ValidationError } from "express-validator";

router.get(`/currentuser`, UsersController.currentUser);
router.post("/signup", UsersController.userSignUpController);
// router.post(
//   "/signup",
//   [
//     body("email").isEmail().withMessage("Email must be valid"),
//     body("password")
//       .trim()
//       .isLength({ min: 4, max: 20 })
//       .withMessage("Password must be between 4 and 20 characters"),
//   ],
//   (req: Request, res: Response) => {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       // This is javascript land (not ts)
//       const error = new Error("Invalid email or password");
//       // error.reasons = errors.array();
//       throw error;
//     }
//     console.log("Creating a user...");
//     throw new Error("Error connecting to database");

//     res.send({});
//   }
// );

// if (err instanceof RequestValidationError) {
//   const formattedErrors = err.errors.map((error) => {
//     if (error.type === 'field') {
//       return { message: error.msg, field: error.path };
//     }
//   });
//   return res.status(400).send({ errors: formattedErrors });
// }

// serializeErrors() {
//   return this.errors.map((err) => {
//     if (err.type === 'field') {
//       return { message: err.msg, field: err.path };
//     }
//     return { message: err.msg };
//   });
// }

export default router;
