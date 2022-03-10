import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSituationDto {
  @IsString()
  @IsNotEmpty()
  readonly description: string;
}
