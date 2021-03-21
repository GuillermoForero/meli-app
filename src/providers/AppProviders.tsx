import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'state';
import { SearchProvider } from 'context/SearchContext';

interface Props {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <SearchProvider>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </SearchProvider>
    </Provider>
  );
};

export default AppProvider;
