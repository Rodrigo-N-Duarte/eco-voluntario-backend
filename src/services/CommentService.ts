import {RequestCreateCommentDTO} from "../dto/comment/RequestCreateCommentDTO";
import {ResponseCreateCommentDTO} from "../dto/comment/ResponseCreateCommentDTO";
import {Comment} from "../database/entity/Comment";
import {Project} from "../database/entity/Project";
import {ProjectRepository} from "../repository/ProjectRepository";
import {CommentRepository} from "../repository/CommentRepository";

export class CommentService {
  private projectRepository: ProjectRepository = new ProjectRepository()
  private commentRepository: CommentRepository = new CommentRepository()
  async createComment(body: RequestCreateCommentDTO): Promise<ResponseCreateCommentDTO | null> {
    const project: Project | null = await this.projectRepository.getOne(body.projectId)
    if (!project) {
      return null
    }
    const comment: Comment = new Comment()
    comment.message = body.message
    comment.project = project
    try {
      await comment.save();
      return ResponseCreateCommentDTO.createMap(comment)
    } catch (e) {
      return null
    }
  }

  async getAllCommentsByProduct(id: number): Promise<ResponseCreateCommentDTO[]> {
    if (!id) {
      return []
    }
    const comments: Comment[] = await this.commentRepository.getAllByProduct(id);
    return comments.map((comment) => {
      return ResponseCreateCommentDTO.createMap(comment)
    })
  }
}
