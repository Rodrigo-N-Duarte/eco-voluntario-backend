import {Project} from "../database/entity/Project";
import {UserProject} from "../database/entity/UserProject";
import {UserProjectRole} from "../database/enums/UserProjectRole";
import {In} from "typeorm";

export class ProjectRepository {
  repository = Project.getRepository()
  userProjectRepository = UserProject.getRepository()

  async getOne(id: number): Promise<Project | null> {
    try {
      return await this.repository.findOneBy({id: id})
    } catch (e) {
      return null
    }
  }

  async getAll(): Promise<Project[]> {
    try {
      return await this.repository.find()
    } catch (e) {
      return []
    }
  }

  async getCreatedProjects(userId: number): Promise<Project[]> {
    try {
      const userProjects = await this.userProjectRepository.find({
        where: { user: { id: userId }, role: UserProjectRole.CEO },
        relations: ["project"]
      });
      const projects: Project[] = []
      for (const userProject of userProjects) {
        if (userProject.project) projects.push(userProject.project)
      }
      return projects
    } catch (e) {
      return []
    }
  }

  async getParticipantProjects(userId: number): Promise<Project[]> {
    try {
      const userProjects = await this.userProjectRepository.find({
        where: { user: { id: userId }, role: In([UserProjectRole.VOLUNTEER, UserProjectRole.ADMIN]) },
        relations: ["project"]
      });
      const projects: Project[] = []
      for (const userProject of userProjects) {
        if (userProject.project) projects.push(userProject.project)
      }
      return projects
    } catch (e) {
      return []
    }
  }
}