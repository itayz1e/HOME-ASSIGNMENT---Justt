import React, { createContext, useContext, useState } from "react";
import { Character, CharacterContextType, CharacterProviderProps } from "../types/interface";


const CharacterContext = createContext<CharacterContextType | undefined>(
  undefined
);

export const CharacterProvider: React.FC<CharacterProviderProps> = ({
  children,
}) => {
  const [characterData, setCharacterData] = useState<Character[]>([]);

  const contextValue: CharacterContextType = {
    characterData,
    setCharacterData,
  };

  return (
    <CharacterContext.Provider value={contextValue}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = (): CharacterContextType => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error(
      "useCharacterContext must be used within a CharacterProvider"
    );
  }
  return context;
};
