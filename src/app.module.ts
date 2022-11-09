import { Module } from '@nestjs/common';
import { PicsModule } from './pics/pics.module';

@Module({
  imports: [PicsModule],
})
export class AppModule {}
