import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LanguageEnum, ProjectInterface } from "../types";

@Entity()
export class Project extends BaseEntity implements ProjectInterface {
  @PrimaryGeneratedColumn('increment')
  id: string;
  @Column({
    nullable: false,
    length: 150,
  })
  backUrl: string;
  @Column({
    nullable: false,
    length: 150,
  })
  demoUrl: string;

  @Column({
    nullable: false,
    type: 'longtext',
  })
  describe: string;

  @Column({
    nullable: false,
    length: 150,
  })
  frontUrl: string;
  @Column({
    nullable: false,
    type: 'longtext',
  })
  tech: string;
  @Column({
    nullable: false,
    length: 50,
  })
  title: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: LanguageEnum,
  })
  language: LanguageEnum;
}
