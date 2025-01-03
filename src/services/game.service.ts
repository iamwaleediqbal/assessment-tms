
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Game, Move, Player, Prisma } from '@prisma/client';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async game(
    gameWhereUniqueInput: Prisma.GameWhereUniqueInput,
  ): Promise<Game | null> {
    return this.prisma.game.findUnique({
      where: gameWhereUniqueInput,
      include: {
        players: {
          where: {
            moves: {}
          },
          include: {
            moves: true
          }
        }
      },
    });
  }

  async movesHistory(
    gameWhereUniqueInput: Prisma.GameWhereUniqueInput,
  ): Promise<Game | null> {
    return this.prisma.game.findUnique({
      where: gameWhereUniqueInput,
      include: {
        players: {
          include: {
            moves: true
          }
        }
      },
    });
  }

  async createGame(): Promise<Game> {
    return this.prisma.game.create({
      data: {
          players: {
            create: [
              {
                color: "white"
              },
              {
                color: "black"
              }
            ]
          }
      }
    });

  }
}
