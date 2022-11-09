import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
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
  getPics(@Query('search') search: string): Pic[] {
    if (search) {
      return this.picsService.getPicsWithFilters(search);
    } else {
      return this.picsService.getAllPics();
    }
  }

  @Get(':id')
  getPicById(@Param('id') id: string) {
    return this.picsService.getPicByID(id);
  }

  @Patch(':id/title')
  updatePicTitle(@Param('id') id: string, @Body('title') title: string) {
    return this.picsService.updatePicTitle(id, title);
  }

  @Delete(':id')
  deletePic(@Param('id') id: string): void {
    return this.picsService.deletePic(id);
  }
}
