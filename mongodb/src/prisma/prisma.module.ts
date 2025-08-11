/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [
    {
      provide: PrismaService,
      useFactory: async () => {
        const prisma = new PrismaService();
        await prisma.onModuleInit();
        return prisma;
      },
    },
  ],
  exports: [PrismaService],
})
export class PrismaModule {}