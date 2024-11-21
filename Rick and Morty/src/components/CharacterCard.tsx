import React, { useState } from "react";
import BigRow from "./BigRow";
import ArrowIcon from "../assets/ArrowIcon";
import TableBar from "./TableBar";
import noSearch from "../assets/Group 204.png";
import noSearchText from "../assets/Search for a character i.d in order to view a character.png";
import { useCharacterContext } from "../hooks/CharacterContext";

const CharacterCard = () => {
  const { characterData } = useCharacterContext();
  const [expandedCharacters, setExpandedCharacters] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedCharacters((prev) =>
      prev.includes(id) ? prev.filter((charId) => charId !== id) : [...prev, id]
    );
  };

  if (!characterData) {
    return(

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
                <tr>
                  <td>{characterData?.id}</td>
                  <td>{characterData?.name}</td>
                  <td>{characterData?.species}</td>
                  <td>{characterData?.status}</td>
                  <td>{characterData?.origin.name}</td>
                  <td>{characterData?.gender}</td>
                  <td>
                  <button onClick={() => toggleExpand(characterData.id)}>
                        <ArrowIcon />
                      </button>
                  </td>
                </tr>
                {expandedCharacters.includes(characterData.id) && (
                    <tr className="expanded-row">
                      <td colSpan={7}>
                        <BigRow character={characterData} />
                      </td>
                    </tr>
                  )}
              </>
            }
          />
      </div>
    </div>
  );
};

export default CharacterCard;
