const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const sequelize = require('./db/index');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
    sequelize.authenticate()
        .then(() => {
            console.log(`Database conected`);
        }).catch(error => {
            console.log(`${error}`);
        })
});