import { Injectable, NotFoundException } from '@nestjs/common';
import { Pic as PicModel } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PicsService {
  constructor(private prisma: PrismaService) {}
  // publishPic({ pic_url, title, description }: PublishPicDto): PicModel {
  //   const pic: PicModel = {
  //     id: randomUUID(),
  //     pic_url,
  //     title,
  //     description,
  //   };
  //   this.pics.push(pic);
  //   return pic;
  // }
  // getAllPics(): PicModel[] {
  //   return this.pics;
  // }
  // getPicsWithFilters({ search }: GetPicsFilterDto): PicModel[] {
  //   let pics = this.getAllPics();
  //   pics = pics.filter((pic) => {
  //     if (pic.title.includes(search) || pic.description.includes(search)) {
  //       return true;
  //     }
  //     return false;
  //   });
  //   return pics;
  // }

  async getPicById(id: string): Promise<PicModel> {
    const found_pic = await this.prisma.pic.findUnique({
      where: {
        id,
      },
    });

    if (!found_pic) {
      throw new NotFoundException(`Pic with id "${id}" not found`);
    }

    return found_pic;
  }

  // deletePic(id: string): void {
  //   const found_pic = this.getPicByID(id);
  //   this.pics = this.pics.filter((pic) => pic.id !== found_pic.id);
  // }
}
