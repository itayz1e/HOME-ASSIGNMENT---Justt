import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ArrowIcon from "../assets/ArrowIcon";
import "../style/CharacterTable.scss";
import noSearch from "../assets/Group 204.png";
import noSearchText from "../assets/Search for a character i.d in order to view a character.png";
import { Character,  } from "../types/interface";
import BigRow from "./BigRow";
import TableBar from "./TableBar";

const CharacterTable = () => {
  const [expandedCharacters, setExpandedCharacters] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedCharacters((prev) =>
      prev.includes(id) ? prev.filter((charId) => charId !== id) : [...prev, id]
    );
  };

  const { data: characters = [], isLoading, error } = useQuery<Character[]>({
    queryKey: ["characters"],
    queryFn: async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character-"
      );
      return response.data.results;
    },
  });

  const displayedCharacters = characters;

  return (
    <div className="table">
      {isLoading ? (
       <tr>
       <td colSpan={7} className="no-results">
         <div className="noSearch">
           <img src={noSearch} alt="No results" />
           <p>Loading</p>
         </div>
       </td>
     </tr>
      ) : error ? (
        <tr>
          <td colSpan={7} className="no-results">
            <div className="noSearch">
              <img src={noSearch} alt="No results" />
              <img src={noSearchText} alt="Search prompt" />
            </div>
          </td>
        </tr>
      ) : (
        <TableBar 
        tbody={displayedCharacters.length === 0 ? (
          <tr>
                <td colSpan={8} className="no-results">
                  <div className="noSearch">
                    <img src={noSearch} alt="No results" />
                    <img src={noSearchText} alt="Search prompt" />
                  </div>
                </td>
              </tr>
            ) : (
              displayedCharacters.map((character) => (
                <>
                  <tr key={character.id}>
                    <td>{character.id}</td>
                    <td>{character.name}</td>
                    <td>{character.species || "-"}</td>
                    <td>{character.status || "-"}</td>
                    <td>{character.origin?.name || "-"}</td>
                    <td>{character.gender || "-"}</td>
                    <td>
                      <button onClick={() => toggleExpand(character.id)}>
                        <ArrowIcon />
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
                </>
              ))
            )}
            
          
          />
          )}
      </div>
  );
};

export default CharacterTable;
