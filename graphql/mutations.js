const { GraphQLString } = require("graphql");

const register = {
    type: GraphQLString,
    description: 'Register a new user',
    args: {
        useraName: {type: GraphQLString},
        password: {type: GraphQLString},
        email:  {type: GraphQLString},
        displayName: {type: GraphQLString},
    },
    resolve: (parents, args) => {
        console.log(args)
        return `${args.useraName}, ${args.email}, ${args.displayName}`;
    }
}

module.exports = {
    register
}