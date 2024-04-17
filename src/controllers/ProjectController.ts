import { Controller, GET, POST } from 'fastify-decorators'
import {ProjectService} from "../services/ProjectService";
import {ResponseCreateProjectDTO} from "../dto/project/ResponseCreateProjectDTO";

@Controller("/project")
export default class ProjectController {
  private readonly projectService = new ProjectService()

  @POST('/')
  async createProject (request: any): Promise<ResponseCreateProjectDTO | null> {
    return this.projectService.createProject(request.body);
  }

  @GET('/:id')
  async getOneProject (request: any): Promise<ResponseCreateProjectDTO | null> {
    return this.projectService.getOneProject(request.params.id);
  }
}
