import mongoose from "mongoose";

interface IUserDetails {
  email: String;
  password: String;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(details: IUserDetails): UserDoc;
}

interface UserDoc extends mongoose.Document {
  email: String;
  password: String;
}

const userSchema = new mongoose.Schema({
  // Define your fields here with their respective data types
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

// We'll use User.build({}) to create a new user instead of directly using new User()
// We do this as typescript in new User() will not recognise & verify details we are providing inside that, hence to use typescript validations we do this

userSchema.statics.build = (details: IUserDetails) => {
  return new User(details);
};

// We can also directly create an buildUser function like below and use it to create a new User Document by exporting buildUser function

// const buildUser = (userDetails: IUserDetails) => {
//   return new User(userDetails);
// };

export { User };
