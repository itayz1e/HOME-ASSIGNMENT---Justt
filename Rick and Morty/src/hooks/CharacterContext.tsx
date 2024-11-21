import React, { createContext, ReactNode, useContext, useState } from "react";

export interface Character {
  id: number;
  name: string;
  species: string;
  status: string;
  origin: { name: string };
  gender: string;
  image: string;
}


export interface CharacterContextType {
  characterData: Character | null;
  setCharacterData: React.Dispatch<React.SetStateAction<Character | null>>;
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

interface CharacterProviderProps {
  children: ReactNode;
}

export const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
  const [characterData, setCharacterData] = useState<Character | null>(null);

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
    throw new Error("useCharacterContext must be used within a CharacterProvider");
  }
  return context;
};
