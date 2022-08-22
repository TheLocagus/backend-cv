import { Project } from '../../project/project.entity';

export interface ProjectInterface {
  id?: string | number | undefined;
  title: string;
  describe: string;
  tech: string;
  frontUrl: string;
  backUrl: string;
  demoUrl: string;
}

export type ProjectResponseType =
  | {
      projects: ProjectInterface[];
      success: true;
    }
  | {
      success: false;
    };