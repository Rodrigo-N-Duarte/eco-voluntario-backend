import { Controller, GET, POST } from 'fastify-decorators'
import { UserService } from '../services/UserService'
import {ResponseCreateUserDTO} from "../dto/user/ResponseCreateUserDTO";

@Controller("/user")
export default class UserController {
  private readonly userService = new UserService()

  @POST('/login')
  async login (request: any, response: any): Promise<ResponseCreateUserDTO | null> {
    return this.userService.login(request, response);
  }

  @POST('/')
  async createUser (request: any, response: any): Promise<ResponseCreateUserDTO | null> {
    return this.userService.createUser(request, response);
  }

  @GET('/:id')
  async getOneUser (request: any, response: any): Promise<ResponseCreateUserDTO> {
    return this.userService.getOneUser(request, response);
  }
}
