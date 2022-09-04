import { forwardRef, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProjectModule } from './project/project.module';
import { ContactModule } from './contact/contact.module';
import { BannerService } from './banner/banner.service';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => ProjectModule),
    forwardRef(() => ContactModule),
  ],
  controllers: [AppController],
  providers: [AppService, BannerService],
})
export class AppModule {}
