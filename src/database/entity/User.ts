import {BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {UserEnterprise} from "./UserEnterprise";
import {UserProject} from "./UserProject";
import {Comment} from "./Comment";
import {AutoMap} from "@automapper/classes";

@Entity("tb_user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  @AutoMap()
  id: number;

  @Column()
  @AutoMap()
  name: string

  @Column()
  @AutoMap()
  secondName: string

  @Column()
  @AutoMap()
  email: string

  @Column()
  password: string

  @Column()
  @AutoMap()
  image: string

  @CreateDateColumn()
  @AutoMap()
  createdAt: Date

  @UpdateDateColumn()
  @AutoMap()
  updatedAt: Date

  @OneToMany(() => UserEnterprise, userEnterprise => userEnterprise.user)
  enterprises: UserEnterprise[]

  @OneToMany(() => UserProject, userProject => userProject.user)
  projects: UserProject[]

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[]
}