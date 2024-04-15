import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { FinancialController } from './financial/financial.controller';
import { FinancialService } from './financial/financial.service';
import { appConfigFactory } from './app.config';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      load: [appConfigFactory],
    }),
  ],
  controllers: [FinancialController],
  providers: [FinancialService],
})
export class AppModule {}
