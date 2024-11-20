import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCharacterContext } from "../hooks/CharacterContext";

const SearchCharacter = () => {
  const [searchId, setSearchId] = useState<string>("");
  // const { setCharacterData } = useCharacterContext();

  const { refetch } = useQuery({
    queryKey: ["character", searchId],
    queryFn: async () => {
      if (!searchId) return null;

      let response;
      if (/^\d+$/.test(searchId)) {
        response = await axios.get(`https://rickandmortyapi.com/api/character/${searchId}`);
      } else {
        response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchId}`);
      }

      return response.data;
    },
    enabled: false,
    // onSuccess: (data) => {
    //   setCharacterData(data); // שמור את התוצאה בקונטקסט
    // },
  });

  const handleSearch = () => {
    if (searchId.trim() !== "") {
      refetch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="Enter ID or Name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchCharacter;
