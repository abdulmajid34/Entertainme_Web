const { ApolloServer, gql } = require('apollo-server');
const moviesSchema = require('./schema/moviesSchema')
const seriesSchema = require('./schema/seriesSchema')

const typeDefs = gql `

    type Response {
        message: String
    }

    type Query

    type Mutation

`;

const server = new ApolloServer({
    typeDefs: [typeDefs, moviesSchema.typeDefs, seriesSchema.typeDefs],
    resolvers: [moviesSchema.resolvers, seriesSchema.resolvers]
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});