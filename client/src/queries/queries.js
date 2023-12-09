import {gql} from '@apollo/client';

export const getAuthorsQuery = gql`
    {
      authors {
        name
        id
      }
    }
  `;

export const getBooks = gql`
  {
    books {
      name
      id
    }
  }
`;

export const addBookMutation=gql`
mutation{
    addBook(name:'', genre:'', authorID:''){
        name
        id
    }
}
`;


