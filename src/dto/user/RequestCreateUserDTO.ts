import {AutoMap} from "@automapper/classes";

export class RequestCreateUserDTO {
  @AutoMap()
  name: string
  @AutoMap()
  secondName: string
  @AutoMap()
  email: string
  @AutoMap()
  password: string
  @AutoMap()
  image: string
}