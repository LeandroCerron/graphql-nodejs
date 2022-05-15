const {GraphQLString} = require('graphql');

const hello = {
    type: GraphQLString,
    description: 'Returns a string',
    resolve: () => 'hello world'
}

const bye = {
    type: GraphQLString,
    description: 'Returns a string',
    resolve: () => 'bye world'
}

module.exports = {hello, bye};