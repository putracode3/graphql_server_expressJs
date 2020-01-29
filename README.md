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

| Pilihan | Script | Keterangan |
| ------ | ------ | ------ |
| start | `"node app.js"` | run server normal |
| server | `"nodemon app.js"` | run server dengan hot-reload / auto refresh server |
| client | `"npm start --prefix ../../react_js/spacex"` | menjalankan frontend ReactJs letak folder di `../../react_js/spacex` |
| dev | `"concurrently \"npm run server\" \"npm run client\""` | menjalankan script server dan client |

###  Endpoint graphql
| URL | Keterangan |
| ------ | ------ |
| localhost:5000/graphql | Endpoint [API SpaceX](https://github.com/r-spacex/SpaceX-API) |
| localhost:5000 | Endpoint database local postgres |