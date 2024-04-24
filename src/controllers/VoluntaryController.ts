import { Controller, GET, POST , PUT, DELETE} from 'fastify-decorators';
import { voluntaryService } from '../services/VoluntaryService';
import {CreateVoluntaryDTO} from "../dto/voluntary/CreateVoluntaryDTO";
import {UpdateVoluntaryDTO} from "../dto/voluntary/UpdateVoluntaryDTO";

@Controller("/voluntary")
export default class voluntaryController {
    private readonly voluntaryService = new VoluntaryService()
  
    @POST('/')
    async createVoluntary (request: any, response: any): Promise<CreateVoluntaryDTO | null> {
      return this.voluntaryService.createVoluntary(request, response);
    }
  
    @GET('/:id')
    async getOneVoluntary (request: any, response: any) {
      return this.voluntaryService.getOneVoluntary(request, response);
    }

    @PUT("/:id")
    async updateOneVoluntary (request: any, response: any): Promise<UpdateVoluntaryDTO | null> {
        return this.voluntaryService.updateOneVoluntary(request, response);
    }

    @DELETE('/:id')
    async deleteOneVoluntary (request: any, response: any) {
      return this.voluntaryService.getOneVoluntary(request, response);
    }

    @GET('/')
    async getAllVoluntary (request: any, response: any) {
      return this.voluntaryService.getAllVoluntary(request, response);
    }
}
  