import UsersService from "../services/users-service";

export default class UsersController {
  static currentUser(req: any, res: any) {
    const response = UsersService.getCurrentUsersDetails(req, res);
    res.send(response);
  }
}
