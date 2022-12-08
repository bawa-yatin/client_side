import { useQuery, gql } from "@apollo/client";

// This particular query takes in an "ID" to get the details of
// a particular character
const GET_CHARACTER_DETAIL = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      gender
      image
      episode {
        name
        episode
      }
    }
  }
`;

// To pass in 'id' inside the query, we take a second paramter which is
// an object in which we define the variables object, which ultimately
// takes the 'id' parameter.

export const useCharacter = id => {
  const { error, loading, data } = useQuery(GET_CHARACTER_DETAIL, {
    variables: {
      id,
    },
  });

  return { error, loading, data };
};
