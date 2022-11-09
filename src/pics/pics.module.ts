import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PicsController } from './pics.controller';
import { PicsService } from './pics.service';

@Module({
  controllers: [PicsController],
  providers: [PicsService, PrismaService],
})
export class PicsModule {}
