import {Enterprise} from "../database/entity/Enterprise";

export class EnterpriseRepository {
  repository = Enterprise.getRepository()

  async getOne(id: number): Promise<Enterprise | null> {
    try {
      return await this.repository.findOneBy({id: id})
    } catch (e) {
      return null
    }
  }

  async getAll(): Promise<Enterprise[]> {
    try {
      return await this.repository.find();
    } catch (e) {
      return []
    }
  }
}