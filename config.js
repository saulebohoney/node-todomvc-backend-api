require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'postgresql://dev:dev@localhost/todos-app';

exports.DATABASE = {
  client: 'pg',
  connection: DATABASE_URL,
  // debug: true
};

exports.PORT = process.env.PORT || 8080; 