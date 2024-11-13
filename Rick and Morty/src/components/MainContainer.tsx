import "../style/MainContainer.scss";
import CharacterTable from "./CharacterTable";

function MainContainer() {
  return (
    <div className="container">
      <div className="container_buttons">
        <button className="right">
          <p>BROWSE</p>
        </button>
        <button className="left">
          <p>PICK A CHARACTER</p>
        </button>
      </div>
      <div>
      <CharacterTable />
      </div>
    </div>
  );
}

export default MainContainer;
