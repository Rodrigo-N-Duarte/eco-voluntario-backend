import {BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {UserProject} from "./UserProject";
import {Comment} from "./Comment";

@Entity("tb_user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column("longtext")
  image: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => UserProject, userProject => userProject.user)
  projects: UserProject[]

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[]
}