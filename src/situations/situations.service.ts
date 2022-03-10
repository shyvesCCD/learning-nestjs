import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSituationDto } from './dto/create-situation.dto';
import { UpdateSituationDto } from './dto/update-situation.dto';

@Injectable()
export class SituationsService {
  constructor(private prisma: PrismaService) {}
  async create(createSituationDto: CreateSituationDto) {
    const situation = await this.prisma.situation.create({
      data: createSituationDto,
    });
    return situation;
  }

  findAll() {
    return `This action returns all situations`;
  }

  findOne(id: string) {
    return `This action returns a #${id} situation`;
  }

  update(id: string, updateSituationDto: UpdateSituationDto) {
    return `This action updates a #${id} situation`;
  }

  remove(id: string) {
    return `This action removes a #${id} situation`;
  }
}
