import JwtService from "../services/JwtService";
import { Controller, Get, Post, Route, SuccessResponse, Tags, Middlewares, Path } from "tsoa";

@Route("users")
@Tags('Users')
export class UsersController extends Controller {
  /**
   * Gets current user with the provided Id
   */
  @Get('{userId}')
  public async getUser(@Path() userId: number): Promise<any> {
    return {message: `hello ${userId}`};
  }

  @SuccessResponse("201", "Created")
  @Middlewares(JwtService.verifyToken)
  @Post()
  public async createUser(): Promise<any> {
    return "hello";
  }
}
