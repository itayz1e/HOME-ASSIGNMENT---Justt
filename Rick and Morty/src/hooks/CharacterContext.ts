import React, { createContext, ReactNode, useContext, useState } from "react";


interface CharacterContextType {
  characterData: string;
  setContextValue: React.Dispatch<React.SetStateAction<string>>;
}


const CharacterContext = createContext<CharacterContextType | undefined>(undefined);


interface CharacterProviderProps {
  children: ReactNode;
}

export const CharacterProvider: React.FC<CharacterProviderProps> = ({ children }) => {
  const [characterData, setCharacterData] = useState<string>("");


  const setContextValue: React.Dispatch<React.SetStateAction<string>> = (value) => {
    setCharacterData(value);
  };


  const contextValue: CharacterContextType = {
    characterData,
    setContextValue,
  };


  return (
    <CharacterProvider.Provider value={contextValue}>
    {children}
  </CharacterProvider.Provider>
  
  );
};


export const useCharacterContext = (): CharacterContextType => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error("useCharacterContext must be used within a CharacterProvider");
  }
  return context;
};