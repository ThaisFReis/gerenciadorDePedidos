import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const db = new Pool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "user",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_DATABASE || "database",
    port: 5432
});
  
export default db;