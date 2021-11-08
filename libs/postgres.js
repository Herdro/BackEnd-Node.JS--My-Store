const { Client } = require('pg');

async function getConnection() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'toor',
    database: 'my_store'
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
