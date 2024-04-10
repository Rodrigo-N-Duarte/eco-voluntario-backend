import { Controller, GET, POST } from 'fastify-decorators'
import { UserService } from '../services/UserService'
import {RequestCreateUserDTO} from "../dto/user/RequestCreateUserDTO";
import {ResponseCreateUserDTO} from "../dto/user/ResponseCreateUserDTO";

@Controller("/user")
export default class UserController {
  private readonly userService = new UserService()

  @POST('/')
  async createUser (request: any): Promise<ResponseCreateUserDTO | null> {
    return this.userService.createUser(request.body);
  }

  @GET('/:id')
  async getOneUser (request: any): Promise<ResponseCreateUserDTO | null> {
    return this.userService.getOneUser(request.params.id);
  }
}
