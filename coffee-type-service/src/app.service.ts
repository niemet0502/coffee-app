import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from 'entities/coffee-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async findByName(name: string) {
    try {
      const coffee = await this.coffeeRepository.findOne({ where: { name } });

      return coffee;
    } catch (error) {
      throw error; // Ensure error is properly thrown and handled by the caller
    }
  }
}
