import { Injectable } from '@nestjs/common';
import { LanguageEnum } from '../types';
import { BannerResponseInterface } from '../types/banner';
import { Banner } from './banner.entity';

@Injectable()
export class BannerService {
  async findAll(endpoint: LanguageEnum): Promise<BannerResponseInterface> {
    try {
      console.log(endpoint);

      const banner = await Banner.findOneOrFail({
        where: { language: endpoint },
      });
      return {
        banner,
      };
    } catch (e) {
      throw new Error('Something went wrong in BannerService findAll.');
    }
  }
}
