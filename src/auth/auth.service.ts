import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signup(dto: AuthDto) {
    // hashing the password
    const hash = await argon.hash(dto.password);
    try {
      // save user in db
      const user = await this.prisma.user.create({
        data: {
          ...dto,
          password: hash,
        },
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
          orders: true,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials already taken');
        }
      }
    }
  }
  async signin(dto: AuthDto) {
    // find user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // throw a exception if user don't exists
    if (!user) throw new ForbiddenException('Credentials incorrect');

    const passwordMatches = await argon.verify(user.password, dto.password);

    // throw a exeption if password incorrect
    if (!passwordMatches) throw new ForbiddenException('Credentials incorrect');

    return { token: await this.signToken(user.id) };
  }

  private signToken(userId: string): Promise<string> {
    const payload = {
      sub: userId,
    };
    const token = this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: this.config.get('JWT_SECRET'),
    });
    return token;
  }

  verifyToken(token: string) {
    if (!token) {
      throw new ForbiddenException('No token provided');
    }

    return this.jwt
      .verifyAsync(token, {
        secret: this.config.get('JWT_SECRET'),
      })
      .catch(() => {
        throw new UnauthorizedException('Invalid token');
      });
  }
}
