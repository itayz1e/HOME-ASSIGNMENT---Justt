import { Character } from "../types/interface";
import "../style/BigRow.scss";

const BigRow = ({ character }: { character: Character }) => {
  return (
    <div className="big_row">
      <img
        src={character.image}
        alt={character.name}
        className="character_image"
      />
      <div className="character_details">
        <h5 className="header">CHARACTER DESCRIPTION</h5>
        <div className="details_grid">
          <p>
            <strong>i.d</strong>
            <br /> {character.id}
          </p>
          <p>
            <strong>Name</strong>
            <br /> {character.name}
          </p>
          <p>
            <strong>Gender</strong>
            <br /> {character.gender}
          </p>
          <p>
            <strong>Origin</strong>
            <br /> {character.origin?.name}
          </p>
          <p>
            <strong>Species</strong>
            <br /> {character.species}
          </p>
          <p>
            <strong>Status</strong>
            <br /> {character.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigRow;
