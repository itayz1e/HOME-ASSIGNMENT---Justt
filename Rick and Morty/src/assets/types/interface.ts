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
  