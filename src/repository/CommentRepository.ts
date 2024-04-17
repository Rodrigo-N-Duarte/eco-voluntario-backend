import {Comment} from "../database/entity/Comment";

export class CommentRepository {
  repository = Comment.getRepository()

  async getOne(id: number): Promise<Comment | null> {
    try {
      return await this.repository.findOneBy({id: id})
    } catch (e) {
      return null
    }
  }

  async getAllByProduct(projectId: number): Promise<Comment[]> {
    try {
      return await this.repository.find({where: {project: {id: projectId}}})
    } catch (e) {
      return []
    }
  }
}