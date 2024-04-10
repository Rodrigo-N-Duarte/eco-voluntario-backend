import {RequestCreateEnterpriseDTO} from "../dto/enterprise/RequestCreateEnterpriseDTO";
import {ResponseCreateEnterpriseDTO} from "../dto/enterprise/ResponseCreateEnterpriseDTO";
import {Enterprise} from "../database/entity/Enterprise";
import {EnterpriseRepository} from "../repository/EnterpriseRepository";
import {UserEnterprise} from "../database/entity/UserEnterprise";
import {User} from "../database/entity/User";
import {UserRepository} from "../repository/UserRepository";
import {UserEnterpriseRole} from "../database/enums/UserEnterpriseRole";

export class EnterpriseService {
  enterpriseRepository: EnterpriseRepository = new EnterpriseRepository()
  userRepository: UserRepository = new UserRepository()

  async createEnterprise(body: RequestCreateEnterpriseDTO): Promise<ResponseCreateEnterpriseDTO | null> {
    try {
      const enterprise: Enterprise = new Enterprise()
      enterprise.name = body.name
      enterprise.phone = body.phone
      enterprise.email = body.email
      enterprise.location = body.location
      enterprise.image = body.image
      await enterprise.save();

      const user: User | null = await this.userRepository.getOne(body.creatorId)

      if (user) {
        const userEnterprise: UserEnterprise = new UserEnterprise()
        userEnterprise.enterprise = enterprise
        userEnterprise.user = user
        userEnterprise.role = UserEnterpriseRole.CEO
        await userEnterprise.save()
      }

      return ResponseCreateEnterpriseDTO.createMap(enterprise)
    } catch (e) {
      return null
    }
  }

  async getOneEnterprise(id: number): Promise<ResponseCreateEnterpriseDTO | null> {
    try {
      const enterprise: Enterprise | null = await this.enterpriseRepository.getOne(id)
      if (enterprise) {
        return ResponseCreateEnterpriseDTO.createMap(enterprise)
      }
    } catch (e) {
      return null
    }
    return null
  }

  async getAllEnterprises(): Promise<ResponseCreateEnterpriseDTO[]> {
    try {
      const enterprises: Enterprise[] = await this.enterpriseRepository.getAll()
      const array: ResponseCreateEnterpriseDTO[] = []
      for (const ent of enterprises) {
        array.push(ResponseCreateEnterpriseDTO.createMap(ent))
      }
      return array
    } catch (e) {
      return []
    }
    return []
  }
}
