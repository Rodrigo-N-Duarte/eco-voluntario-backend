import {BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Enterprise} from "./Enterprise";
import {UserEnterpriseRole} from "../enums/UserEnterpriseRole";
import {UserProjectRole} from "../enums/UserProjectRole";
import {Project} from "./Project";

@Entity("tb_comment")
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Project, project => project.comments)
  project: Project

  @ManyToOne(() => User, user => user.comments)
  user: User
}