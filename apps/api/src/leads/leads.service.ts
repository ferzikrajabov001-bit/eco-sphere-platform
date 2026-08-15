import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLeadDto } from './dto/create-lead.dto';

@Injectable()
export class LeadsService {
  private readonly logger = new Logger(LeadsService.name);

  constructor(private prisma: PrismaService) {}

  async createLead(dto: CreateLeadDto) {
    // 1. Сохраняем в БД
    const lead = await this.prisma.lead.create({
      data: {
        source: dto.source,
        companyName: dto.companyName,
        inn: dto.inn || null,
        contactName: dto.contactName,
        phone: dto.phone,
        email: dto.email,
        message: dto.comment,
        products: dto.products as any, // JSONB
        status: 'NEW',
      },
    });

    // 2. Логируем (в будущем тут будет отправка в Telegram/Email)
    this.logger.log(`New lead created: ${lead.id} for ${dto.companyName}`);

    return { success: true, id: lead.id };
  }

  async findAll() {
    return this.prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}
