/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // مهم: این سرویس رو در ماژول‌های دیگه قابل تزریق می‌کنه
})
export class PrismaModule {}