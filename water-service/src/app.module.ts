import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Water } from 'entities/water.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'water-db',
      port: 5432,
      username: 'admin',
      password: 'passer',
      database: 'water',
      entities: [Water],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Water]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
