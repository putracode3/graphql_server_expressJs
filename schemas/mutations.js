const graphql = require("graphql");
const db = require("../pgAdaptor").db;
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } = graphql;
const { ProjectType, UserType } = require("./types");

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  type: "Mutation",
  fields: {
    addProject: {
      type: ProjectType,
      args: {
        creatorId: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        const query = `INSERT INTO project(creator_id, created, title, description) VALUES ($1, $2, $3, $4) RETURNING title`;
        const values = [
          args.creatorId,
          new Date(),
          args.title,
          args.description
        ];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        const query = `INSERT INTO users(username, joined, email, last_logged_in) VALUES ($1, $2, $3, $4) RETURNING username`;
        const values = [
          args.username,
          new Date(),
          args.email,
          new Date(),
        ];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    updateUser: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        const query = `UPDATE users SET username=$1, email=$2, last_logged_in=$3 WHERE id=$4 RETURNING username`;
        const values = [
          args.username,
          args.email,
          new Date(),
          args.id
        ];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.mutation = RootMutation;
