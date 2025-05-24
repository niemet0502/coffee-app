import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Water } from 'entities/water.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Water)
    private readonly waterRepository: Repository<Water>,
  ) {}

  async findByName(name: string) {
    try {
      const result = await this.waterRepository.findOne({ where: { name } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
