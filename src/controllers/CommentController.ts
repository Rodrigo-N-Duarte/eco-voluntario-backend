import { Controller, GET, POST } from 'fastify-decorators'
import {ProjectService} from "../services/ProjectService";
import {ResponseCreateProjectDTO} from "../dto/project/ResponseCreateProjectDTO";
import {ResponseCreateCommentDTO} from "../dto/comment/ResponseCreateCommentDTO";
import {CommentService} from "../services/CommentService";

@Controller("/comment")
export default class CommentController {
  private readonly commentService = new CommentService()

  @POST('/')
  async createComment (request: any): Promise<ResponseCreateCommentDTO | null> {
    return this.commentService.createComment(request.body);
  }

  @GET("/product/:id")
  async getAllCommentsByProduct (request: any): Promise<ResponseCreateCommentDTO[]> {
    return this.commentService.getAllCommentsByProduct(request.params.id)
}
}
