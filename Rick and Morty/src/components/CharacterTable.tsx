import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ArrowIcon from "../assets/ArrowIcon";
import "../style/CharacterTable.scss";
import noSearch from "../assets/Group 204.png";
import noSearchText from "../assets/Search for a character i.d in order to view a character.png";
import { Character } from "../types/interface";
import BigRow from "./BigRow";
import TableBar from "./TableBar";
import PaginationControls from "./PaginationControls";

const CharacterTable = () => {
  const [expandedCharacters, setExpandedCharacters] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const totalPages = 10;


  const toggleExpand = (id: number) => {
    setExpandedCharacters((prev) =>
      prev.includes(id) ? prev.filter((charId) => charId !== id) : [...prev, id]
    );
  };

  const {
    data: characters = [],
    isLoading,
    error,
  } = useQuery<Character[]>({
    queryKey: ["characters"],
    queryFn: async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      return response.data.results;
    },
  });

  const displayedCharacters = characters;

  return (
    <div className="table">
      <PaginationControls
  currentPage={page}
  totalPages={totalPages}
  onNext={() => setPage((prev) => prev + 1)}
  onPrev={() => setPage((prev) => prev - 1)}
/>

      {isLoading ? (
        <tr>
          <td colSpan={7} className="no-results">
            <div>
              <img src={noSearch} alt="No results" />
              <h1>Loading...</h1>
            </div>
          </td>
        </tr>
      ) : error ? (
        <tr>
          <td colSpan={7} className="no-results">
            <div>
              <img src={noSearch} alt="No results" />
              <h1>Search for a character</h1>
            </div>
          </td>
        </tr>
      ) : (
        <TableBar
          tbody={
            displayedCharacters.length === 0 ? (
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
            )
          }
        />
      )}
    </div>
  );
};

export default CharacterTable;
