import { Injectable } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MealsService {
  constructor(private prisma: PrismaService) {}
  async create(createMealDto: CreateMealDto) {
    const meal = await this.prisma.meal.create({
      data: {
        name: createMealDto.name,
        description: createMealDto.description,
        price: createMealDto.price,
        image: createMealDto.image,
        available: createMealDto.available,
        mealCategoryId: createMealDto.mealCategoryId,
      },
    });
    return meal;
  }

  findAll() {
    return `This action returns all meals`;
  }

  findOne(id: string) {
    return `This action returns a #${id} meal`;
  }

  update(id: string, updateMealDto: UpdateMealDto) {
    return `This action updates a #${id} meal`;
  }

  remove(id: string) {
    return `This action removes a #${id} meal`;
  }
}
