import {User} from "../database/entity/User";

export class UserRepository {
  repository = User.getRepository()

  async getOne(id: number): Promise<User | null> {
    try {
      return await this.repository.findOneBy({id: id})
    } catch (e) {
      return null
    }
  }

  async getOneByEmail(email: string): Promise<User | null> {
    try {
      return await this.repository.findOneBy({email: email})
    } catch (e) {
      return null
    }
  }
}