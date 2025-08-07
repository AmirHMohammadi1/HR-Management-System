/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module'; // ماژول Prisma رو import کن

@Module({
  imports: [PrismaModule], // دسترسی به PrismaService رو فراهم می‌کنه
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}