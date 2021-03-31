import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'state';
import { SearchProvider } from 'context/SearchContext';
import { ThemeProvider } from 'styled-components';
import { theme } from 'consts/theme';

interface Props {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <SearchProvider>
            {children}
          </SearchProvider>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default AppProvider;
