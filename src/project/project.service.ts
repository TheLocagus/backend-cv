import { Injectable } from '@nestjs/common';
import { Project } from './project.entity';
import {
  LanguageEnum,
  ProjectResponseInterface,
} from '../types';

@Injectable()
export class ProjectService {
  async findAll(endpoint: LanguageEnum): Promise<ProjectResponseInterface> {
    try {
      const projects = await Project.find({
        where: { language: endpoint },
        order: { id: 'ASC' },
      });
      return {
        projects,
        title: endpoint === 'eng' ? 'My projects' : 'Moje projekty',
      };
    } catch (e) {
      throw new Error('Something went wrong in ProjectService findAll.');
    }
  }
}
