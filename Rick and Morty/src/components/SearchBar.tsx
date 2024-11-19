import { useState } from "react";
import "../style/SearchBar.scss";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SearchBar = () => {
  const [searchId, setSearchId] = useState<string>("");

  const { data: character, refetch } = useQuery({
    queryKey: ["character", searchId],
    queryFn: async () => {
      if (!searchId) return null;
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${searchId}`
      );
      return response.data;
    },
    enabled: false,
  });

  const handleSearch = async () => {
    if (searchId) {
      await refetch();
      setSearchId("");
    } else {
      console.error("Please enter a character ID.");
    }
  };

  return (
    <div className="main_search_container">
      <div className="search_container">
        <span className="search_icon"></span>
        <input
          type="text"
          className="search_input"
          placeholder="Search for character I.d"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <div>
          <button onClick={handleSearch} className="search_button">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
