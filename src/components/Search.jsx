import { React, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import "./CharacterList.css";

// Lazy query is used when we want to perform some action like searching,
// sorting data etc. Through lazy query, query gets executed only when a
// specific action is performed

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");

  // Lazy query returns an array instead of an object in which first
  // parameter is a function which is called when we need to invoke the
  // query, and the other parameter which is an object contains values
  // for 'loading, error, data, called'

  const [getLocations, { error, loading, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  console.log(error, loading, data, called);

  return (
    <div className="Search">
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>Loading...</div>}
      {error && <div>Something went wrong!</div>}
      {data && (
        <ul>
          {data.characters.results.map(character => {
            console.log(character);
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
