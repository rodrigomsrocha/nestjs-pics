import { IsOptional, IsString } from 'class-validator';

export class GetPicsFilterDto {
  @IsOptional()
  @IsString()
  search?: string;
}
