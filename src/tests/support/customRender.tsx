import { BrowserRouter } from 'react-router-dom';

export * from '@testing-library/react';

import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'consts/theme';

const AllTheProviders = (props: any) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>{props.children}</BrowserRouter>
  </ThemeProvider>
);
const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
