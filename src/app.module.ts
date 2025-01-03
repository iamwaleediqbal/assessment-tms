import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GameService } from './services/game.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, GameService],
})
export class AppModule {}
