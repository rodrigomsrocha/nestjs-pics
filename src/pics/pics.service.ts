import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { Pic } from './task.model';

@Injectable()
export class PicsService {
  private pics: Pic[] = [];

  getAllPics() {
    return this.pics;
  }

  publishPic(pic_url: string, description: string): Pic {
    const pic: Pic = {
      id: randomUUID(),
      pic_url,
      description,
    };
    this.pics.push(pic);

    return pic;
  }
}
