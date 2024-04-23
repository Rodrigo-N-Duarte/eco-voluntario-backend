import {User} from "../database/entity/User";
import {RequestCreateUserDTO} from "../dto/user/RequestCreateUserDTO";
import {ResponseCreateUserDTO} from "../dto/user/ResponseCreateUserDTO";
import {UserRepository} from "../repository/UserRepository";

export class UserService {
  userRepository: UserRepository = new UserRepository()
  async createUser(request: any, response: any): Promise<ResponseCreateUserDTO | null> {
    const body: RequestCreateUserDTO = request.body
    const user: User = new User()
    user.name = body.name
    user.secondName = body.secondName
    user.email = body.email
    user.password = body.password
    user.image = body.image
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
