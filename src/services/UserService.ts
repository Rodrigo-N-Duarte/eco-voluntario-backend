import {User} from "../database/entity/User";
import {RequestCreateUserDTO} from "../dto/user/RequestCreateUserDTO";
import {ResponseCreateUserDTO} from "../dto/user/ResponseCreateUserDTO";
import {UserRepository} from "../repository/UserRepository";

export class UserService {
  userRepository: UserRepository = new UserRepository()
  async createUser(body: RequestCreateUserDTO): Promise<ResponseCreateUserDTO | null> {
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
      return null
    }
  }

  async getOneUser(id: number): Promise<ResponseCreateUserDTO | null> {
    try {
      const user: User | null = await this.userRepository.getOne(id)
      if (user) {
        return ResponseCreateUserDTO.createMap(user)
      }
    } catch (e) {
      return null
    }
    return null
  }
}
