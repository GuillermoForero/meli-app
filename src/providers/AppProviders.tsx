import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'state/store';

interface Props {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }: Props) => {
  return (
      <Provider store={store}>
          <BrowserRouter>
              {children}
          </BrowserRouter>
      </Provider>
  );
};

export default AppProvider;
