import { Controller, Get, Query } from '@nestjs/common';
import { FinancialService } from './financial.service';

@Controller('financial')
export class FinancialController {
  constructor(private readonly financialService: FinancialService) {}

  @Get('stocks')
  async getStockData(@Query('symbol') symbol: string): Promise<any> {
    return this.financialService.getStockData(symbol);
  }
}
