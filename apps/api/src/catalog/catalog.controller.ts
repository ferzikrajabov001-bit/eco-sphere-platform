import { Controller, Get, Query } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get('products')
  getProducts(
    @Query('category') category?: string,
    @Query('search') search?: string,
    @Query('page') page?: number,
  ) {
    return this.catalogService.getProducts({
      categorySlug: category,
      search,
      page: Number(page) || 1,
    });
  }
}
