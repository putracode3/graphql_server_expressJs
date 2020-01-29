const express = require('express');
const cors = require('cors')
const graphqlHTTP = require('express-graphql');
const schema_api_spacex = require('./schema.js');

const graphql = require("graphql");
const { GraphQLSchema } = graphql;
const { query } = require("./schemas/queries");
const { mutation } = require("./schemas/mutations");
const schema = new GraphQLSchema({
  query,
  mutation
});

const app = express();

app.use(cors())

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema_api_spacex,
    graphiql: true,
  }),
);

app.use(
  '/',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on pon ${PORT}`));