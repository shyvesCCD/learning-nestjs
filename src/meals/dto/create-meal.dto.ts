import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsBoolean,
  IsNumber,
} from 'class-validator';

export class CreateMealDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsString()
  @IsOptional()
  readonly image: string;

  @IsBoolean()
  @IsOptional()
  readonly available: boolean;

  @IsString()
  @IsNotEmpty()
  readonly mealCategoryId: string;
}
