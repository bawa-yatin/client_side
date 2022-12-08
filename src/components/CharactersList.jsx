import React from "react";
import { Link } from "react-router-dom";
import "./CharacterList.css";
import { useCharacters } from "../hooks/useCharacters";

export default function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;

  return (
    <React.Fragment>
      <div className="CharacterList">
        {data.characters.results.map(character => {
          return (
            <Link to={`/${character.id}`}>
              <img src={character.image} alt="Character Image" />
              <h2>{character.name}</h2>
            </Link>
          );
        })}
      </div>
    </React.Fragment>
  );
}
