export interface SearchHandlers {
  setSearchValue: (
    value: string
  ) => void;
  searchItems: () => void;
}
export interface SearchState {
  searchValue: string;
}
