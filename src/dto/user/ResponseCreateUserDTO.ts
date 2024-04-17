import {User} from "../../database/entity/User";

export class ResponseCreateUserDTO {
  id: number;
  name: string
  secondName: string
  email: string
  image: string
  createdAt: Date
  updatedAt: Date

  static createMap = (user: User): ResponseCreateUserDTO => {
    const response = new ResponseCreateUserDTO()
    response.id = user.id
    response.email = user.email
    response.name = user.name
    response.secondName = user.secondName
    response.createdAt = user.createdAt
    response.updatedAt = user.updatedAt
    return response
  }
}