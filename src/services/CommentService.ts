import {RequestCreateCommentDTO} from "../dto/comment/RequestCreateCommentDTO";
import {ResponseCreateCommentDTO} from "../dto/comment/ResponseCreateCommentDTO";
import {Comment} from "../database/entity/Comment";
import {Project} from "../database/entity/Project";
import {ProjectRepository} from "../repository/ProjectRepository";
import {CommentRepository} from "../repository/CommentRepository";
import {UserRepository} from "../repository/UserRepository";
import {User} from "../database/entity/User";

export class CommentService {
  private projectRepository: ProjectRepository = new ProjectRepository()
  private commentRepository: CommentRepository = new CommentRepository()
  private userRepository: UserRepository = new UserRepository()
  async createComment(request: any, response: any): Promise<ResponseCreateCommentDTO | null> {
    const body: RequestCreateCommentDTO = request.body
    const project: Project | null = await this.projectRepository.getOne(body.projectId)
    const user: User | null = await this.userRepository.getOne(body.userId)
    if (!project) {
      return response.status(400).send("Envie um ID para o projeto")
    }
    if (!user) {
      return response.status(400).send("Envie um ID para o usuário")
    }
    const comment: Comment = new Comment()
    comment.message = body.message
    comment.project = project
    comment.user = user
    try {
      await comment.save();
      return ResponseCreateCommentDTO.createMap(comment)
    } catch (e) {
      return e
    }
  }

  async getAllCommentsByProduct(request: any, response: any): Promise<ResponseCreateCommentDTO[]> {
    const id: number = request.params.id
    if (!id) {
      return response.status(400).send("Envie um ID para o projeto")
    }
    const comments: Comment[] = await this.commentRepository.getAllByProduct(id);
    return comments.map((comment) => {
      return ResponseCreateCommentDTO.createMap(comment)
    })
  }
}
