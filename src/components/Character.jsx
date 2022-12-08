import React from "react";
import "./CharacterList.css";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router";

export default function Character() {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (loading) return <div>Loading...</div>;
  if (error || data.character === null) return <div>Something went wrong!</div>;

  return (
    <div className="character">
      <img
        src={data.character.image}
        alt="Character Image"
        width={750}
        height={750}
      />
      <div className="character-content">
        <h1>{data.character.name}</h1>
        <h3>{data.character.gender}</h3>
        <h2>Episodes List</h2>
        <div className="character-episode">
          {data.character.episode.map(ep => {
            return (
              <p>
                {ep.name} - <b>{ep.episode}</b>
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
