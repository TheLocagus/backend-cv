import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProjectModule } from './project/project.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [DatabaseModule, ProjectModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
