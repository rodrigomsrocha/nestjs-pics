import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PublishPicDto } from './dto/publish-pic.dto';
import { Pic } from './task.model';

@Injectable()
export class PicsService {
  private pics: Pic[] = [];

  publishPic({ pic_url, description }: PublishPicDto): Pic {
    const pic: Pic = {
      id: randomUUID(),
      pic_url,
      description,
    };
    this.pics.push(pic);

    return pic;
  }

  getAllPics(): Pic[] {
    return this.pics;
  }

  getPicByID(id: string): Pic {
    return this.pics.find((pic) => pic.id === id);
  }

  updatePicDescription(id: string, description: string): Pic {
    const pic = this.getPicByID(id);
    pic.description = description;
    return pic;
  }

  deletePic(id: string): void {
    this.pics = this.pics.filter((pic) => pic.id !== id);
  }
}
