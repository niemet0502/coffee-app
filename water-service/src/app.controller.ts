import { Controller, Get, Param } from '@nestjs/common';
import { Water } from 'entities/water.entity';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  async getWaterByName(@Param('name') name: string): Promise<Water | null> {
    return await this.appService.findByName(name);
  }
}
