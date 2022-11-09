import { Injectable, NotFoundException } from '@nestjs/common';
import { Pic as PicModel } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { GetPicsFilterDto } from './dto/get-pics-filter.dto';
import { PublishPicDto } from './dto/publish-pic.dto';

@Injectable()
export class PicsService {
  private pics: PicModel[] = [];

  publishPic({ pic_url, title, description }: PublishPicDto): PicModel {
    const pic: PicModel = {
      id: randomUUID(),
      pic_url,
      title,
      description,
    };
    this.pics.push(pic);

    return pic;
  }

  getAllPics(): PicModel[] {
    return this.pics;
  }

  getPicsWithFilters({ search }: GetPicsFilterDto): PicModel[] {
    let pics = this.getAllPics();

    pics = pics.filter((pic) => {
      if (pic.title.includes(search) || pic.description.includes(search)) {
        return true;
      }
      return false;
    });

    return pics;
  }

  getPicByID(id: string): PicModel {
    const found_pic = this.pics.find((pic) => pic.id === id);

    if (!found_pic) {
      throw new NotFoundException(`Pic with id "${id}" not found`);
    }

    return found_pic;
  }

  updatePicTitle(id: string, title: string): PicModel {
    const pic = this.getPicByID(id);
    pic.title = title;
    return pic;
  }

  deletePic(id: string): void {
    const found_pic = this.getPicByID(id);
    this.pics = this.pics.filter((pic) => pic.id !== found_pic.id);
  }
}
