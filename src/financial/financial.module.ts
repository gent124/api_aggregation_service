import { Module } from '@nestjs/common';
import { FinancialController } from './financial.controller';
import { FinancialService } from './financial.service';

@Module({
  providers: [FinancialService],
  controllers: [FinancialController],
})
export class FinanceModule {}
