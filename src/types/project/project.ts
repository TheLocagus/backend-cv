import { Project } from '../../project/project.entity';

export interface ProjectInterface {
  id?: string | number | undefined;
  title: string;
  describe: string;
  tech: string;
  frontUrl: string;
  backUrl: string;
  demoUrl: string;
  language: LanguageEnum;
}

export interface ProjectResponseInterface {
  projects: ProjectInterface[];
  title: 'My projects' | 'Moje projekty';
}

export enum LanguageEnum {
  polish = 'pl',
  english = 'eng',
}
