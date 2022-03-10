import { Test, TestingModule } from '@nestjs/testing';
import { MealsCategoriesService } from './meals-categories.service';

describe('MealsCategoriesService', () => {
  let service: MealsCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealsCategoriesService],
    }).compile();

    service = module.get<MealsCategoriesService>(MealsCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
