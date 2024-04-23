import { Controller, GET, POST } from 'fastify-decorators'
import {ProjectService} from "../services/ProjectService";
import {ResponseCreateProjectDTO} from "../dto/project/ResponseCreateProjectDTO";

@Controller("/project")
export default class ProjectController {
  private readonly projectService = new ProjectService()

  @POST('/')
  async createProject (request: any, response: any): Promise<ResponseCreateProjectDTO> {
    return this.projectService.createProject(request, response);
  }

  @GET('/:id')
  async getOneProject (request: any, response: any): Promise<ResponseCreateProjectDTO> {
    return this.projectService.getOneProject(request, response);
  }

  @GET("/all")
  async getAllProjects(request: any, response: any): Promise<ResponseCreateProjectDTO[]> {
    return this.projectService.getAllProjects(request, response)
  }
}
