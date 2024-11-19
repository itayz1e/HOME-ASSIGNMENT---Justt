import { useState } from "react";
import "../style/MainContainer.scss";
import CharacterTable from "./CharacterTable";
import ContainerButtons from "./ContainerButtons";
import SearchBar from "./SearchBar";
import CharacterCard from "./CharacterCard";
import  '../style/CharacterTable.scss'

const MainContainer = () => {
  const [activeComponent, setActiveComponent] = useState< "BROWSE" | "PICK" | null>(null);

  return (
    <div className="container">
      <div>
      <ContainerButtons
          onShowBrowse={() => setActiveComponent("BROWSE")}
          onShowPickCard={() => setActiveComponent("PICK")}
        />
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="box-content">
        {activeComponent === "BROWSE" && <CharacterTable />}
        {activeComponent === "PICK" && <CharacterCard />}
      </div>
    </div>
  );
}

export default MainContainer;
