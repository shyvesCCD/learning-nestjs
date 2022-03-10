import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { MealsModule } from './meals/meals.module';
import { MealsCategoriesModule } from './meals-categories/meals-categories.module';
import { SituationsModule } from './situations/situations.module';
import { OrdersModule } from './orders/orders.module';
import { OrderHasMealsModule } from './order-has-meals/order-has-meals.module';

@Module({
  imports: [AuthModule, UsersModule, PrismaModule, MealsModule, MealsCategoriesModule, SituationsModule, OrdersModule, OrderHasMealsModule],
})
export class AppModule {}
