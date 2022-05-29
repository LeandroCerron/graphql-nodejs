const {GraphQLSchema, GraphQLObjectType} = require('graphql');
const {hello, bye} = require('./queries');
const {register} = require('./mutations');

const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    description: ' The root query type ',
    fields:{
        hello,
        bye
    }
});

const MutaionType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'The root mutation type',
    fields:{
        register
    }
});

const schemna = new GraphQLSchema({
    query: QueryType,
    mutation: MutaionType
});

module.exports = schemna;