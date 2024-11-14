export interface CharacterTableProps {
    isEmptyTable: boolean;
  }

export interface ContainerButtonsProps {
    setIsEmptyTable: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  export interface SearchBarProps {
    searchText: string;
  }

  export interface ContainerButtonsProps {
    onPickCharacterClick: () => void;
    onBrowseClick: () => void;
  }
  

  export interface Character {
    id: number;
    name: string;
    species: string;
    status: string;
    origin: {
      name: string;
      url: string;
    };
    gender: string;
    image: string;
  }