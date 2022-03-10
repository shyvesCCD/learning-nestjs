import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMealsCategoryDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
