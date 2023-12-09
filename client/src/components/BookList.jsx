import React from 'react';
import  {useQuery} from '@apollo/client';
import {getBooks} from '../queries/queries';
const BookList = () => {


  // Use useQuery hook to execute the GraphQL query
  const { loading, error, data } = useQuery(getBooks);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Extract the list of books from the data
  const books = data.books;

  return (
    <div>
      <ul id='book-list'>
        {/* Iterate over the books and display them */}
        {books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
