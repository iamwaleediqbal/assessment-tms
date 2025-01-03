
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { GameService } from './services/game.service';
import { Game as GameModel, Player as PlayerModel, Move as MoveModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly gameService: GameService,
  ) {}

//   POST /api/games - Create new game
// GET /api/games/:id - Get game details with current state
// POST /api/games/:id/moves - Make a move
// GET /api/games/:id/moves - Get move history
// GET /api/games/:id/analysis - a move analysis summary for the game

  @Post('api/games')
  async createGame(): Promise<GameModel> {
    return this.gameService.createGame();
  }

  @Post('api/games/:id/moves')
  async moveInGame(): Promise<GameModel> {
    return this.gameService.createGame();
  }

  @Get('api/games/:id')
  async getGameById(@Param('id') id: string): Promise<GameModel> {
    return this.gameService.game({ id: Number(id) });
  }

  @Get('api/games/:id/moves')
  async getMovesByGameId(@Param('id') id: string): Promise<GameModel> {
    return this.gameService.movesHistory({ id: Number(id) });
  }

  @Get('api/games/:id/analysis')
  async getAnalysisByGameId(@Param('id') id: string): Promise<GameModel> {
    return this.gameService.game({ id: Number(id) });
  }

}