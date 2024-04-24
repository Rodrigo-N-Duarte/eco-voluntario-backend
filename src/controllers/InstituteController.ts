import { Controller, GET, POST , PUT, DELETE} from 'fastify-decorators';
import { InstituteService } from '../services/InstituteService';
import {CreateInstituteDTO} from "../dto/institute/CreateInstituteDTO";
import {UpdateInstituteDTO} from "../dto/institute/UpdateInstituteDTO";

@Controller("/institute")
export default class InstituteController {
    private readonly InstituteService = new InstituteService()
  
    @POST('/')
    async createInstitute (request: any, response: any): Promise<CreateInstituteDTO | null> {
      return this.InstituteService.createInstitute(request, response);
    }
  
    @GET('/:id')
    async getOneInstitute (request: any, response: any) {
      return this.InstituteService.getOneInstitute(request, response);
    }

    @PUT("/:id")
    async updateOneInstitute (request: any, response: any): Promise<UpdateInstituteDTO | null> {
        return this.InstituteService.updateOneInstitute(request, response);
    }

    @DELETE('/:id')
    async deleteOneInstitute (request: any, response: any) {
      return this.InstituteService.getOneInstitute(request, response);
    }

    @GET('/all')
    async getAllInstitutes (request: any, response: any) {
      return this.InstituteService.getAllInstitutes(request, response);
    }
}
  