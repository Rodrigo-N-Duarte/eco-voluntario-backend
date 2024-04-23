import {RequestCreateProjectDTO} from "../dto/project/RequestCreateProjectDTO";
import {Project} from "../database/entity/Project";
import {ResponseCreateProjectDTO} from "../dto/project/ResponseCreateProjectDTO";
import {ProjectRepository} from "../repository/ProjectRepository";
import {User} from "../database/entity/User";
import {UserRepository} from "../repository/UserRepository";
import {UserProject} from "../database/entity/UserProject";
import {UserProjectRole} from "../database/enums/UserProjectRole";

export class ProjectService {
  projectRepository: ProjectRepository = new ProjectRepository()
  userRepository: UserRepository = new UserRepository()
  async createProject(request: any, response: any): Promise<ResponseCreateProjectDTO> {
    const body: RequestCreateProjectDTO = request.body
    const userCreator: User | null = await this.userRepository.getOne(body?.creatorId)
    if (!body.creatorId || !userCreator) {
      return response.status(400).send("Envie um ID do usuário criador")
    }
    const project: Project = new Project()
    project.name = body.name
    project.objective = body.objective
    project.description = body.description
    project.location = body.location
    project.image = body.image
    try {
      await project.save();
      const userProject: UserProject = new UserProject()
      userProject.project = project
      userProject.user = userCreator
      userProject.role = UserProjectRole.CEO
      await userProject.save()
      return ResponseCreateProjectDTO.createMap(project)
    } catch (e) {
      return e
    }
  }

  async getOneProject(request: any, response: any): Promise<ResponseCreateProjectDTO> {
    const id: number = request.params.id
    if (!id) {
      return response.status(400).send("Envie um ID na URL")
    }
    try {
      const project: Project | null = await this.projectRepository.getOne(id)
      if (project) {
        return ResponseCreateProjectDTO.createMap(project)
      } else return ResponseCreateProjectDTO.createMap(new Project())
    } catch (e) {
      return e
    }
  }

  async getAllProjects(request: any, response: any): Promise<ResponseCreateProjectDTO[]> {
    const projects: Project[] = await this.projectRepository.getAll()
    return projects.map(project => ResponseCreateProjectDTO.createMap(project))
  }
}
