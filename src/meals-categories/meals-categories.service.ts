import { Injectable } from '@nestjs/common';
import { CreateMealsCategoryDto } from './dto/create-meals-category.dto';
import { UpdateMealsCategoryDto } from './dto/update-meals-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MealsCategoriesService {
  constructor(private prisma: PrismaService) {}
  async create(createMealsCategoryDto: CreateMealsCategoryDto) {
    const mealCategory = this.prisma.mealCategory.create({
      data: {
        name: createMealsCategoryDto.name,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return mealCategory;
  }

  findAll() {
    return `This action returns all mealsCategories`;
  }

  findOne(id: string) {
    return `This action returns a #${id} mealsCategory`;
  }

  update(id: string, updateMealsCategoryDto: UpdateMealsCategoryDto) {
    return `This action updates a #${id} mealsCategory`;
  }

  remove(id: string) {
    return `This action removes a #${id} mealsCategory`;
  }
}
