import { Body, Controller, Get, Post } from '@nestjs/common';
import { PicsService } from './pics.service';
import { Pic } from './task.model';

@Controller('pics')
export class PicsController {
  constructor(private picsService: PicsService) {}

  @Get()
  getAllPics(): Pic[] {
    return this.picsService.getAllPics();
  }

  @Post()
  publishPic(
    @Body('pic_url') pic_url: string,
    @Body('description') description: string,
  ): Pic {
    return this.picsService.publishPic(pic_url, description);
  }
}
