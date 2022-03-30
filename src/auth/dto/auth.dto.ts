import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class AuthDto {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @MinLength(6)
  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
}
