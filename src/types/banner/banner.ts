import { LanguageEnum } from '../project';

export interface BannerInterface {
  id: number;
  name: string;
  title: string;
  firstParagraph: string;
  secondParagraph: string;
  language: LanguageEnum;
}

export interface BannerResponseInterface {
  banner: BannerInterface;
}
