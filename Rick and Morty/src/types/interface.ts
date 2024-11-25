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
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

export interface SearchBarProps {
  onSwitchComponent: (component: "BROWSE" | "PICK") => void;
}