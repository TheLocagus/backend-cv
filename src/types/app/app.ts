import { ProjectResponseType } from '../project';
import { ContactResponseType } from '../contact/contact';

export type DataResponseType =
  | {
      projects: ProjectResponseType;
      contacts: ContactResponseType;
      success: true;
    }
  | {
      success: false;
    };
