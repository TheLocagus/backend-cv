import {
  Controller,
  Get,
  Post,
} from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @Get()
  findAll() {
    return this.contactService.findAll();
  }
}
