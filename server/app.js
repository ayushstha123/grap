import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schema.js';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
app.use(cors());

// Making an API for Express to understand GraphQL
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Wrap the database connection code in an async function
const connectToDatabase = async () => {
  try {
    const conn = await mongoose.connect('mongodb://graphql:graphql@ac-gicpmv3-shard-00-00.kdmeax6.mongodb.net:27017,ac-gicpmv3-shard-00-01.kdmeax6.mongodb.net:27017,ac-gicpmv3-shard-00-02.kdmeax6.mongodb.net:27017/?replicaSet=atlas-tdyglg-shard-0&ssl=true&authSource=admin');
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

// Call the async function to connect to the database
connectToDatabase();

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
