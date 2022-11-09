import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PublishPicDto } from './dto/publish-pic.dto';
import { Pic } from './task.model';

@Injectable()
export class PicsService {
  private pics: Pic[] = [];

  publishPic({ pic_url, title, description }: PublishPicDto): Pic {
    const pic: Pic = {
      id: randomUUID(),
      pic_url,
      title,
      description,
    };
    this.pics.push(pic);

    return pic;
  }

  getAllPics(): Pic[] {
    return this.pics;
  }

  getPicsWithFilters(search: string): Pic[] {
    let pics = this.getAllPics();

    pics = pics.filter((pic) => {
      if (pic.title.includes(search) || pic.description.includes(search)) {
        return true;
      }
      return false;
    });

    return pics;
  }

  getPicByID(id: string): Pic {
    return this.pics.find((pic) => pic.id === id);
  }

  updatePicTitle(id: string, title: string): Pic {
    const pic = this.getPicByID(id);
    pic.title = title;
    return pic;
  }

  deletePic(id: string): void {
    this.pics = this.pics.filter((pic) => pic.id !== id);
  }
}
