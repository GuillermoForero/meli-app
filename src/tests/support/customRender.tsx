import { BrowserRouter } from 'react-router-dom';

export * from '@testing-library/react';

import React from 'react';
import { render } from '@testing-library/react';

const AllTheProviders = (props: any) => (
    <BrowserRouter>{props.children}</BrowserRouter>
);
const customRender = (ui: any, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };
