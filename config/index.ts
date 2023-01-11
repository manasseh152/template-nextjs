import 'dotenv/config';

export default {
  production: process.env.NODE_ENV! === 'production',
  dbHost: process.env.DB_HOST!,
  dbUser: process.env.DB_USER!,
  dbPassword: process.env.DB_PASS!,
  dbName: process.env.DB_NAME!,
  dbPort: process.env.DB_PORT! as unknown as number,
} as const;
