const pg = require('pg');
const conString = 'pg://postgres:123@localhost:5432/regist';
const client = new pg.Client(conString);
client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, Sex VARCHAR(40) not null, Research VARCHAR(40) not null, Age VARCHAR(40) not null, Region VARCHAR(40) not null)');
query.on('end', () => { client.end(); });