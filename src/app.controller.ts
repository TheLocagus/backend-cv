import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { LanguageEnum } from './types';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('/')
  // getData() {
  //   return this.appService.getData(LanguageEnum.polish);
  // }

  @Get('/lan/:eng')
  getDataInEng(@Param('eng') eng: LanguageEnum.english) {
    return this.appService.getData(eng);
  }
}
