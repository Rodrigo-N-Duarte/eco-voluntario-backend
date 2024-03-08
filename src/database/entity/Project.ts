import {BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {UserEnterprise} from "./UserEnterprise";
import {Enterprise} from "./Enterprise";
import {UserProject} from "./UserProject";
import {Comment} from "./Comment";

@Entity("tb_project")
export class Project extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  objective: string

  @Column()
  location: string

  @Column()
  image: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => Enterprise, enterprise => enterprise.projects)
  enterprise: Enterprise

  @OneToMany(() => UserProject, userProject => userProject.project)
  users: UserProject[]

  @OneToMany(() => Comment, comment => comment.project)
  comments: Comment[]
}