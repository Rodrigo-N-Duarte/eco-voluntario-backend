import { Controller, GET, POST } from 'fastify-decorators'
import {EnterpriseService} from "../services/EnterpriseService";
import {ResponseCreateEnterpriseDTO} from "../dto/enterprise/ResponseCreateEnterpriseDTO";

@Controller("/enterprise")
export default class EnterpriseController {
  private readonly enterpriseService = new EnterpriseService()

  @POST('/')
  async createEnterprise (request: any): Promise<ResponseCreateEnterpriseDTO | null> {
    return this.enterpriseService.createEnterprise(request.body);
  }

  @GET('/:id')
  async getOneEnterprise (request: any): Promise<ResponseCreateEnterpriseDTO | null> {
    return this.enterpriseService.getOneEnterprise(request.params.id);
  }

  @GET('/')
  async getAllEnterprise (request: any): Promise<ResponseCreateEnterpriseDTO[]> {
    return this.enterpriseService.getAllEnterprises();
  }
}
