import "../style/CharacterTable.scss"


const characters = [
  { id: 1, name: "Rick Sanchez", species: "Human", status: "Alive", origin: "Earth", gender: "Male" },
  { id: 2, name: "Morty Smith", species: "Human", status: "Alive", origin: "Earth", gender: "Male" },
  { id: 3, name: "Superman", species: "Kryptonian", status: "Alive", origin: "Krypton", gender: "Male" },
  { id: 4, name: "Jacob Black", address: "6405 Thornridge Cir, Jacksonville", email: "jeff.anderson@example.com" },
  { id: 5, name: "Arlene Steward", address: "5781 Spring St, Salinas", email: "kenzi.lawson@example.com" },
  { id: 6, name: "Nathan Flores", address: "9553 Railroad St, Lewisville", email: "chad.stephens@example.com" },
  { id: 7, name: "Marjorie Hawkins", address: "2118 Thornridge Cir, Syracuse", email: "beth.fernandez@example.com" },
  { id: 8, name: "Ralph Jones", address: "7736 Central St, South Bend", email: "seth.morales@example.com" },
  { id: 9, name: "Marvin Mccoy", address: "9915 Saddle Dr, San Francisco", email: "tanya.hill@example.com" },
  { id: 10, name: "Calvin Henry", address: "6638 Cackson St, Stockton", email: "sue.elliott@example.com" },
  { id: 11, name: "Julie Webb", address: "6386 Spring St, Anchorage", email: "joy.ramos@example.com" },
  { id: 12, name: "Dianne Cooper", address: "6513 Dogwood Ave, Syracuse", email: "isaac.gibson@example.com" },
  { id: 13, name: "Mitchell Russell", address: "2496 Miller Ave, Lansing", email: "debra.holt@example.com" }
];

const CharacterTable = () => {
  return (
    <div className="main_table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Species</th>
            <th>Status</th>
            <th>Origin</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((character, index) => (
            <tr key={index}>
              <td>{character.id}</td>
              <td>{character.name}</td>
              <td>{character.species || "-"}</td>
              <td>{character.status || "-"}</td>
              <td>{character.origin || "-"}</td>
              <td>{character.gender || "-"}</td>
              <td>{character.address || "-"}</td>
              <td>{character.email || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CharacterTable;
