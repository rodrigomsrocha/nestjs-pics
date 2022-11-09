import { IsNotEmpty } from 'class-validator';

export class PublishPicDto {
  @IsNotEmpty()
  pic_url: string;
  title: string;
  description: string;
}
