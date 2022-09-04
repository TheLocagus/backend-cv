import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ProjectService } from './project/project.service';
import { ContactService } from './contact/contact.service';
import { checkIsContact, checkIsProject } from './utils/checkIs';
import { DataResponseType } from './types';
import {
  ContactResponseInterface,
  LanguageEnum,
  ProjectResponseInterface,
} from './types';
import { BannerResponseInterface } from './types/banner';
import { BannerService } from './banner/banner.service';

@Injectable()
export class AppService {
  constructor(
    @Inject(forwardRef(() => ProjectService))
    private projectService: ProjectService,
    @Inject(forwardRef(() => ContactService))
    private contactService: ContactService,
    @Inject(forwardRef(() => BannerService))
    private bannerService: BannerService,
  ) {}

  async getData(endpoint?: LanguageEnum): Promise<DataResponseType> {
    const projects: ProjectResponseInterface =
      await this.projectService.findAll(endpoint);
    const contacts: ContactResponseInterface =
      await this.contactService.findAll(endpoint);
    const banner: BannerResponseInterface = await this.bannerService.findAll(
      endpoint,
    );

    if (
      checkIsProject(projects.projects[0]) &&
      checkIsContact(contacts.contacts[0]) /*@TODO Do poprawy*/
    ) {
      return {
        projects,
        contacts,
        banner,
        techTitle:
          endpoint === 'eng' ? 'Technology stack' : 'Stack technologiczny',
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}
