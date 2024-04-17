import {RequestCreateProjectDTO} from "../dto/project/RequestCreateProjectDTO";
import {Project} from "../database/entity/Project";
import {ResponseCreateProjectDTO} from "../dto/project/ResponseCreateProjectDTO";
import {ProjectRepository} from "../repository/ProjectRepository";

export class ProjectService {
  projectRepository: ProjectRepository = new ProjectRepository()
  async createProject(body: RequestCreateProjectDTO): Promise<ResponseCreateProjectDTO | null> {
    const project: Project = new Project()
    project.name = body.name
    project.objective = body.objective
    project.description = body.description
    project.location = body.location
    project.image = body.image
    try {
      await project.save();
      return ResponseCreateProjectDTO.createMap(project)
    } catch (e) {
      return null
    }
  }

  async getOneProject(id: number): Promise<ResponseCreateProjectDTO | null> {
    try {
      const project: Project | null = await this.projectRepository.getOne(id)
      if (project) {
        return ResponseCreateProjectDTO.createMap(project)
      }
    } catch (e) {
      return null
    }
    return null
  }
}
