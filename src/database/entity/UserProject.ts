import {BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Enterprise} from "./Enterprise";
import {UserEnterpriseRole} from "../enums/UserEnterpriseRole";
import {UserProjectRole} from "../enums/UserProjectRole";
import {Project} from "./Project";

@Entity("tb_user_project")
export class UserProject extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Project, project => project.users)
  project: Project

  @ManyToOne(() => User, user => user.projects)
  user: User

  @Column({
    type: "enum",
    enum: UserProjectRole
  })
  role: UserProjectRole
}