import { Module } from '@nestjs/common';
import { PicsController } from './pics.controller';
import { PicsService } from './pics.service';

@Module({
  controllers: [PicsController],
  providers: [PicsService],
})
export class PicsModule {}
