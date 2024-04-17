import {Comment} from "../../database/entity/Comment";

export class ResponseCreateCommentDTO {
  id: number;
  message: string
  projectId: number
  createdAt: Date

  static createMap = (comment: Comment): ResponseCreateCommentDTO => {
    const response = new ResponseCreateCommentDTO()
    response.id = comment.id
    response.message = comment.message
    response.createdAt = comment.createdAt
    response.projectId = comment.project.id
    return response
  }
}