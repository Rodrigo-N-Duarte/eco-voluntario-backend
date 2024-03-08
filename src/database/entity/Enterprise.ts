import {BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {UserEnterprise} from "./UserEnterprise";
import {Project} from "./Project";

@Entity("tb_enterprise")
export class Enterprise extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  phone: string

  @Column()
  location: string

  @Column()
  image: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @OneToMany(() => UserEnterprise, userEnterprise => userEnterprise.enterprise)
  users: UserEnterprise[]

  @OneToMany(() => Project, project => project.enterprise)
  projects: Project[]
}