import { useQuery, gql } from "@apollo/client";

// In order to make a graphql query in a react app, we need to use 'gql'
// component given by apollo client

// GET_CHARACTERS is a gql query
const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        status
        gender
        image
        origin {
          dimension
        }
      }
    }
  }
`;

export const useCharacters = () => {
  // This obj consists of three properties i.e error, loading(boolean)
  // and actual data
  const { error, loading, data } = useQuery(GET_CHARACTERS);
  return { error, loading, data };
};
