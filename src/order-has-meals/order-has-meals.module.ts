import { Module } from '@nestjs/common';
import { OrderHasMealsService } from './order-has-meals.service';
import { OrderHasMealsController } from './order-has-meals.controller';

@Module({
  controllers: [OrderHasMealsController],
  providers: [OrderHasMealsService]
})
export class OrderHasMealsModule {}
