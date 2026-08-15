import { Module } from '@nestjs/common';
import { CatalogModule } from './catalog/catalog.module';
import { LeadsModule } from './leads/leads.module';

@Module({
  imports: [CatalogModule, LeadsModule],
})
export class AppModule {}
