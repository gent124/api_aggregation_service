import { registerAs } from '@nestjs/config';

export interface AppConfig {
  polygonKey: string;
}

export const appConfigFactory = registerAs('app', () => ({
  polygonKey: process.env.POLYGON_API_KEY,
}));
