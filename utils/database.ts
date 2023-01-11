import { createPool } from 'mysql2/promise';
import type { PoolOptions } from 'mysql2/typings/mysql';

import config from '@config';

const options: PoolOptions = {
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  port: config.dbPort,
};

const pool = createPool(options);

export async function executeMany<T>(query: string, values: any[]) {
  const [data] = await pool.execute(query, [...values]);
  return data as T[];
}

export async function executeOne<T>(query: string, values: any[]) {
  const [data]: any[] = await pool.execute(query, [...values]);
  return data[0] as T;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
}

export default pool;
