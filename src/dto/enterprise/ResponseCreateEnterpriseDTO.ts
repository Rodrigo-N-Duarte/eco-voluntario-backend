import {AutoMap} from "@automapper/classes";
import {User} from "../../database/entity/User";
import {Enterprise} from "../../database/entity/Enterprise";

export class ResponseCreateEnterpriseDTO {
  id: number;
  name: string
  email: string
  phone: string
  image: string
  location: string
  createdAt: Date
  updatedAt: Date

  static createMap = (enterprise: Enterprise): ResponseCreateEnterpriseDTO => {
    const response = new ResponseCreateEnterpriseDTO()
    response.id = enterprise.id
    response.email = enterprise.email
    response.name = enterprise.name
    response.phone = enterprise.phone
    response.image = enterprise.image
    response.location = enterprise.location
    response.createdAt = enterprise.createdAt
    response.updatedAt = enterprise.updatedAt
    return response
  }
}