import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { MealsModule } from './meals/meals.module';
import { MealsCategoriesModule } from './meals-categories/meals-categories.module';
import { SituationsModule } from './situations/situations.module';
import { OrdersModule } from './orders/orders.module';
import { OrderHasMealsModule } from './order-has-meals/order-has-meals.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
    MealsModule,
    MealsCategoriesModule,
    SituationsModule,
    OrdersModule,
    OrderHasMealsModule,
    UserModule,
  ],
})
export class AppModule {}
