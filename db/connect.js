const { Pool } = require('pg');
const connectionString = 'postgresql://postgres@localhost:5432/mvp2'

const pool = new Pool({
  connectionString,
});

// needed?
pool.connect()

module.exports = pool;


