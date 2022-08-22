import { ProjectInterface } from '../project';

export interface ContactInterface {
  id: string;
  imgName: string;
  value: string;
}

export type ContactResponseType =
  | {
      contacts: ContactInterface[];
      success: true;
    }
  | {
      success: false;
    };
