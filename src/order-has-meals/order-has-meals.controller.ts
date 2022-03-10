import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderHasMealsService } from './order-has-meals.service';
import { CreateOrderHasMealDto } from './dto/create-order-has-meal.dto';
import { UpdateOrderHasMealDto } from './dto/update-order-has-meal.dto';

@Controller('order-has-meals')
export class OrderHasMealsController {
  constructor(private readonly orderHasMealsService: OrderHasMealsService) {}

  @Post()
  create(@Body() createOrderHasMealDto: CreateOrderHasMealDto) {
    return this.orderHasMealsService.create(createOrderHasMealDto);
  }

  @Get()
  findAll() {
    return this.orderHasMealsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderHasMealsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderHasMealDto: UpdateOrderHasMealDto) {
    return this.orderHasMealsService.update(id, updateOrderHasMealDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderHasMealsService.remove(id);
  }
}
