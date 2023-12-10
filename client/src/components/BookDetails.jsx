import React from 'react';
import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';

const BookDetails = ({ bookId }) => {
    const { loading, error, data } = useQuery(getBookQuery, {
       skip: !bookId,
       variables: { id: bookId }
    });
 
 
    let content;
 
 
    if (loading) content = <p>Loading...</p>;
    else if (error) content = <p>Error :(</p>;
    else if (!bookId) content = <p>No book selected</p>;
    else {
       const book=data.book;
 
 
       let books = book.author.books.map((item) => {
          return <li key={item.id}>{item.name}</li>;
       });
       content = (
          <>
             <h2>{book.name}</h2>
             <p>{book.genre}</p>
             <p>{book.author.name}</p>
             <p>All boooks by this author</p>
             <ul className="other-books">{books}</ul>
          </>
       );
    }
 
 
    return <div id="book-details">{content}</div>;
 };
 export default BookDetails;
