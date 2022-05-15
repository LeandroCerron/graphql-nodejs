const {GraphQLSchema, GraphQLObjectType} = require('graphql');
const {hello, bye} = require('./queries');

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    description: ' The root query type ',
    fields:{
        hello,
        bye
    }
});

const schemna = new GraphQLSchema({
    query: QueryType
});

module.exports = schemna;