import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ArrowIcon from "../assets/ArrowIcon";
import "../style/CharacterTable.scss";
import noSearch from "../assets/Group 204.png";
import noSearchText from "../assets/Search for a character i.d in order to view a character.png"; // Text image
import { Character, CharacterTableProps } from "../types/interface";

const CharacterTable = ({ isEmptyTable }: CharacterTableProps) => {
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

  const displayedCharacters = isEmptyTable ? [] : characters;

  return (
    <div className="table">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching characters: {error.message}</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>i.d</th>
              <th>Name</th>
              <th>Species</th>
              <th>Status</th>
              <th>Origin</th>
              <th>Gender</th>
              <th>image</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            {displayedCharacters.length === 0 ? (
              <tr>
                <td colSpan={7} className="no-results">
                  <div className="noSearch">
                    <img src={noSearch} alt="No results" />
                    <img src={noSearchText} alt="Search prompt" />
                  </div>
                </td>
              </tr>
            ) : (
              displayedCharacters.map((character, index) => (
                <tr key={index}>
                  <td>{character.id}</td>
                  <td>{character.name}</td>
                  <td>{character.species || "-"}</td>
                  <td>{character.status || "-"}</td>
                  <td>{character.origin?.name || "-"}</td>{" "}
                  <td>{character.gender || "-"}</td>
                  <td>
                    <img src={character.image || "-"} alt="" />
                  </td>
                  <td>
                    <button>
                      <ArrowIcon />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CharacterTable;
