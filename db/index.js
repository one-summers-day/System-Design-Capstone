const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: "postgres",
  password: "root",
  host: "localhost",
  database: "products"
});

module.exports = pool;
pool.connect().catch(err => {
  console.log(err)
})