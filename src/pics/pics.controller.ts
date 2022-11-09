import { Controller, Get, Param } from '@nestjs/common';
import { Pic as PicModel } from '@prisma/client';
import { PicsService } from './pics.service';

@Controller('pics')
export class PicsController {
  constructor(private picsService: PicsService) {}

  // @Post()
  // publishPic(@Body() publishPicDto: PublishPicDto): PicModel {
  //   return this.picsService.publishPic(publishPicDto);
  // }

  // @Get()
  // getPics(@Query() filterDto: GetPicsFilterDto): PicModel[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.picsService.getPicsWithFilters(filterDto);
  //   } else {
  //     return this.picsService.getAllPics();
  //   }
  // }

  @Get(':id')
  getPicById(@Param('id') id: string): Promise<PicModel> {
    return this.picsService.getPicById(id);
  }

  // @Patch(':id/title')
  // updatePicTitle(
  //   @Param('id') id: string,
  //   @Body('title') title: string,
  // ): PicModel {
  //   return this.picsService.updatePicTitle(id, title);
  // }

  // @Delete(':id')
  // deletePic(@Param('id') id: string): void {
  //   return this.picsService.deletePic(id);
  // }
}
