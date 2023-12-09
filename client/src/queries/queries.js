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


