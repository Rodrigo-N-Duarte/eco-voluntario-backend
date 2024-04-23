import { Controller, GET, POST } from 'fastify-decorators'
import {ProjectService} from "../services/ProjectService";
import {ResponseCreateProjectDTO} from "../dto/project/ResponseCreateProjectDTO";
import {ResponseCreateCommentDTO} from "../dto/comment/ResponseCreateCommentDTO";
import {CommentService} from "../services/CommentService";

@Controller("/comment")
export default class CommentController {
  private readonly commentService = new CommentService()

  @POST('/')
  async createComment (request: any, response: any): Promise<ResponseCreateCommentDTO | null> {
    return this.commentService.createComment(request, response);
  }

  @GET("/product/:id")
  async getAllCommentsByProduct (request: any, response: any): Promise<ResponseCreateCommentDTO[]> {
    return this.commentService.getAllCommentsByProduct(request, response)
}
}
