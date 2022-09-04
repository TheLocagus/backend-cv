import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BannerInterface } from '../types/banner';
import { LanguageEnum } from '../types';

@Entity()
export class Banner extends BaseEntity implements BannerInterface {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({
    nullable: false,
    length: 100,
  })
  name: string;

  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    type: 'longtext',
  })
  firstParagraph: string;

  @Column({
    type: 'longtext',
  })
  secondParagraph: string;

  @Column({
    type: 'enum',
    enum: LanguageEnum,
    nullable: false,
  })
  language: LanguageEnum;
}
