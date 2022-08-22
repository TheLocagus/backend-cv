import { Injectable } from '@nestjs/common';
import { Project } from './project.entity';
import { ProjectResponseType } from '../types';

@Injectable()
export class ProjectService {
  async findAll(): Promise<ProjectResponseType> {
    try {
      const projects = await Project.find({
        order: { id: 'ASC' },
      });
      return {
        projects,
        success: true,
      };
    } catch (e) {
      return {
        success: false,
      };
    }
  }
}
