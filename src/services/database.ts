import { PoolClient } from 'pg';
const { Pool } = require('pg');

export const pool: PoolClient = new Pool({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'admin',
  database: 'clubclub',
});

module.exports = {
  pool,
};
