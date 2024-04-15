import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, forkJoin, map } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FinancialService {
  private readonly polygonApiKey: string;
  private readonly iexCloudApiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.polygonApiKey = this.configService.get<string>('POLYGON_API_KEY');
    this.iexCloudApiKey = this.configService.get<string>('IEXCLOUD_API_KEY');
  }

  getStockData(symbol: string = 'AAPL'): Observable<any[]> {
    const polygonUrl = `https://api.polygon.io/v1/open-close/${symbol}/2023-01-09?adjusted=true&apiKey=${this.polygonApiKey}`;
    const iexCloudUrl = `https://cloud.iexapis.com/stable/stock/${symbol}/chart/1d?token=${this.iexCloudApiKey}`;

    const polygonRequest = this.httpService
      .get(polygonUrl)
      .pipe(map((response) => response.data));

    const iexCloudRequest = this.httpService
      .get(iexCloudUrl)
      .pipe(map((response) => response.data));
    return forkJoin([polygonRequest, iexCloudRequest]);
  }
}
