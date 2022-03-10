import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderHasMealDto } from './dto/create-order-has-meal.dto';
import { UpdateOrderHasMealDto } from './dto/update-order-has-meal.dto';

@Injectable()
export class OrderHasMealsService {
  constructor(private prisma: PrismaService) {}
  async create(createOrderHasMealDto: CreateOrderHasMealDto) {
    const orderHasMeals = await this.prisma.orderHasMeal.create({
      data: createOrderHasMealDto,
    });
    return orderHasMeals;
  }

  findAll() {
    return `This action returns all orderHasMeals`;
  }

  findOne(id: string) {
    return `This action returns a #${id} orderHasMeal`;
  }

  update(id: string, updateOrderHasMealDto: UpdateOrderHasMealDto) {
    return `This action updates a #${id} orderHasMeal`;
  }

  remove(id: string) {
    return `This action removes a #${id} orderHasMeal`;
  }
}
