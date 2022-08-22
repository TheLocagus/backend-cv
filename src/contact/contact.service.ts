import { Injectable } from '@nestjs/common';
import { Contact } from './contact.entity';
import { ContactResponseType } from '../types/contact/contact';

@Injectable()
export class ContactService {
  async findAll(): Promise<ContactResponseType> {
    try {
      const contacts = await Contact.find({
        order: { id: 'ASC' },
      });
      return {
        contacts,
        success: true,
      };
    } catch (e) {
      return {
        success: false,
      };
    }
  }
}
