import {BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
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

  @Column("longtext")
  image: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => UserProject, userProject => userProject.project)
  users: UserProject[]

  @OneToMany(() => Comment, comment => comment.project)
  comments: Comment[]
}