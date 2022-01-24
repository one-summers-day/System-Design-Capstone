const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: "postgres",
  password: "1111",
  host: "3.89.251.242",
  database: "products"
});

module.exports = pool;
pool.connect().catch(err => {
  console.log(err)
})