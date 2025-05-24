import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  async getCoffeeByName(@Param('name') name: string) {
    return await this.appService.findByName(name);
  }
}
