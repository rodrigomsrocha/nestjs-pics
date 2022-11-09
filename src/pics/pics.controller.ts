import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PublishPicDto } from './dto/publish-pic.dto';
import { PicsService } from './pics.service';
import { Pic } from './task.model';

@Controller('pics')
export class PicsController {
  constructor(private picsService: PicsService) {}

  @Post()
  publishPic(@Body() publishPicDto: PublishPicDto): Pic {
    return this.picsService.publishPic(publishPicDto);
  }

  @Get()
  getAllPics(): Pic[] {
    return this.picsService.getAllPics();
  }

  @Get(':id')
  getPicById(@Param('id') id: string) {
    return this.picsService.getPicByID(id);
  }

  @Patch(':id/description')
  updatePicDescription(
    @Param('id') id: string,
    @Body('description') description: string,
  ) {
    return this.picsService.updatePicDescription(id, description);
  }

  @Delete(':id')
  deletePic(@Param('id') id: string): void {
    return this.picsService.deletePic(id);
  }
}
