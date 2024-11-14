import ArrowIcon from "../assets/ArrowIcon";
import "../style/CharacterTable.scss";
import noSearch from "../assets/Group 204.png";
import noSearchText from "../assets/Search for a character i.d in order to view a character.png";
import { CharacterTableProps } from "../assets/types/interface";

const characters = [
  { id: 1, name: "Rick Sanchez", species: "Human", status: "Alive", origin: "Earth", gender: "Male" },
  { id: 2, name: "Morty Smith", species: "Human", status: "Alive", origin: "Earth", gender: "Male" },
  { id: 3, name: "Superman", species: "Kryptonian", status: "Alive", origin: "Krypton", gender: "Male" },
  { id: 4, name: "Morty Smith", species: "Human", status: "Alive", origin: "Earth", gender: "Male" },
  { id: 5, name: "Rick Sanchez", species: "Human", status: "Alive", origin: "Earth", gender: "Male" },
  { id: 6, name: "Superman", species: "Kryptonian", status: "Alive", origin: "Krypton", gender: "Male" },
  { id: 7, name: "Morty Smith", species: "Human", status: "Alive", origin: "Earth", gender: "Male" },
  { id: 8, name: "Superman", species: "Kryptonian", status: "Alive", origin: "Krypton", gender: "Male" },
  { id: 9, name: "Rick Sanchez", species: "Human", status: "Alive", origin: "Earth", gender: "Male" },
  { id: 10, name: "Superman", species: "Kryptonian", status: "Alive", origin: "Krypton", gender: "Male" },
  { id: 11, name: "Morty Smith", species: "Human", status: "Alive", origin: "Earth", gender: "Male" },
  { id: 12, name: "Superman", species: "Kryptonian", status: "Alive", origin: "Krypton", gender: "Male" },
  { id: 13, name: "Rick Sanchez", species: "Human", status: "Alive", origin: "Earth", gender: "Male" },
  { id: 14, name: "Superman", species: "Kryptonian", status: "Alive", origin: "Krypton", gender: "Male" },
  { id: 15, name: "Morty Smith", species: "Human", status: "Alive", origin: "Earth", gender: "Male" },
  { id: 16, name: "Rick Sanchez", species: "Human", status: "Alive", origin: "Earth", gender: "Male" },
  { id: 17, name: "Morty Smith", species: "Human", status: "Alive", origin: "Earth", gender: "Male" },
  { id: 18, name: "Superman", species: "Kryptonian", status: "Alive", origin: "Krypton", gender: "Male" },
  { id: 19, name: "Rick Sanchez", species: "Human", status: "Alive", origin: "Earth", gender: "Male" },
  { id: 20, name: "Superman", species: "Kryptonian", status: "Alive", origin: "Krypton", gender: "Male" },
];


const CharacterTable = ({ isEmptyTable }: CharacterTableProps) => {
  const displayedCharacters = isEmptyTable ? [] : characters;

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>i.d</th>
            <th>Name</th>
            <th>Species</th>
            <th>Status</th>
            <th>Origin</th>
            <th>Gender</th>
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
                <td>{character.origin || "-"}</td>
                <td>{character.gender || "-"}</td>
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
    </div>
  );
};

export default CharacterTable;
