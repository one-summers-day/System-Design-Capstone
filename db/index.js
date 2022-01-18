const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: "postgres",
  password: "root",
  host: "localhost",
  database: "products",
  port: 3000
});

module.exports = pool;