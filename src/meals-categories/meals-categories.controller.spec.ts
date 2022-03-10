import { Test, TestingModule } from '@nestjs/testing';
import { MealsCategoriesController } from './meals-categories.controller';
import { MealsCategoriesService } from './meals-categories.service';

describe('MealsCategoriesController', () => {
  let controller: MealsCategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealsCategoriesController],
      providers: [MealsCategoriesService],
    }).compile();

    controller = module.get<MealsCategoriesController>(MealsCategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
