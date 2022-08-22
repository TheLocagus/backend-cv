import { ProjectResponseInterface } from '../project';
import { ContactResponseInterface } from '../contact';

export type DataResponseType =
  | {
      projects: ProjectResponseInterface;
      contacts: ContactResponseInterface;
      success: true;
    }
  | {
      success: false;
    };
