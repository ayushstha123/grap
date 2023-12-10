import React, { useState } from 'react';
import  {useQuery} from '@apollo/client';
import {getBooks} from '../queries/queries';
import BookDetails from './BookDetails';
const BookList = () => {
const [selectedBookID,setSelectedBookID]=useState(null);

  // Use useQuery hook to execute the GraphQL query
  const { loading, error, data } = useQuery(getBooks);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Extract the list of books from the data
  const books = data.books;
const handleSelected=(id)=>{
setSelectedBookID(id);
}

  return (
    <div>
      <ul id='book-list'>
        {/* Iterate over the books and display them */}
        {books.map((book) => (
          <li key={book.id} onClick={()=>handleSelected(book.id)}>{book.name}</li>
        
        ))}
{          console.log(selectedBookID)
}      </ul>

{<BookDetails bookId={selectedBookID} />}
    </div>
  );
};

export default BookList;
