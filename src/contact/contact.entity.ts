import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ContactInterface } from '../types/contact/contact';

@Entity()
export class Contact extends BaseEntity implements ContactInterface {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({
    nullable: false,
  })
  imgName: string;

  @Column({
    nullable: false,
  })
  value: string;
}
