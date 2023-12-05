import graphql from 'graphql';
import _ from 'lodash';

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID,GraphQLInt ,GraphQLList} = graphql;

// Dummy data
var books = [
    { name: 'Harry Potter', genre: 'Fantasy', id: '1',authorID:'1' },
    { name: 'Superman', genre: 'Action', id: '2', authorID:'2' },
    { name: 'Batman', genre: 'Action', id: '3', authorID:'3' },
];

var authors = [
    { name: 'ayush Shrestha', age: 34, id: '1' },
    { name: 'ayush Shrestha', age: 54, id: '2' },
    { name: 'ayush Shrestha', age: 37, id: '3' },
];

const AuthorType=new GraphQLObjectType({
    name:'Author',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        books:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                //return _.filter(books,{authorID:parent.id})
            }
        }
    })
})

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author:{
            type:AuthorType,
            resolve(parent,args){
                //return _.find(authors,{id:parent.authorID});
            }
        }
    }),
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID} },
            
            resolve(parent, args) {
                console.log(parent,args);
                //return _.find(books, { id: args.id });
                // Code to get from the database or another source
            },
        },
        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                //return _.find(authors,{id:args.id});
                // Code to get from the database or another source
            }
        },
        books:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                //return books
            }
        },
        authors:{
            type:new GraphQLList(AuthorType),
            resolve(parent,args){
                //return authors
            }
        }
    },
});

const schema = new GraphQLSchema({
    query: RootQuery,
});

export default schema;