import { PartialType } from '@nestjs/mapped-types';
import { CreateMealsCategoryDto } from './create-meals-category.dto';

export class UpdateMealsCategoryDto extends PartialType(CreateMealsCategoryDto) {}
