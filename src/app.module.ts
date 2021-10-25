import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// controllers
import { AppController } from './app.controller';
import { CatsController } from './cats/cats.controller';
// services
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
