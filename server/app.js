import  express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';

const app=express();

//making an api for express to understand graphql
app.use('/graphql',graphqlHTTP({
    schema,
graphiql:true
}))

app.listen(4000,()=>{
    console.log("server is running on port 4000");
})