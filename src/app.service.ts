import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ProjectService } from './project/project.service';
import { ContactService } from './contact/contact.service';
import { checkIsContact, checkIsProject } from './utils/checkIs';
import { DataResponseType } from './types/app/app';
import { ContactResponseInterface, ProjectResponseInterface } from './types';

@Injectable()
export class AppService {
  constructor(
    @Inject(forwardRef(() => ProjectService))
    private projectService: ProjectService,
    @Inject(forwardRef(() => ContactService))
    private contactService: ContactService,
  ) {}

  async getData(): Promise<DataResponseType> {
    const projects: ProjectResponseInterface =
      await this.projectService.findAll();
    const contacts: ContactResponseInterface =
      await this.contactService.findAll();

    if (
      checkIsProject(projects.projects[0]) &&
      checkIsContact(contacts.contacts[0])
    ) {
      return {
        projects,
        contacts,
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  }
}
