import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "../style/SearchBar.scss";
import { useCharacterContext } from "../hooks/CharacterContext";
import { SearchBarProps } from "../types/interface";



const SearchBar: React.FC<SearchBarProps> = ({ onSwitchComponent }) => {
  const [search, setSearch] = useState<string>("");
  const { setCharacterData } = useCharacterContext();

  const { refetch } = useQuery({
    queryKey: ["character", search],
    queryFn: async () => {
      if (!search) return null;

      const url = /^\d+$/.test(search)
        ? `https://rickandmortyapi.com/api/character/${search}`
        : `https://rickandmortyapi.com/api/character/?name=${search}`;
      const response = await axios.get(url);
      if (response.data.results) {
        setCharacterData(response.data.results);
        return response.data.results;
      }
      setCharacterData([response.data]);
      return [response.data];
    },
    enabled: false,
  });

  const handleSearch = async () => {
    if (search.trim() !== "") {
      const { data } = await refetch();

      if (data) {
        onSwitchComponent("PICK");
      }
      setSearch("");
    }
  };

  return (
    <div className="main_search_container">
      <div className="search_container">
        <span className="search_icon"></span>
        <input
          type="text"
          value={search}
          className="search_input"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter ID or Name"
        />
        <button onClick={handleSearch} className="search_button">
          Go
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
