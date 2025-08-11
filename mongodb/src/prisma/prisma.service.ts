/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/require-await */
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private static instance: PrismaService;

  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
    });
    
    if (!PrismaService.instance) {
      PrismaService.instance = this;
    }
    
    return PrismaService.instance;
  }

  async onModuleInit() {
    if (process.env.NODE_ENV !== 'test') {
      await this.$connect();
    }
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit' as never, async () => {
      await app.close();
    });
  }
}