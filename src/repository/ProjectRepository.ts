import {Project} from "../database/entity/Project";

export class ProjectRepository {
  repository = Project.getRepository()

  async getOne(id: number): Promise<Project | null> {
    try {
      return await this.repository.findOneBy({id: id})
    } catch (e) {
      return null
    }
  }

  async getAll(): Promise<Project[]> {
    try {
      return await this.repository.find()
    } catch (e) {
      return []
    }
  }
}