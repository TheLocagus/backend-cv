import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ProjectService } from './project/project.service';
import { ContactService } from './contact/contact.service';
import { ProjectResponseType } from './types';
import { ContactResponseType } from './types/contact/contact';
import { checkIsContact, checkIsProject } from './utils/checkIs';
import { DataResponseType } from './types/app/app';

@Injectable()
export class AppService {
  constructor(
    @Inject(forwardRef(() => ProjectService))
    private projectService: ProjectService,
    @Inject(forwardRef(() => ContactService))
    private contactService: ContactService,
  ) {}

  async getData(): Promise<DataResponseType> {
    const projects: ProjectResponseType = await this.projectService.findAll();
    const contacts: ContactResponseType = await this.contactService.findAll();

    if (!projects.success || !contacts.success) {
      throw new Error('Something went wrong in getData in appService.');
    }

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
