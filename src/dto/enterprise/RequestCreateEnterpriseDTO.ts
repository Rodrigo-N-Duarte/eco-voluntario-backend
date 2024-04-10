import {AutoMap} from "@automapper/classes";

export class RequestCreateEnterpriseDTO {
  @AutoMap()
  name: string
  @AutoMap()
  email: string
  @AutoMap()
  phone: string
  @AutoMap()
  image: string
  @AutoMap()
  location: string
  creatorId: number
}