import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const { HOST_DB, USER_DB, PASSWORD_DB, DATABASE_DB } = process.env;

const connection = mysql.createPool({
  host: HOST_DB,
  user: USER_DB,
  password: PASSWORD_DB,
  database: DATABASE_DB,
});
export default connection;