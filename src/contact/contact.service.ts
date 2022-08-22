import { Injectable } from '@nestjs/common';
import { Contact } from './contact.entity';
import { ContactResponseInterface } from '../types';

@Injectable()
export class ContactService {
  async findAll(): Promise<ContactResponseInterface> {
    try {
      const contacts = await Contact.find({
        order: { id: 'ASC' },
      });
      return {
        contacts,
      };
    } catch (e) {
      throw new Error('Something went wrong in ContactService findAll');
    }
  }
}
