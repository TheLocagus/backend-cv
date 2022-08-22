import { Injectable } from '@nestjs/common';
import { Project } from './project.entity';
import { ProjectResponseInterface } from '../types';

@Injectable()
export class ProjectService {
  async findAll(): Promise<ProjectResponseInterface> {
    try {
      const projects = await Project.find({
        order: { id: 'ASC' },
      });
      return {
        projects,
      };
    } catch (e) {
      throw new Error('Something went wrong in ProjectService findAll.');
    }
  }
}
