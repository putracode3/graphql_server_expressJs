require('dotenv').config()
const pgPromise = require('pg-promise');

const pgp = pgPromise({
  connect(client, dc, useCount) {
    const cp = client.connectionParameters;
    console.log(`>> Connected to database:`, cp.database);
  },
  disconnect(client, dc) {
    const cp = client.connectionParameters;
    console.log('>> Disconnecting from database:', cp.database);
  }
}); // Empty object means no additional config required

const config = {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
};

const db = pgp(config);

db.one('select * from users limit 1')
    .then(res => {
      console.log(res);
    })
    .catch(function(error){
      console.log( error );
    });

exports.db = db;
