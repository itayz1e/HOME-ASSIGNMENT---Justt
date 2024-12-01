import React, { useState } from "react";
import BigRow from "./BigRow";
import DownArrowIcon from "../assets/DownArrowIcon";
import TableBar from "./TableBar";
import noSearch from "../assets/images/Group 204.png";
import { useCharacterContext } from "../hooks/CharacterContext";

const CharacterCard = () => {
  const { characterData } = useCharacterContext();
  const [expandedCharacters, setExpandedCharacters] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedCharacters((prev) =>
      prev.includes(id) ? prev.filter((charId) => charId !== id) : [...prev, id]
    );
  };

  if (!characterData || characterData.length === 0) {
    return (
      <td colSpan={8} className="no-results">
        <div className="noSearch">
          <img src={noSearch} alt="No results" />
          <h1>Search for a character</h1>
        </div>
      </td>
    );
  }

  return (
    <div>
      <div className="table">
        <TableBar
          tbody={
            <>
              {characterData.map((character) => (
                <React.Fragment key={character.id}>
                  <tr>
                    <td>{character.id}</td>
                    <td>{character.name}</td>
                    <td>{character.species}</td>
                    <td>{character.status}</td>
                    <td>{character.origin.name}</td>
                    <td>{character.gender}</td>
                    <td>
                      <button onClick={() => toggleExpand(character.id)}>
                        <DownArrowIcon />
                      </button>
                    </td>
                  </tr>
                  {expandedCharacters.includes(character.id) && (
                    <tr className="expanded-row">
                      <td colSpan={7}>
                        <BigRow character={character} />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </>
          }
        />
      </div>
    </div>
  );
};

export default CharacterCard;
