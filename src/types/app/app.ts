import { ProjectResponseInterface } from '../project';
import { ContactResponseInterface } from '../contact';
import { BannerResponseInterface } from '../banner';

export type DataResponseType =
  | {
      projects: ProjectResponseInterface;
      contacts: ContactResponseInterface;
      banner: BannerResponseInterface;
      techTitle: 'Technology stack' | 'Stack technologiczny';

      success: true;
    }
  | {
      success: false;
    };
