import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrderHasMealDto {
  @IsNumber()
  @IsNotEmpty()
  readonly quantity: number;

  @IsNotEmpty()
  @IsString()
  readonly orderId: string;

  @IsString()
  @IsNotEmpty()
  readonly mealId: string;
}
