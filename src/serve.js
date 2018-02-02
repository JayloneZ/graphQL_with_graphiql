import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.use('/graphql', graphqlHTTP({
	schema: schema,
	graphiql: true,
}));

console.log('app listening on port 3000');
app.listen(3000);
