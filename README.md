# Server Graphql base on ExpressJs dan Postgres

Project ini untuk belajar membuat server Graphql [Query, Mutation] dengan menggunakan ExpressJs dan database Postgres.

###  Link reference

  - https://blog.harveydelaney.com/setting-up-graphql-express-and-postgresql/
  - https://www.apollographql.com/docs/react/

###  Pre-require
  - NodeJs
  - NPM
  - Postgres

### Installation
Install the dependencies and devDependencies.

```sh
$ npm i
```

Start server dev

```sh
$ npm run dev
```

### Pilihan run script

| Pilihan | Keterangan |
| ------ | ------ |
| start | `"node app.js"` |
| server | `"nodemon app.js"` |
| client | `"npm start --prefix ../../react_js/spacex"` |
| dev | `"concurrently \"npm run server\" \"npm run client\""` |