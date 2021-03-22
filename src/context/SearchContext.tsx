import React, { createContext, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SearchHandlers, SearchState } from 'context/interfaces/interfaces';
import { itemsActions } from 'state/items';
import useNavigator from 'hook/useNavigator';
import { ROUTES_NAVIGATION } from 'router/routes';

export const SearchContext = createContext<{
  handlers?: SearchHandlers;
  state: SearchState;
}>({
  state: {
    searchValue: '',
  },
});


export const SearchProvider: React.FC = ({ children }: any) => {
  const dispatch = useDispatch();
  const { navigateTo } = useNavigator();
  const [state, setState] = useState<SearchState>({
    searchValue: '',
  });


  const setSearchValue = (
    value: string
  ) => {
    setState({
      searchValue: value,
    })
  };

  const searchItems = () => {
    if(state.searchValue){
      dispatch(itemsActions.searchItems(state.searchValue));
      navigateTo(ROUTES_NAVIGATION.SEARCH_ITEMS, {searchValue: state.searchValue})
    }
  };

  const contextValue = useMemo(
    () => ({
      handlers: {
        setSearchValue,
        searchItems,
      },
      state: state,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );

  return (
    <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>
  );
};
