import { Module } from '@nestjs/common';
import { MealsCategoriesService } from './meals-categories.service';
import { MealsCategoriesController } from './meals-categories.controller';

@Module({
  controllers: [MealsCategoriesController],
  providers: [MealsCategoriesService]
})
export class MealsCategoriesModule {}
