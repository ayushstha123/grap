import React from 'react'
import ApolloClient from '@apollo/client'
import { ApolloProvider } from '@apollo/client'

const BookList = () => {
    const client new ApolloClient({
        uri: 'http://localhost:4000/graphql',
    })
  return (
    <ApolloProvider client={client}>
    <div>
        <ul id='book-list'>
            <li>Book Name</li>
            </ul>
    </div></ApolloProvider>
  )
}

export default BookList