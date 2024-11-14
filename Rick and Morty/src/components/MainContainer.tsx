import { useState } from "react";
import "../style/MainContainer.scss";
import CharacterTable from "./CharacterTable";
import ContainerButtons from "./ContainerButtons";
import SearchBar from "./SearchBar";

const MainContainer = () => {
  const [isEmptyTable, setIsEmptyTable] = useState(false);

  const handlePickCharacterClick = () => setIsEmptyTable(true);
  const handleBrowseClick = () => setIsEmptyTable(false);

  return (
    <div className="container">
      <div>
        <ContainerButtons
         setIsEmptyTable={setIsEmptyTable} 
         onPickCharacterClick={handlePickCharacterClick}
         onBrowseClick={handleBrowseClick}
         />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <CharacterTable isEmptyTable={isEmptyTable} />
      </div>
    </div>
  );
}

export default MainContainer;
