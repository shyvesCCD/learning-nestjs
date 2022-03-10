import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MealsCategoriesService } from './meals-categories.service';
import { CreateMealsCategoryDto } from './dto/create-meals-category.dto';
import { UpdateMealsCategoryDto } from './dto/update-meals-category.dto';

@Controller('meals-categories')
export class MealsCategoriesController {
  constructor(
    private readonly mealsCategoriesService: MealsCategoriesService,
  ) {}

  @Post()
  create(@Body() createMealsCategoryDto: CreateMealsCategoryDto) {
    return this.mealsCategoriesService.create(createMealsCategoryDto);
  }

  @Get()
  findAll() {
    return this.mealsCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mealsCategoriesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMealsCategoryDto: UpdateMealsCategoryDto,
  ) {
    return this.mealsCategoriesService.update(id, updateMealsCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mealsCategoriesService.remove(id);
  }
}
