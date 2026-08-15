import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CatalogService {
  constructor(private prisma: PrismaService) {}

  async getProducts(filters: {
    categorySlug?: string;
    search?: string;
    page?: number;
    limit?: number;
  }) {
    const where: Prisma.ProductWhereInput = {
      status: 'ACTIVE',
    };

    if (filters.categorySlug) {
      where.category = { slug: filters.categorySlug };
    }
    
    if (filters.search) {
      where.OR = [
        { name: { contains: filters.search, mode: 'insensitive' } },
        { sku: { contains: filters.search, mode: 'insensitive' } },
      ];
    }

    const skip = ((filters.page || 1) - 1) * (filters.limit || 20);

    const [items, total] = await Promise.all([
      this.prisma.product.findMany({
        where,
        include: { category: true },
        skip,
        take: filters.limit || 20,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.product.count({ where }),
    ]);

    return {
      items,
      meta: {
        total,
        page: filters.page || 1,
        limit: filters.limit || 20,
      },
    };
  }
}
