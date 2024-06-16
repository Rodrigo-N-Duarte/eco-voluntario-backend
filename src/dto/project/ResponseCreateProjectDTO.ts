import {Project} from "../../database/entity/Project";

export class ResponseCreateProjectDTO {
  id: number;
  name: string
  description: string
  objective: string
  location: string
  image: string
  createdAt: Date
  updatedAt: Date

  static createMap = (project: Project): ResponseCreateProjectDTO => {
    const response = new ResponseCreateProjectDTO()
    response.id = project.id
    response.description = project.description
    response.name = project.name
    response.image = project.image
    response.objective = project.objective
    response.location = project.location
    response.createdAt = project.createdAt
    response.updatedAt = project.updatedAt
    return response
  }
}