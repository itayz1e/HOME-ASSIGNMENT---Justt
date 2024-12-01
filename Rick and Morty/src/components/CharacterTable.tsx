import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DownArrowIcon from "../assets/DownArrowIcon";
import "../style/CharacterTable.scss";
import noSearch from "../assets/images/Group 204.png";
import BigRow from "./BigRow";
import TableBar from "./TableBar";
import PaginationControls from "./PaginationControls";
import { Character } from "../types/interface";

const CharacterTable = () => {
  const [expandedCharacters, setExpandedCharacters] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const totalPages = 42;

  const toggleExpand = (id: number) => {
    setExpandedCharacters((prev) =>
      prev.includes(id) ? prev.filter((charId) => charId !== id) : [...prev, id]
    );
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["characters", page],
    queryFn: async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      return response.data.results;
    },
  });

  const displayedCharacters = data || [];

  return (
    <div className="table">
      <PaginationControls
        currentPage={page}
        totalPages={totalPages}
        onNext={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        onPrev={() => setPage((prev) => Math.max(prev - 1, 1))}
      />

      {isLoading ? (
        <div className="no-results">
          <img src={noSearch} alt="No results" />
          <h1>Loading...</h1>
        </div>
      ) : error ? (
        <div className="no-results">
          <img src={noSearch} alt="No results" />
          <h1>Error loading characters</h1>
        </div>
      ) : (
        <TableBar
          tbody={
            displayedCharacters.length === 0 ? (
              <tr>
                <td colSpan={8} className="no-results">
                  <div className="noSearch">
                    <img src={noSearch} alt="No results" />
                    <h1>No characters found</h1>
                  </div>
                </td>
              </tr>
            ) : (
              displayedCharacters.map((character: Character) => (
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
