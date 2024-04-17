import {DataSource} from "typeorm";
import {User} from "./entity/User";
import {Project} from "./entity/Project";
import {UserProject} from "./entity/UserProject";
import {Comment} from "./entity/Comment";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "ecovoluntario",
  synchronize: true,
  logging: true,
  entities: [
    User,
    Project,
    Comment,

    UserProject
  ],
  subscribers: [],
  migrations: [],
})

/*

docker run -d --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 mysql:latest

Para a conexão ja deve ter um banco criado com o nome de ecovoluntario
Atentar-se a senha do mysql

*/

