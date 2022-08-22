import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ContactInterface, DynamicButtonEnum } from '../types';

@Entity()
export class Contact extends BaseEntity implements ContactInterface {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column({
    nullable: false,
    length: 80,
  })
  imgName: string;

  @Column({
    nullable: false,
    length: 40,
  })
  value: string;

  @Column({
    length: 80,
  })
  url: string;

  @Column({
    nullable: false,
    type: 'enum',
    enum: DynamicButtonEnum,
  })
  type: DynamicButtonEnum;
}
