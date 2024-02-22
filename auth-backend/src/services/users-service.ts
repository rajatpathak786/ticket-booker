export default class UsersService {
  static getCurrentUsersDetails(req: any, res: any) {
    try {
      console.log(`Inside Service`);
      return `User Details`;
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
