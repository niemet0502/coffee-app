import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from 'entities/coffee-type.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'coffee-db',
      port: 5432,
      username: 'admin',
      password: 'passer',
      database: 'coffee',
      entities: [Coffee],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Coffee]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
