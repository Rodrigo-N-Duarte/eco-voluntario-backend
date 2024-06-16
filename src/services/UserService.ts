import {User} from "../database/entity/User";
import {RequestCreateUserDTO} from "../dto/user/RequestCreateUserDTO";
import {LoginBodyDTO} from "../dto/user/LoginBodyDTO";
import {ResponseCreateUserDTO} from "../dto/user/ResponseCreateUserDTO";
import {UserRepository} from "../repository/UserRepository";
import bcrypt from 'bcrypt'

export class UserService {
  userRepository: UserRepository = new UserRepository()

  async login(request: any, response: any): Promise<ResponseCreateUserDTO | null> {
    const body: LoginBodyDTO = request.body
    const user: User | null = await this.userRepository.getOneByEmail(body.email)
    if (user) {
      if (await bcrypt.compare(body.password, user.password)) {
        return ResponseCreateUserDTO.createMap(user)
      }
    }
    return null
  }

  async createUser(request: any, response: any): Promise<ResponseCreateUserDTO | null> {
    const body: RequestCreateUserDTO = request.body
    const user: User = new User()
    user.name = body.name
    user.email = body.email

    const salt: string = await bcrypt.genSalt(12)
    const hash: string = await bcrypt.hash(body.password, salt)
    user.password = hash
    user.image = body.image || ""
    try {
      await user.save();
      return ResponseCreateUserDTO.createMap(user)
    } catch (e) {
      return e
    }
  }

  async getOneUser(request: any, response: any): Promise<ResponseCreateUserDTO> {
    const id: number = request.params.id
    if (!id) {
      return response.status(400).send("Envie um ID para o usuário")
    }
    try {
      const user: User | null = await this.userRepository.getOne(id)
      if (user) {
        return ResponseCreateUserDTO.createMap(user)
      } else return ResponseCreateUserDTO.createMap(new User())
    } catch (e) {
      return e
    }
  }
}
