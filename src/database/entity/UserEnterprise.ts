import {BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Enterprise} from "./Enterprise";
import {UserEnterpriseRole} from "../enums/UserEnterpriseRole";

@Entity("tb_user_enterprise")
export class UserEnterprise extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Enterprise, enterprise => enterprise.users)
  enterprise: Enterprise

  @ManyToOne(() => User, user => user.enterprises)
  user: User

  @Column({
    type: "enum",
    enum: UserEnterpriseRole
  })
  role: UserEnterpriseRole
}